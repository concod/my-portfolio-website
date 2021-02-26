import { createReducer } from 'redux-act'

import * as THEMES from 'styles/themes'
import STORAGE_KEYS from 'utils/constants/storage'

import * as ACTIONS from 'store/actions'

const getInitialTheme = () => {
  const storedTheme = localStorage.getItem(STORAGE_KEYS.THEME)
  if (storedTheme) {
    console.log('hi', THEMES[storedTheme.toString()], storedTheme)
    return {
      previousTheme: THEMES.LIGHT_TYPE_FOUR,
      currentTheme: THEMES[storedTheme],
    }
  } else {
    localStorage.setItem(STORAGE_KEYS.THEME, THEMES.LIGHT_TYPE_FOUR.key)
    return {
      previousTheme: THEMES.LIGHT_TYPE_FOUR,
      currentTheme: THEMES.LIGHT_TYPE_FOUR,
    }
  }
}

const setTheme = (state, theme, switchToPrevious = false) => {
  if (switchToPrevious) {
    localStorage.setItem(STORAGE_KEYS.THEME, state.previousTheme.key)
    return {
      ...state,
      previousTheme: state.currentTheme,
      currentTheme: state.previousTheme,
    }
  } else {
    // console.log(theme.key)
    localStorage.setItem(STORAGE_KEYS.THEME, theme.key)
    return {
      ...state,
      previousTheme: state.currentTheme,
      currentTheme: theme,
    }
  }
}

export default createReducer(
  {
    [ACTIONS.setDarkTheme]: state => setTheme(state, THEMES.DARK),

    [ACTIONS.setLightThemeOne]: state => setTheme(state, THEMES.LIGHT_TYPE_ONE),

    [ACTIONS.setLightThemeTwo]: state => setTheme(state, THEMES.LIGHT_TYPE_TWO),

    [ACTIONS.setLightThemeThree]: state =>
      setTheme(state, THEMES.LIGHT_TYPE_THREE),

    [ACTIONS.setLightThemeFour]: state =>
      setTheme(state, THEMES.LIGHT_TYPE_FOUR),

    [ACTIONS.setLightThemeFive]: state =>
      setTheme(state, THEMES.LIGHT_TYPE_FIVE),

    [ACTIONS.setLightThemeSix]: state => setTheme(state, THEMES.LIGHT_TYPE_SIX),

    [ACTIONS.setLightThemeSeven]: state =>
      setTheme(state, THEMES.LIGHT_TYPE_SEVEN),

    [ACTIONS.setLightThemeEight]: state =>
      setTheme(state, THEMES.LIGHT_TYPE_EIGHT),

    [ACTIONS.switchToPreviousTheme]: state => setTheme(state, null, true),
  },
  getInitialTheme(),
)
