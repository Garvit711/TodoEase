import React from 'react'
import "./TodoList.css"
function Todos(props) {
  return (
    <div>
      {
        props.todos.length === 0 ? <h3 style={{color: 'whitesmoke' , fontStyle: 'italic'}}>Add A Task To Start</h3> : props.todos.map((item, index) =>(
        <div className="todos" key={item.id}>
            <input type="checkbox" className="todo-checkbox" checked={item.completed} onChange={()=>{props.sorting(item.id)}}></input>
            <h3 className='text'>{item.desc}</h3>
            <button type="button" class="btn btn-warning" onClick={()=>{props.DeleteIt(item.id)}}>Delete</button>
        </div>
      ))
      }
    </div>
  )
}

export default Todos
