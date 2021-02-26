import { createMuiTheme } from '@material-ui/core/styles'

import THEMES_KEYS from 'utils/constants/theme-keys'
import * as ACTIONS from 'store/actions'
import { THEME_CUSTOM_PROPS } from 'utils/helpers/custom-theme-props'

import GustanlpWoff2 from 'assets/fonts/Gustanlp-Medium.woff2'

const Gustanlp = {
  fontFamily: 'Gustanlp',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
  local('Gustanlp'),
  local('Gustanlp-Regular'),
    url(${GustanlpWoff2}) format('woff2')
  `,
  // unicodeRange:
  //   'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}

export const DARK = createMuiTheme({
  key: THEMES_KEYS.DARK,
  action: ACTIONS.setDarkTheme,
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#1e2a3a',
      navColor: '#1e2a3a',
      navText: '#b8bcc1',
      navTitle: '#fff',
      navIcon: '#eeede8',
      headerColor: '#111821',
      headerTitle: '#fff',
      headerText: '#b4b6b9',
      projectBody: '#111821',
      projectTitle: '#fff',
      cardColor: '#151e29',
      cardText: '#b4b6b9',
    },
  },
  layout: THEME_CUSTOM_PROPS.layout,
})

export const LIGHT_TYPE_ONE = createMuiTheme({
  key: THEMES_KEYS.LIGHT_TYPE_ONE,
  action: ACTIONS.setLightThemeOne,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [Gustanlp],
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 0,
      },
    },
  },
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#0747A6',
      light: '#1C63CE',
      lighter: '#4C9AFF',
      //
      navText: '#eeede8',
      navTitle: '#eeede8',
      navIcon: '#eeede8',
      headerTitle: '#4c4b4c',
      headerText: '#4c4b4c',
      projectBody: '#fbfbfb',
      projectTitle: '#4c4b4c',
      cardColor: '#151e29',
      contrastText: '#fff',
    },

    secondary: {
      main: '#F4F5F7',
    },
  },
  layout: THEME_CUSTOM_PROPS.layout,
})

export const LIGHT_TYPE_TWO = createMuiTheme({
  key: THEMES_KEYS.LIGHT_TYPE_TWO,
  action: ACTIONS.setLightThemeTwo,
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#ff7700',
      light: '#ff8c00',
      lighter: '#ffa100',
      // light:
      navText: '#42382e',
      navTitle: '#42382e',
      navIcon: '#42382e',
      headerColor: '#fff',
      headerTitle: '#42382e',
      headerText: '#42382e',
      projectTitle: '#42382e',
      contrastText: '#fff',
    },
    secondary: {
      main: '#fff',
    },
  },
  layout: THEME_CUSTOM_PROPS.layout,
})

export const LIGHT_TYPE_THREE = createMuiTheme({
  key: THEMES_KEYS.LIGHT_TYPE_THREE,
  action: ACTIONS.setLightThemeThree,

  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#01AD9F',
      light: '#1AB59D',
      lighter: '#1BB69C',
      navText: '#060607',
      navTitle: '#060607',
      navIcon: '#060607',
      headerColor: '#fff',
      headerTitle: '#42382e',
      headerText: '#42382e',
      projectTitle: '#42382e',
      contrastText: '#fff',
    },
    secondary: {
      main: '#fff',
    },
  },
  layout: THEME_CUSTOM_PROPS.layout,
})

export const LIGHT_TYPE_FOUR = createMuiTheme({
  key: THEMES_KEYS.LIGHT_TYPE_FOUR,
  action: ACTIONS.setLightThemeFour,
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#767070',
      navColor: '#e0d7ce',
      navText: '#4c4c4c',
      navTitle: '#4c4c4c',
      navIcon: '#4c4c4c',
      headerColor: '#454641',
      headerTitle: '#fcfcfc',
      headerText: '#fcfcfc',
      projectTitle: '#fcfcfc',
      projectBody: 'lightgrey',
    },
    secondary: {
      main: '#F7F7F7',
    },
  },
  layout: THEME_CUSTOM_PROPS.layout,
})

export const LIGHT_TYPE_FIVE = createMuiTheme({
  key: THEMES_KEYS.LIGHT_TYPE_FIVE,
  action: ACTIONS.setLightThemeFive,
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#282828',
      navColor: '#282828',
      navText: '#fbfdff',
      navTitle: '#fbfdff',
      navIcon: '#fbfdff',
      headerColor: '#cccccc',
      headerTitle: '#1f2b36',
      headerText: '#1f2b36',
      projectTitle: '#1f2b36',
      projectBody: '#fff',
    },
  },
  layout: THEME_CUSTOM_PROPS.layout,
})

export const LIGHT_TYPE_SIX = createMuiTheme({
  key: THEMES_KEYS.LIGHT_TYPE_SIX,
  action: ACTIONS.setLightThemeSix,
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#eaeae8',
      navColor: '#eaeae8',
      navTitle: '#ba9a61',
      navText: '#595957 ',
      navIcon: '#ba9a61',
      headerColor: '#2d3e50',
      headerTitle: '#ba9a61',
      headerText: '#fff',
      projectTitle: '#ba9a61',
      projectBody: '#fff',
    },
  },
  layout: THEME_CUSTOM_PROPS.layout,
})

export const LIGHT_TYPE_SEVEN = createMuiTheme({
  key: THEMES_KEYS.LIGHT_TYPE_SEVEN,
  action: ACTIONS.setLightThemeSeven,
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#283d58',
      navColor: '#283d58',
      navText: '#fff',
      navTitle: '#fff',
      navIcon: '#fff',
      headerColor: '#eaf1fb',
      headerTitle: '#4c4b4c',
      headerText: '#4c4b4c',
      projectBody: '#fbfbfb',
      projectTitle: '#4c4b4c',
      cardColor: '#151e29',
    },
  },
  layout: THEME_CUSTOM_PROPS.layout,
})

export const LIGHT_TYPE_EIGHT = createMuiTheme({
  key: THEMES_KEYS.LIGHT_TYPE_EIGHT,
  action: ACTIONS.setLightThemeEight,
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#767070',
      navColor: '#767070',
      navText: '#fff',
      navTitle: '#fff',
      navIcon: '#fff',
      headerColor: '#f7f7f7',
      headerTitle: '#4c4b4c',
      headerText: '#4c4b4c',
      projectBody: '#fbfbfb',
      projectTitle: '#4c4b4c',
      cardColor: '#151e29',
    },
  },
  layout: THEME_CUSTOM_PROPS.layout,
})
