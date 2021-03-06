import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { makeStyles, createMuiTheme } from '@material-ui/core/styles'

import CssBaseline from '@material-ui/core/CssBaseline'
import ThemeProvider from '@material-ui/styles/ThemeProvider'

import Header from './components/Header'
import Footer from './components/Footer'

import Dashboard from './pages/Dashboard'
import Homepage from './pages/Homepage'
import Team from './pages/Team'
import Terms from './pages/Terms'

import EmptyLayout from './layouts/EmptyLayout'
import HeaderContentFooterLayout from './layouts/HeaderContentFooterLayout'

import RouteWrapper from './routes/RouteWrapper'

// Override the default MUI theme:
// https://material-ui.com/customization/default-theme/
const theme = createMuiTheme({
  palette: {
    primary: {
      // main: '#0087be', // dull blue
      main: '#555555', // dark gray
      dark: '#282c34', // React default dark background
      red: '#FF0000', // React default dark background
    },
  },
})

const useStyles = makeStyles(theme => ({
  app: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    minHeight: '100vh',
    backgroundColor: '#0087be',
  },

  content: {
    // backgroundColor: theme.palette.primary.dark,
    backgroundColor: '#282c34', // default overrides don't work here?
    display: 'flex',
    flexGrow: 1,
  },
}))

const App = props => {
  const classes = useStyles(props)
  console.log(classes)

  return (
    <>
      {/* Globally reset styling  */}
      {/* https://material-ui.com/components/css-baseline/ */}
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <RouteWrapper
              exact
              path="/"
              header={Header}
              content={Homepage}
              footer={Footer}
              layout={HeaderContentFooterLayout}
            />
            <RouteWrapper exact path="/dashboard" content={Dashboard} layout={EmptyLayout} />
            <RouteWrapper exact path="/team" content={Team} layout={EmptyLayout} />
            <RouteWrapper
              exact
              path="/terms"
              header={Header}
              content={Terms}
              footer={Footer}
              layout={HeaderContentFooterLayout}
            />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
