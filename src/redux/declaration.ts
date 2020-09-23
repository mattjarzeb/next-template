export enum ESnackbar {
  error = 'error',
  warning = 'warning',
  info = 'info',
  success = 'success'
}

export interface ISnackbarMessage {
  type?: ESnackbar
  msg?: string
}

export interface IAction<T> {
  type: string
  payload?: Partial<T>
}

export interface IState {
  snackbar: ISnackbarMessage
  [key: string]: any
}
