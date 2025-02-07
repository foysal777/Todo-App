import React from 'react'
import Todos from './Todos';
import Todo from './Todo';
import NewTodo from './NewTodo';

const Home = () => {

    const dummyTodos = [{
        id: 1,
        title: "Sleeping at 10 pm",
        description: "Anything you can write here ",
    },
    {
        id: 2,
        title: "Sleeping at 16 pm",
        description: "Anything you can write here "
    }
    ];


    return (
        <div>
            <h1 className='text-center text-white p-4 text-4xl bg-teal-400'>Home, My Todo App</h1>
           <NewTodo></NewTodo>
            <Todos todos={dummyTodos}  ></Todos>
            <Todo></Todo>

        </div>

    )
}

export default Home