import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
function TodoApp(){
    let [like, SetLike]= useState([{task: "sample task", id: uuidv4()}]);
    let [newTodo, setNewTodo] = useState();

    let newTask = () =>{
     SetLike([...like, {task:newTodo, id:uuidv4()}]);
     setNewTodo("");

    }

    let updateValue = (e) =>{
        setNewTodo(e.target.value)
        
    }
    return(
        <div>
            <input type="text" placeholder="enter Task" value={newTodo} onChange={updateValue}/>
            <br /><br />
            <button onClick={newTask}>Add task</button>

            <h4>task Todo</h4>
            <hr />
            <ul>
                {
                
                like.map((todo) =>{
                  return  <li key={todo.id}>{todo.task}</li>;
                })
                }
            </ul>

        </div>
    )
}

export default TodoApp;