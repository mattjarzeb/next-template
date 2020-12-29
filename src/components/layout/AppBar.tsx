import {
  AppBar as MuiAppBar,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger
} from '@material-ui/core'
import React from 'react'

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  )
}

const AppBar = () => {
  return (
    <HideOnScroll>
      <MuiAppBar>
        <Toolbar>
          <Typography variant='h6'>Scroll to Hide App Bar</Typography>
        </Toolbar>
      </MuiAppBar>
    </HideOnScroll>
  )
}

export default AppBar
