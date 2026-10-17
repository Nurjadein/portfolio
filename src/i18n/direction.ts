import type { AppLocale } from './index'

export function syncDocumentDirection(locale: AppLocale): void {
  const documentElement = document.documentElement

  documentElement.lang = locale
  documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
}