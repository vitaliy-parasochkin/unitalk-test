import {createRoot} from 'react-dom/client';
import {ThemeProvider} from '@mui/material';
import {theme} from './styles/theme.ts';
import {Provider} from 'react-redux';
import App from './App.tsx';
import store from './store';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
