import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import de from "./locales/de/translation.json";

const paths = ["./locales/en/translation.json", "./locales/de/translation.json"];

// const resources = { en: { namespace1: en }, de: { namespace1: de } };

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // resources,
    lng: "en", // language to use, more information
    fallbackLng: ["en", "de", "en2"],
    debug: true,
    defaultNS: "namespace1",

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

// ["./locales/en/translation.json"].forEach((path) =>
//   import(`${path}`).then((res) => i18n.addResourceBundle("en", "namespace1", res))
// );
paths.forEach((path) => {
  const langObj = require(`${path}`);
  console.log({ lang3: langObj });
  i18n.addResourceBundle("en", "namespace1", langObj);
});
i18n.addResourceBundle("en", "namespace1", { newItem: "The new item added after init" });

export default i18n;
