import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ContactProvider from "./context/ContactProvider.jsx";
import App from "./App.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <ContactProvider>
    <StrictMode>
      <App />
    </StrictMode>
    ,
  </ContactProvider>
);
