import React from 'react'
import { useState } from 'react'
import "./AddTodos.css"
function AddTodo(props) {
  const [desc, setdesc] = useState("");
  const submit = (e)=>{
    e.preventDefault();
     if(!desc){
      alert("Invalid Input");
     }
     else{
      props.addTodo(desc);
     }
     setdesc('');
  }

  return (
    <div>
    <div class="todo-wrapper">
  <form class="todo-form" onSubmit={submit}>
    <input type="text" placeholder="Enter a new task..." value={desc} onChange={(e)=>{setdesc(e.target.value)}} class="todo-input" />
    <button type="submit" class="todo-button">Add Task</button>
  </form>
</div>
    </div>
  )
}

export default AddTodo
