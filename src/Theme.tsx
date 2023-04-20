import { createTheme } from '@mui/material';
import { PropsWithChildren, useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { isDarkModeState } from './services/state';

const createThemeByMode = (isDark: boolean) => createTheme({
  palette: {
    mode: isDark ? 'dark' : 'light',
    // background: {
    //   default: '#eeeeee'
    // },
  },
    // components: {
  //   MuiInputBase: {
  //     styleOverrides: {
  //       root: {
  //         background: '#ffffff'
  //       }
  //     }
  //   }
  // }
});

export const Theme = ({ children }: PropsWithChildren) => {
  const isDark = useRecoilValue(isDarkModeState);

  const theme = useMemo(() => createThemeByMode(isDark), [isDark]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme={true} />
      {children}
    </ThemeProvider>
  );
}

export const theme = createTheme({
  palette: {
    mode: 'light',

  },

});
