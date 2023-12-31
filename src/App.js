import './App.css';
import Header from './Mycomponent/Header';
import Todos from './Mycomponent/Todos';
import AddTodo from './Mycomponent/AddTodo';
// import TodoItem from './Mycomponent/TodoItem';
import Footer from './Mycomponent/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  // , JSON.stringify(todos)))
  const onDelete = (todo) => {
    console.log("I am onDelete", todo);

    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    // localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;
    if(todos.length === 0){
      sno = 1;
    }else{
      sno = todos[todos.length-1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
    
  }
  const [todos, setTodos] = useState([initTodo]);
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
    <Header title="MyTodoList" searchBar={false}/>
    <AddTodo addTodo = {addTodo}/> 
    <Todos todos = {todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
