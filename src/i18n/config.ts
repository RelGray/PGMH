import i18n from "i18next";                      
import i18nHttpBackend from "i18next-http-backend";

import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .use(i18nHttpBackend)
  .init({               
    lng: "en",
    fallbackLng: "en",
    backend: {
      loadPath: "src/i18n/locales/{{lng}}/{{ns}}.json",
    },
    ns: ["common", "resume"],
    defaultNS: "common",

    // Enables useful output in the browser’s
    // dev console.
    debug: true,

    // Normally, we want `escapeValue: true` as it
    // ensures that i18next escapes any code in
    // translation messages, safeguarding against
    // XSS (cross-site scripting) attacks. However,
    // React does this escaping itself, so we turn 
    // it off in i18next.
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
