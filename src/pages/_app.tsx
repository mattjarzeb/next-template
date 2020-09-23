import React from 'react'
import Layout from 'components/layout'
import { wrapper } from 'redux/store'

import theme, { StyledTheme } from 'styles/theme'
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledTheme>
        <StylesProvider injectFirst>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </StylesProvider>
      </StyledTheme>
    </ThemeProvider>
  )
}

export default wrapper.withRedux(MyApp)
