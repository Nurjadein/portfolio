
import { ref } from 'vue'

export const colorThemes = [
  'violet',
  'navy',
  'emerald',
  'ocean',
  'amber',
] as const

export type ColorTheme = (typeof colorThemes)[number]

const STORAGE_KEY = 'portfolio.color-theme'

function isColorTheme(value: string | null): value is ColorTheme {
  return colorThemes.some((colorTheme) => colorTheme === value)
}

function getInitialColorTheme(): ColorTheme {
  if (typeof window === 'undefined') {
    return 'violet'
  }

  const savedTheme = localStorage.getItem(STORAGE_KEY)

  return isColorTheme(savedTheme) ? savedTheme : 'violet'
}

const colorTheme = ref<ColorTheme>(getInitialColorTheme())

function applyColorTheme() {
  if (typeof document === 'undefined') {
    return
  }

  document.documentElement.dataset.colorTheme = colorTheme.value
}

function setColorTheme(value: ColorTheme) {
  colorTheme.value = value

  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, value)
  }

  applyColorTheme()
}

applyColorTheme()

export function useColorTheme() {
  return {
    colorTheme,
    colorThemes,
    setColorTheme,
  }
}