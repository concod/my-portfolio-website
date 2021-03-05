import { createMuiTheme } from '@material-ui/core/styles'
import THEMES_KEYS, { THEME_CONST } from 'utils/constants/theme-keys'
import * as ACTIONS from 'store/actions'
import { THEME_CUSTOM_PROPS } from 'utils/helpers/custom-theme-props'

const THEMES = THEME_CONST.reduce(
  (acc, cur) => ({
    ...acc,
    [cur.TYPE]: createMuiTheme({
      type: cur.TYPE,
      action: cur.action,
      overrides: {
        // MuiCssBaseline: {
        //   '@global': {
        //     '@font-face': [Gustanlp],
        //   },
        // },
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
        primary: cur.primary,
        secondary: cur.secondary,
      },

      typography: {
        h5: {
          fontWeight: 'bold',
          fontSize: 14,
          lineHeight: 1.4,
          letterSpacing: 'normal',
        },
      },
      layout: THEME_CUSTOM_PROPS.layout,
    }),
  }),
  {},
)

export default THEMES
