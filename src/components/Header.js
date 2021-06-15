import React from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addTaskAction } from "../actions";
import { useState } from "react";
const Header = ({ title }) => {
    const dispatch = useDispatch();
    const [inputState, setInputState] = useState("");
    const addTask = () => {
        dispatch(addTaskAction(inputState));
        setInputState("");
    };
    return (
        <header className="header">
            <input
                className="task_input"
                value={inputState}
                placeholder="New Task"
                onChange={(e) => {
                    setInputState(e.target.value);
                }}
                onKeyPress={(e)=>{
                    if(e.code == "Enter") addTask();
                }}
            ></input>
            <Button
                color="green"
                text="Add"
                onClick={addTask}
            />
        </header>
    );
};

export default Header;
