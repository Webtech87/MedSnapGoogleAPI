import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: ["en", "pt"],
    supportedLngs: ["en", "pt"],
    debug: true,
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // path in public folder
    },
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    detection: {
        order: ["localStorage", "cookie", "navigator", "htmlTag"],
        caches: ["localStorage"],
    },
  });

export default i18n;