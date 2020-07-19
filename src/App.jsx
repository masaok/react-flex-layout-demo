import React from 'react'
import logo from './logo.svg'
import './App.css'

import { ThemeProvider } from '@material-ui/styles'
import { makeStyles, createMuiTheme } from '@material-ui/core/styles'

import CssBaseline from '@material-ui/core/CssBaseline'

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

    // Position fixed tip: https://stackoverflow.com/a/4069794
    position: 'fixed',
    top: theme.spacing(8),
    bottom: theme.spacing(8),
    width: '100vw',
    justifyContent: 'center',
    overflow: 'auto', // scroll if necessary on all scrolling demo pages
  },
}))

const App = props => {
  const classes = useStyles(props)

  return (
    <>
      {/* Globally reset styling  */}
      {/* https://material-ui.com/components/css-baseline/ */}
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div className={classes.app}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              Learn React
            </a>
          </header>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
