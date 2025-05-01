import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
function TodoApp(){
    let [like, SetLike]= useState([{task:'', id: uuidv4()}]);
    let [newTodo, setNewTodo] = useState();

    let newTask = () =>{
     SetLike((prevTodo) =>{
        return[...prevTodo, {task: newTodo, id: uuidv4()}]
     });
     setNewTodo("");

    }

    let updateValue = (e) =>{
        setNewTodo(e.target.value)
        
    }

    let deleteTask  = (id) =>{
        SetLike(like.filter((todo) => todo.id !== id));
    }

    let ToUppercase = () =>{ 
        SetLike ( (prevTodo) => 
            prevTodo.map((todo) =>{
            return {
                ...todo,
                task: todo.task.toUpperCase()

            }
        })) 
    
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
                  return  <li key={todo.id}>
                    <span>{todo.task}</span>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <button onClick={ () =>deleteTask(todo.id)}>Delete</button>
                    </li>;
                })
                }
            </ul>

            {/* <button onClick={ToUppercase}>To Uppercase</button> */}

        </div>
    )
}

export default TodoApp;