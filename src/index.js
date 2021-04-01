import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './i18n'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import './index.css'
import App from './app'

ReactDOM.render((
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading...</div>}>
        <CssBaseline />
        <App />
      </Suspense>
    </ThemeProvider>
  </BrowserRouter>
), document.getElementById('root'))

