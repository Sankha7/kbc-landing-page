import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from "./hooks/useTheme";

const basename = import.meta.env.BASE_URL;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <HelmetProvider>
        <BrowserRouter basename={basename}>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
