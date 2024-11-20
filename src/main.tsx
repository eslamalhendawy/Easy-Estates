import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AppProvider } from "./Context/AppContext.tsx";
import { I18nextProvider } from "react-i18next";

import i18n from "i18next";
import enTranslation from "./locales/en.json";
import arTranslation from "./locales/ar.json";

const localLanguage = localStorage.getItem("language");
const selectedLanguage = localLanguage ? localLanguage : "en";

i18n.init({
  interpolation: { escapeValue: false },
  lng: selectedLanguage,
  resources: {
    en: {
      translation: enTranslation,
    },
    ar: {
      translation: arTranslation,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <AppProvider>
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </StrictMode>
  </AppProvider>
);
