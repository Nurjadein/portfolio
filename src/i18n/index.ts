import { createI18n } from 'vue-i18n'

import ar from './locales/ar.json'
import en from './locales/en.json'

export type AppLocale = 'en' | 'ar'

const getInitialLocale = (): AppLocale => {
  const savedLocale = localStorage.getItem('portfolio.locale')

  return savedLocale === 'ar' ? 'ar' : 'en'
}

export const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: 'en',
  messages: {
    en,
    ar,
  },
})