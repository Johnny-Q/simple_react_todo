import {combineReducers} from "redux";
import taskReducer from "./taskReducer"
const rootReducer = combineReducers({
    tasks: taskReducer //key is the name of the object in the state (i.e. state.tasks)
});


export default rootReducer;