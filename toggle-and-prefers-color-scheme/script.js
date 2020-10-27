class ThemeManager {
  constructor({ initialTheme }) {
    this.currentTheme = initialTheme
  }

  updateTheme(newTheme) {
    const oldTheme = this.currentTheme
    const dom = document.documentElement

    dom.classList.remove(oldTheme)
    dom.classList.add(newTheme)

    this.currentTheme = newTheme
  }
}

// Run browser query for checking user's preferred color scheme
const darkSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)')
const initialTheme = darkSchemeQuery.matches ? 'dark' : 'light'

// Instantiate Theme Manager and load initial theme
const themeManager = new ThemeManager({ initialTheme })
themeManager.updateTheme(initialTheme)

document.querySelector('button').addEventListener('click', () => {
  const newTheme = themeManager.currentTheme === 'light' ? 'dark' : 'light'
  themeManager.updateTheme(newTheme)
})
