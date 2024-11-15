import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './locales/en';
import vi from './locales/vi';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    vi: {
      translation: vi,
    },
  },
  lng: 'en', // if you're using a language detector, do not define the lng option
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
  compatibilityJSON: 'v3',
  react: {
    useSuspense: false,
  },
});

export {i18n};
