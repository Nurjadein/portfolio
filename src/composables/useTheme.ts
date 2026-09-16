import { ref } from 'vue'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

function getInitialTheme(): Theme {
  const savedTheme = localStorage.getItem(STORAGE_KEY)

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme
  }

  return 'dark'
}

const theme = ref<Theme>(
  typeof window === 'undefined' ? 'dark' : getInitialTheme(),
)

function applyTheme() {
  document.documentElement.classList.toggle(
    'dark',
    theme.value === 'dark',
  )
}

function setTheme(value: Theme) {
  theme.value = value
  localStorage.setItem(STORAGE_KEY, value)
  applyTheme()
}

function toggleTheme() {
  setTheme(theme.value === 'dark' ? 'light' : 'dark')
}

if (typeof window !== 'undefined') {
  applyTheme()
}

export function useTheme() {
  return {
    theme,
    setTheme,
    toggleTheme,
  }
}