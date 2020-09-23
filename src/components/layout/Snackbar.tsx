import * as React from 'react'
import { Snackbar as MuiSnackbar, Typography } from '@material-ui/core'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import WarningIcon from '@material-ui/icons/Warning'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import { amber, green, red, blue } from '@material-ui/core/colors'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import styled from 'styled-components'

interface IProps {
  open: boolean
  onClose: () => void
  message: string
  variant: 'error' | 'warning' | 'info' | 'success'
}

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
}

const variantColor = {
  success: green[600],
  warning: amber[700],
  error: red[600],
  info: blue[500]
}

const Message = styled(Typography)`
  display: flex;
  align-items: center;
`

const Snackbar = ({ open, onClose, message, variant }: IProps) => {
  const Icon = variantIcon[variant]

  return (
    <MuiSnackbar
      open={open}
      onClose={onClose}
      message={message}
      autoHideDuration={3000}
    >
      <SnackbarContent
        style={{
          backgroundColor: variantColor[variant]
        }}
        message={
          <Message variant={'body1'} component={'span'}>
            <Icon
              style={{
                fontSize: 20,
                opacity: 0.9,
                marginRight: '8px'
              }}
            />
            {message}
          </Message>
        }
        action={[
          <IconButton color='inherit' onClick={onClose} key={'action-button'}>
            <CloseIcon fontSize={'inherit'} />
          </IconButton>
        ]}
      />
    </MuiSnackbar>
  )
}

export default Snackbar
