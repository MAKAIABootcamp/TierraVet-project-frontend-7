import React from "react";
import { createRoot } from "react-dom/client"; 
import './index.css'
import AppRouter from "./router/AppRouter";
import './index.css'

const rootElement = document.getElementById("root");
createRoot(rootElement).render(
  <React.StrictMode>
      <AppRouter />
  </React.StrictMode>
);
