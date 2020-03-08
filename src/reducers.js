import {combineReducers} from 'redux'
import dashboardReducer from './app/home/dashboardReducer'
const rootReducer = combineReducers({
    dashboard : dashboardReducer
})

export default rootReducer