import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Theme from './utils/theme';

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <MantineProvider theme={Theme}>
        <App />
      </MantineProvider>
    </BrowserRouter>
  );
}
