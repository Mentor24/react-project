import {combineReducers} from "redux"
import tableReducer from "./tableReducer"

const reducers = combineReducers({
    table: tableReducer
})

export default reducers