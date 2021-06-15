export const addTaskAction = (title) => {
    return {
        type: "ADD_TASK",
        payload: title
    };
};

export const rmTaskAction = (id) => {
    return {
        type: "RM_TASK",
        payload: id
    };
};
