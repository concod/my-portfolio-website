import { connect } from 'react-redux'
import { ThemeProvider } from '@material-ui/core/styles'
import { Button, CssBaseline, MuiThemeProvider } from '@material-ui/core'
import { Switch, Redirect, Route, useParams, useLocation } from 'react-router-dom'
import ThemeToggler from 'components/ThemeToggler'
import ThemePalleteTray from 'components/ThemePalleteTray'
import './App.css'
import MyDrawer from 'parts/MyDrawer'
import SearchDrawer from 'parts/SearchDrawer'
import Layout from 'parts/Layout'
import { Suspense } from 'react'
import { PAGES } from 'utils/constants/pages-links'
import Home from 'pages/Home'
import Themes from 'styles/theme'
import { lazy } from 'react'
import LazyLoadingErrorBoundary from 'hocs/LazyLoadingErrorBoundary'
import StoryBook from 'pages/StoryBook'

// import LandingPages from 'pages/LandingPages'
const Routes = ({ path, component }) => {
  return <Route path={path} component={component} />
}
const LandingPages = lazy(() => import(/* webpackChunkName: 'account-info' */ 'pages/LandingPages'))

const App = ({ theme }) => {
  console.log(theme)
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Suspense fallback='Loading...'>
            <LazyLoadingErrorBoundary>
              <Switch>
                {/* <Route */}

                {/* <Routes path={PAGES.HOME} component={Home} /> */}
                <Redirect exact from='/' to={PAGES.HOME} />
                <Routes path={PAGES.LANDING_PAGES_VIEW} component={LandingPages} />
                <Routes path={PAGES.STORY_BOOK} component={StoryBook} />
              </Switch>
            </LazyLoadingErrorBoundary>
          </Suspense>
        </Layout>
        <ThemePalleteTray />
        {/* <ThemeToggler /> */}
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

const mapStateToProps = state => {
  return {
    theme: state.themes.currentTheme,
    // keys: state.themes.currentTheme.key,
  }
}
export default connect(mapStateToProps, null)(App)
