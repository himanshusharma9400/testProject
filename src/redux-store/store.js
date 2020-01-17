import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'

import AllReducers from './reducers'

export const store = createStore(AllReducers, applyMiddleware(thunk, logger))
