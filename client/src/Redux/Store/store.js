import {combineReducers, createStore} from 'redux'
import { curUserReducer } from '../Home/CurrentUser/reducer'
import { repoReducer } from '../Home/SideBarRepo/reducer'
import { logReducer } from '../Login/reducer'
import {feedReducer} from '../Home/Feed/reducer'

const rootReducer = combineReducers({
    logState : logReducer,
    curUserState:curUserReducer,
    reposState : repoReducer,
    feedState : feedReducer
})


export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__())

