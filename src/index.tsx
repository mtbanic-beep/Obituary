import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css"; // ✅ THIS is the important line

const el = document.getElementById("app");

if (!el) {
  throw new Error('Missing <div id="app"></div> in index.html');
}

createRoot(el).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
