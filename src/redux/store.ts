import { createStore, AnyAction } from 'redux'
import { MakeStore, createWrapper, Context, HYDRATE } from 'next-redux-wrapper'
import { IState } from './declaration'
import { applyMiddleware } from 'redux'
import combineReducers from './reducers'

const initialState = {
  snackbar: {}
}

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

// create your reducer
const reducer = (state: IState = initialState, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload // apply delta from hydration
    }
    if (state.count) nextState.count = state.count // preserve count value on client side navigation
    return nextState
  } else {
    return combineReducers(state, action)
  }
}

// create a makeStore function
const makeStore: MakeStore<IState> = (context: Context) =>
  createStore(reducer, bindMiddleware([]))

// export an assembled wrapper
export const wrapper = createWrapper<IState>(makeStore, { debug: true })
