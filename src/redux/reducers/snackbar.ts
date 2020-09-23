import { IAction, ISnackbarMessage } from 'redux/declaration'
import { SET_SNACKBAR, RESET_SNACKBAR } from '../types'

export default function snackbarReducer(
  state: ISnackbarMessage = {},
  action: IAction<ISnackbarMessage>
) {
  switch (action.type) {
    case SET_SNACKBAR: {
      return {
        ...state,
        ...action.payload
      }
    }
    case RESET_SNACKBAR: {
      return {
        ...state,
        msg: ''
      }
    }
    default: {
      return state
    }
  }
}
