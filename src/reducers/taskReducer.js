import {v4 as uuid} from "uuid";

const taskReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TASK":
            return [...state, { id: uuid(), title: action.payload }];
        case "RM_TASK": 
            return state.filter((task)=>task.id != action.payload);
        default:
            return state;
    }
};
export default taskReducer;
