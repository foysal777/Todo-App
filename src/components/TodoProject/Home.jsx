import React, { useState } from 'react'
import Todos from './Todos';
import Todo from './Todo';
import NewTodo from './NewTodo';
import { v4 as uuidv4 } from 'uuid';
const Home = () => {

const [todos, setTodos] = useState([])
const handleAddTodo=(todo)=>{

  console.log(todo)
  setTodos((preTodo)=>{
    return [...preTodo,  { id : uuidv4(), todo}]
  })
}

    return (
        <div>
            <h1 className='text-center text-white p-4 text-4xl bg-teal-400'> My Todo App</h1>
           <NewTodo handleTodo={handleAddTodo}></NewTodo>
            <Todos todos = {todos} ></Todos>
            <Todo></Todo>
          
           <Todo></Todo>
        </div>

    )
}

export default Home
