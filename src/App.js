import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useSelector } from "react-redux";

function App() {
    const tasks = useSelector((state) => {
        return state.tasks;
    });
    return (
        <div className="container">
            <Header title="Todos" />
            <Tasks tasks={tasks} />
        </div>
    );
}

//can also do a class base component

export default App;
