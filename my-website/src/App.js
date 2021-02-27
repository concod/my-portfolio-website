import { connect } from 'react-redux'
import { ThemeProvider } from '@material-ui/core/styles'
import { Button, CssBaseline, MuiThemeProvider } from '@material-ui/core'

import ThemeToggler from 'components/ThemeToggler'
import ThemePalleteTray from 'components/ThemePalleteTray'
import './App.css'
import MyDrawer from 'parts/MyDrawer'
import SearchDrawer from 'parts/SearchDrawer'

const App = ({ theme, keys }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          hikkkkkkkkkkkkkkkkolkokokokokokokokoookookokkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
        </div>
        <MyDrawer />
        <SearchDrawer />
        {/* <Button color="primary" variant="contained">
          hizzzzccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        </Button> */}
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
