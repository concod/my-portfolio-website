import { connect } from 'react-redux'
import { ThemeProvider } from '@material-ui/core/styles'
import { Button, CssBaseline, MuiThemeProvider } from '@material-ui/core'

import ThemeToggler from 'components/ThemeToggler'
import ThemePalleteTray from 'components/ThemePalleteTray'
import './App.css'
import MyDrawer from 'parts/MyDrawer'

const App = ({ theme, keys }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyDrawer />
        <Button color="primary" variant="contained">
          hizzzzccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        </Button>
        <ThemePalleteTray />
        {/* <ThemeToggler /> */}
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

const mapStateToProps = state => {
  return {
    theme: state.themes.currentTheme,
    keys: state.themes.currentTheme.key,
  }
}
export default connect(mapStateToProps, null)(App)
