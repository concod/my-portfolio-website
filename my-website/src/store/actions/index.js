import { createAction } from 'redux-act'

// actions for changing themes
export const setDarkTheme = createAction()
export const setLightThemeOne = createAction()
export const setLightThemeTwo = createAction()
export const setLightThemeThree = createAction()
export const setLightThemeFour = createAction()
export const setLightThemeFive = createAction()
export const setLightThemeSix = createAction()
export const setLightThemeSeven = createAction()
export const setLightThemeEight = createAction()
export const switchToPreviousTheme = createAction()

// action for toggling my-drawer
export const setIsMyDrawerOpen = createAction()

// action for toggling search-drawer
export const setIsSearchDrawerOpen = createAction()
