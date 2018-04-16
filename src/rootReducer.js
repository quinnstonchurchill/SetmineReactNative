import { combineReducers } from 'redux'
// import environment from './environment'
import playerReducer from './player/playerReducer'
import discoverReducer from './discover/discoverReducer'

const rootReducer = combineReducers({
    playerReducer,
    discoverReducer
})

export default rootReducer
