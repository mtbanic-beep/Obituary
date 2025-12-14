import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// make sure your styles load (adjust if your file name differs)
import "../tailwind.css"; // if tailwind.css is in project root
// OR if tailwind.css is in src, use:  import "./tailwind.css";

const el = document.getElementById("app");
if (!el) throw new Error('Missing <div id="app"></div> in index.html');

createRoot(el).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
