import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootReducer from './rootReducer'

const saga = createSagaMiddleware()
let middleware = [saga]

if (__DEV__) {
    middleware = [...middleware, logger]
}

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    )
}
