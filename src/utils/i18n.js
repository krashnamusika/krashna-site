import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-xhr-backend'
import { reactI18nextModule } from 'react-i18next'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en-GB',

    ns: ['translations'],
    defaultNS: 'translations',

    debug: process.env.NODE_ENV !== 'production',

    interpolation: {
      escapeValue: false,
    },

    returnObjects: true,
    load: 'currentOnly',
    whitelist: ['en-GB', 'nl-NL'],

    react: {
      wait: true,
    },
  })

export default i18n
