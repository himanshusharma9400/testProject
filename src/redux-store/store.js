import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import AllReducers from './reducers'

export const store = createStore(AllReducers, applyMiddleware(thunk))
