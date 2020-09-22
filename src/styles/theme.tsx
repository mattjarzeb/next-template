import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import { red } from '@material-ui/core/colors'
import { withTheme as muiWithTheme } from '@material-ui/core'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  }
})

function StyledComponentsTheme(props) {
  return <ThemeProvider theme={props.theme}>{props.children}</ThemeProvider>
}

export const StyledTheme = muiWithTheme(StyledComponentsTheme)

export default theme
