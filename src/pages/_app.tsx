import theme, { StyledTheme } from 'styles/theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledTheme>
        <StylesProvider injectFirst>
          <CssBaseline />
          <>
            <Component {...pageProps} />
          </>
        </StylesProvider>
      </StyledTheme>
    </ThemeProvider>
  )
}

export default MyApp
