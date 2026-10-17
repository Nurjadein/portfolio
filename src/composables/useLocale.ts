
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'

import { syncDocumentDirection } from '@/i18n/direction'
import type { AppLocale } from '@/i18n'

export function useLocale() {
  const { locale, t } = useI18n({ useScope: 'global' })

  watch(
    locale,
    (value) => {
      const selectedLocale = value as AppLocale

      localStorage.setItem('portfolio.locale', selectedLocale)
      syncDocumentDirection(selectedLocale)
    },
    { immediate: true },
  )

  function setLocale(nextLocale: AppLocale) {
    locale.value = nextLocale
  }

  function toggleLocale() {
    locale.value = locale.value === 'en' ? 'ar' : 'en'
  }

  return {
    locale,
    t,
    setLocale,
    toggleLocale,
  }
}
