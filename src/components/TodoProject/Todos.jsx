import React from 'react'
import Todo from './Todo';
const Todos = (props) => {
console.log(props.todos);
    return (
         
     <div>
        {
            props.todos.map(todo => <Todo key = {todo.id} id = {todo.id} todo ={todo.todo} >  </Todo>)
        }
     </div>
    )
}

export default Todos