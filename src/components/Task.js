import React from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {rmTaskAction} from "../actions";
const Task = ({ task }) => {
    const dispatch = useDispatch();
    return (
        <div className="task">
            <h3>
                {task.title}
                <FaTimes style={{ color: "red", cursor: "pointer" }} onClick={() => {
                    dispatch(rmTaskAction(task.id));
                }} />
            </h3>
            <p>{task.day}</p>
        </div>
    );
};

export default Task;
