import { createMuiTheme } from '@material-ui/core/styles'

import THEMES_KEYS from 'utils/constants/theme-keys'
import * as ACTIONS from 'store/actions'
import { THEME_CUSTOM_PROPS } from 'utils/helpers/custom-theme-props'

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
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#8b8b8b',
      navColor: '#8b8b8b',
      navText: '#eeede8',
      navTitle: '#eeede8',
      navIcon: '#eeede8',
      headerColor: '#efeee8',
      headerTitle: '#4c4b4c',
      headerText: '#4c4b4c',
      projectBody: '#fbfbfb',
      projectTitle: '#4c4b4c',
      cardColor: '#151e29',
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
      main: '#ffeddf',
      navColor: '#ffeddf',
      navText: '#42382e',
      navTitle: '#42382e',
      navIcon: '#42382e',
      headerColor: '#fff',
      headerTitle: '#42382e',
      headerText: '#42382e',
      projectTitle: '#42382e',
      projectBody: '#EBECF0',
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
      main: '#f0ece3',
      navColor: '#f0ece3',
      navText: '#060607',
      navTitle: '#060607',
      navIcon: '#060607',
      headerColor: '#fff',
      headerTitle: '#42382e',
      headerText: '#42382e',
      projectTitle: '#42382e',
      projectBody: '#fff',
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
      main: '#e0d7ce',
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
