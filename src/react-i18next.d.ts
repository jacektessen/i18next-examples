import en from "./locales/en/translation.json";
import de from "./locales/de/translation.json";

declare module "react-i18next" {
  interface CustomTypeOptions {
    resources: {
      en: typeof en;
      de: typeof de;
    };
  }
}
