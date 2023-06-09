import { defineConfig, loadEnv } from 'vite';
import path from 'path';

import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { createHtmlPlugin } from 'vite-plugin-html';
import checker from 'vite-plugin-checker';

import papa from 'papaparse';
import toSource from 'tosource';
import { createFilter } from 'rollup-pluginutils';

import { dependencies } from './package.json';

function renderChunks(deps) {
  let chunks = {};
  Object.keys(deps).forEach(key => {
    if (['react', 'react-router-dom', 'react-dom'].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}

/**
 * @see https://github.com/rollup/rollup-plugin-dsv/blob/master/src/index.js
 */
const customCsvLoader = (options = {}) => {
	const filter = createFilter();
	return {
		name: 'customCsvLoader',
		transform: (code, id) => {    
			if (path.extname(id) !== '.csv' || !filter(id)) {
        return null;
      }

			let { data: rows } = papa.parse(code, {
        delimiter: ';',
        header: true,
        dynamicTyping: false,
        skipEmptyLines: true,
        comments: '#',
        transform: v => v.trim(),
      });
			return {
				code: `export default ${toSource(rows)};`,
				map: { mappings: '' }
			};
		}
	};
}


export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, 'env');

  return {
    base: '/compendium/',
    server: {
      hmr: true,
      port: 5666,
    },
    plugins: [
      react({
        include: ['**/*.tsx', '**/*.ts'],
      }),
      customCsvLoader(),
      tsconfigPaths(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            ...env,
            MODE: mode,
          },
        },
      }),
      checker({ typescript: true }),
    ],
    resolve: {
      alias: { '@': path.resolve(__dirname, 'src/') },
    },
    css: {
      postcss: ctx => ({
        parser: ctx.parser ? 'sugarss' : false,
        map: ctx.env === 'development' ? ctx.map : false,
        plugins: {
          'postcss-import': {},
          'postcss-nested': {},
          cssnano: ctx.env === 'production' ? {} : false,
          autoprefixer: { overrideBrowserslist: ['defaults'] },
        },
      }),
    },
    build: {
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-router-dom', 'react-dom'],
            ...renderChunks(dependencies),
          },
        },
      },
    },
    test: {
      globals: true,
      coverage: {
        reporter: ['text', 'json', 'html'],
      },
    },
  };
});
