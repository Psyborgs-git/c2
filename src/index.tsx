// react
import React from 'react';
import ReactDOM from 'react-dom/client';

// react-router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// analytics
import reportWebVitals from './reportWebVitals';

// helmet
import { HelmetProvider } from 'react-helmet-async';

// Layout and pages
import ThemeProvider from './theme';
import routes from './consts/routerConfig';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const helmetContext = {};
const router = createBrowserRouter(routes);

root.render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);


reportWebVitals();
