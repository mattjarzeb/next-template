import styled from 'styled-components'
import { RESET_SNACKBAR } from 'redux/types'
import { IState } from 'redux/declaration'
import { useDispatch, useSelector } from 'react-redux'
import Snackbar from './Snackbar'
import AppBar from './AppBar'

const Container = styled('div')`
  display: grid;
  grid-template-columns:
    auto min(
      calc(100vw - 40px),
      ${(props) => props.theme.breakpoints.values.lg}px
    )
    auto;
  grid-template-rows: 64px auto minmax(calc(100vh - 380px), auto) 320px;
  grid-template-areas:
    'appBar appBar appBar'
    'header header header'
    'left main right'
    'footer footer footer';
  background-color: ${(props) => props.theme.colors.concrete};

  ${(props) => props.theme.breakpoints.down('md')} {
    grid-template-rows: 64px auto minmax(calc(100vh - 570px), auto) 320px;
  }
  ${(props) => props.theme.breakpoints.down('sm')} {
    grid-template-columns: auto 90vw auto;
  }
  ${(props) => props.theme.breakpoints.down('xs')} {
    grid-template-rows: 56px auto minmax(calc(100vh - 570px), auto) 540px;
    grid-template-columns: 10px auto 10px;
  }
`

const Layout = ({ children }) => {
  const snackbar = useSelector((state: IState) => state.snackbar)
  const dispatch = useDispatch()

  return (
    <Container>
      <AppBar />
      {children}
      <Snackbar
        open={!!snackbar.msg}
        onClose={() => dispatch({ type: RESET_SNACKBAR })}
        message={snackbar.msg || ''}
        variant={snackbar.type || 'info'}
      />
    </Container>
  )
}
export default Layout
