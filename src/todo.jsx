import './todo.css'
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function TodoApp() {
    const [like, setLike] = useState([]); // Initial state should be an empty array
    const [newTodo, setNewTodo] = useState(""); // Initialize with empty string for input binding

    const newTask = () => {
        if (!newTodo.trim()) return; // Prevent adding empty tasks
        setLike((prevTodo) => [
            ...prevTodo,
            { task: newTodo, id: uuidv4(), isDone: false }
        ]);
        setNewTodo("");
    };

    const updateValue = (e) => {
        setNewTodo(e.target.value);
    };

    const deleteTask = (id) => {
        setLike(like.filter((todo) => todo.id !== id));
    };

    const toggleDone = (id) => {
        setLike(like.map(todo =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        ));
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter Task"
                value={newTodo}
                onChange={updateValue}
            />
            <br /><br />
            <button onClick={newTask}>Add Task</button>

            <h4>Tasks Todo</h4>
            <hr />
            <ul>
                {like.map((todo) => (
                    <li key={todo.id}>
                        <span className={todo.isDone ? 'done' : ''}> {todo.task} </span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={() => toggleDone(todo.id)}>
                            {todo.isDone ? 'Undo' : 'Mark as Done'}
                        </button>
                        &nbsp;
                        <button onClick={() => deleteTask(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;
