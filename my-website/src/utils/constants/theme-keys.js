import * as ACTIONS from 'store/actions'

const THEMES_KEYS = Object.freeze({
  DARK: 'DARK',
  LIGHT_TYPE_ONE: 'LIGHT_TYPE_ONE',
  LIGHT_TYPE_TWO: 'LIGHT_TYPE_TWO',
  LIGHT_TYPE_THREE: 'LIGHT_TYPE_THREE',
  LIGHT_TYPE_FOUR: 'LIGHT_TYPE_FOUR',
  LIGHT_TYPE_FIVE: 'LIGHT_TYPE_FIVE',
  LIGHT_TYPE_SIX: 'LIGHT_TYPE_SIX',
  LIGHT_TYPE_SEVEN: 'LIGHT_TYPE_SEVEN',
  LIGHT_TYPE_EIGHT: 'LIGHT_TYPE_EIGHT',
})

export default THEMES_KEYS

export const THEME_CONST = [
  // DARK
  {
    TYPE: THEMES_KEYS.DARK,
    action: ACTIONS.setDarkTheme,
    primary: {
      main: '#1e2a3a',
      light: '#1C63CE',
      lighter: '#4C9AFF',
      contrastText: '#fff',
    },
    secondary: {
      main: '#F4F5F7',
      light: '#EAEBED',
      contrastText: '#525252',
    },
  },
  // LIGHT ONE
  {
    TYPE: THEMES_KEYS.LIGHT_TYPE_ONE,
    action: ACTIONS.setLightThemeOne,
    primary: {
      main: '#0747A6',
      light: '#1C63CE',
      lighter: '#4C9AFF',
      contrastText: '#fff',
    },
    secondary: {
      main: '#F4F5F7',
      light: '#EAEBED',
      contrastText: '#525252',
    },
  },
  // LIGHT TWO
  {
    TYPE: THEMES_KEYS.LIGHT_TYPE_TWO,
    action: ACTIONS.setLightThemeTwo,
    primary: {
      main: '#ff7700',
      light: '#ff8c00',
      lighter: '#ffa100',
    },
    secondary: {
      main: '#fff',
      light: '#EAEBED',
      contrastText: '#525252',
    },
  },
  // LIGHT THREE
  {
    TYPE: THEMES_KEYS.LIGHT_TYPE_THREE,
    action: ACTIONS.setLightThemeThree,
    primary: {
      main: '#01AD9F',
      light: '#1AB59D',
      lighter: '#1BB69C',
    },
    secondary: {
      main: '#fff',
      light: '#EAEBED',
      contrastText: '#525252',
    },
  },
  // LIGHT FOUR
  {
    TYPE: THEMES_KEYS.LIGHT_TYPE_FOUR,
    action: ACTIONS.setLightThemeFour,
    primary: {
      main: '#E0D7CE',
      light: '#1AB59D',
      lighter: '#1BB69C',
    },
    secondary: {
      main: '#fff',
      light: '#EAEBED',
      contrastText: '#525252',
    },
  },
  // LIGHT FIVE
  {
    TYPE: THEMES_KEYS.LIGHT_TYPE_FIVE,
    action: ACTIONS.setLightThemeFive,
    primary: {
      main: '#282828',
      light: '#1AB59D',
      lighter: '#1BB69C',
    },
    secondary: {
      main: '#fff',
      light: '#EAEBED',
      contrastText: '#525252',
    },
  },
  // LIGHT SIX
  {
    TYPE: THEMES_KEYS.LIGHT_TYPE_SIX,
    action: ACTIONS.setLightThemeSix,
    primary: {
      main: '#EAEAE8',
      light: '#1AB59D',
      lighter: '#1BB69C',
    },
    secondary: {
      main: '#fff',
      light: '#EAEBED',
      contrastText: '#525252',
    },
  },
  // LIGHT SEVEN
  {
    TYPE: THEMES_KEYS.LIGHT_TYPE_SEVEN,
    action: ACTIONS.setLightThemeSeven,
    primary: {
      main: '#293D58',
      light: '#1AB59D',
      lighter: '#1BB69C',
    },
    secondary: {
      main: '#fff',
      light: '#EAEBED',
      contrastText: '#525252',
    },
  },
  // LIGHT EIGHT
  {
    TYPE: THEMES_KEYS.LIGHT_TYPE_EIGHT,
    action: ACTIONS.setLightThemeEight,
    primary: {
      main: '#767070',
      light: '#1AB59D',
      lighter: '#1BB69C',
    },
    secondary: {
      main: '#fff',
      light: '#EAEBED',
      contrastText: '#525252',
    },
  },
]
