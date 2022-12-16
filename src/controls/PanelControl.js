import TaskControl from "./TaskControl.js";
import { useState } from 'react'

function createGuid(){  
    function S4() {  
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);  
    }  
    return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();  
 } 

function PanelControl() {
    const [todos, setTodos] = useState([])

    const addTask = (userInput) => {
          const newItem = {
            id: createGuid()
          }
          setTodos([...todos, newItem])
      }

      const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
      }


  return (
    <div>
   <button onClick={ () => addTask()}>Add Task</button>
   <div id="ToDoObjects"></div>
   {todos.map((todo) => {
        return (
          <TaskControl
          todo={todo}
          key={todo.id}
          removeTask={removeTask}
          />
        )
      })}
   </div>


  );
}

export default PanelControl;
