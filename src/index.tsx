import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from '@/App';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'react-toastify/dist/ReactToastify.css';

import { Theme } from './Theme';

const container = document.getElementById('root');
const root = createRoot(container!);
const app = (
  <BrowserRouter basename="/compendium/">
    <RecoilRoot>
      <Theme>
        <App />
      </Theme>
    </RecoilRoot>
  </BrowserRouter>
);
root.render(app);
