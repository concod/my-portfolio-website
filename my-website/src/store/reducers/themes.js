import { createReducer } from 'redux-act'

import { switchToPreviousTheme } from 'store/actions'
import THEMES from 'styles/theme'

import STORAGE_KEYS from 'utils/constants/storage'

const getInitialTheme = () => {
  const storedTheme = localStorage.getItem(STORAGE_KEYS.THEME)
  if (storedTheme !== 'undefined') {
    console.log('hi', THEMES[storedTheme.toString()], storedTheme)
    return {
      previousTheme: THEMES.LIGHT_TYPE_FOUR,
      currentTheme: THEMES[storedTheme],
    }
  } else {
    localStorage.setItem(STORAGE_KEYS.THEME, THEMES.LIGHT_TYPE_FOUR)
    return {
      previousTheme: THEMES.LIGHT_TYPE_FOUR,
      currentTheme: THEMES.LIGHT_TYPE_FOUR,
    }
  }
}

const setTheme = (state, theme, switchToPrevious = false) => {
  if (switchToPrevious) {
    localStorage.setItem(STORAGE_KEYS.THEME, state.previousTheme.type)
    return {
      ...state,
      previousTheme: state.currentTheme,
      currentTheme: state.previousTheme,
    }
  } else {
    localStorage.setItem(STORAGE_KEYS.THEME, theme.type)
    return {
      ...state,
      previousTheme: state.currentTheme,
      currentTheme: theme,
    }
  }
}

const getThemeReducer = () =>
  Object.values(THEMES).reduce((acc, cur) => ({ ...acc, [cur.action]: state => setTheme(state, cur) }), {
    [switchToPreviousTheme]: state => setTheme(state, null, true),
  })

export default createReducer(getThemeReducer(), getInitialTheme())
