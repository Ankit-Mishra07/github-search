import {combineReducers, createStore} from 'redux'
import { curUserReducer } from '../Home/CurrentUser/reducer'
import { repoReducer } from '../Home/SideBarRepo/reducer'
import { logReducer } from '../Login/reducer'

const rootReducer = combineReducers({
    logState : logReducer,
    curUserState:curUserReducer,
    reposState : repoReducer
})


export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__())

