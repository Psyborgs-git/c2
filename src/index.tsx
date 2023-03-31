// react
import React from 'react';
import ReactDOM from 'react-dom/client';

// react-router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RelayEnvironmentProvider } from 'react-relay';

// analytics
import reportWebVitals from './reportWebVitals';

// helmet
import { HelmetProvider } from 'react-helmet-async';

// Layout and pages
import env from './relay/environment';
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
      <RelayEnvironmentProvider environment={env}>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </RelayEnvironmentProvider>
    </HelmetProvider>
  </React.StrictMode>
);


reportWebVitals();
