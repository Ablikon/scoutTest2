import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import ru from '../locales/ru.json'
import en from '../locales/en.json'
import kk from '../locales/kk.json'

const resources = {
  ru: { translation: ru },
  en: { translation: en },
  kk: { translation: kk }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ru',
    supportedLngs: ['ru', 'en', 'kk'],

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false
    },

    react: {
      useSuspense: false
    }
  })

export default i18n
