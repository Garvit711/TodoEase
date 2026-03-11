
import './App.css';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import Stars from './component/Stars';
import AddTodo from './component/AddTodo';
import Todos from './component/Todos';
import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './component/About';
function App() {
  const [todos, settodos] = useState(() =>{
      const saved = localStorage.getItem("todo");
      return saved ? JSON.parse(saved) : []
  }); 
  useEffect(()=>{
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);
  function DeleteIt(todo){
      if(todos.length === 0){
        alert("No TODO Exist");
      }
      else{
        settodos(todos.filter((item) =>{
           return item.id !==todo;
        }))
      }
  }
   function addTodo(desc){
    if(todos.length === 10){
      alert("No More Tasks Allowed");
    }
     else{
      const Todo = {
        id: Date.now(),
        desc: desc,
        completed: false
      }
      settodos([Todo, ...todos]);
      // setdesc('');
     }
    }
 function sorting(todoId) {
  settodos((todos) => {
    const updatedTodos = todos.map((item) =>
      item.id === todoId ? { ...item, completed: !item.completed} : item
    );
    return [...updatedTodos].sort((a, b) => a.completed - b.completed);
  });
}
  return (
      <Router>
       <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative'}}>
      <Stars />
      <NavBar />
    <Routes>
        <Route exact path="/" element={
          <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: '250px' }}>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} DeleteIt={DeleteIt} sorting={sorting} />
          </main>
        } />
        <Route exact path="/about" element={
            <About />
        } />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
