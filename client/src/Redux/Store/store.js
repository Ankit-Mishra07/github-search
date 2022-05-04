import {combineReducers, createStore} from 'redux'
import { logReducer } from '../Login/reducer'

const rootReducer = combineReducers({
    logState : logReducer
})


export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__())

