import React, { useState } from 'react'
import { TiDelete } from "react-icons/ti";
const TodoApp = () => {

const [todo, setTodo] = useState([]);
const [title , setTitle] = useState([]);
const [description , setDescription] = useState([]);


const AddTodo=()=>{
    if(title.trim === "" || description.trim === "") return
    setTodo([...todo,{id:Date.now(), title, description}])
    setTitle("");
    setDescription("");
};

const DeleteTodo=(id)=>{
    setTodo((todo.filter(todoDel=> todoDel.id != id )))
}
  return (
    <div>

        <div className='p-8 border-2 border-blue-400'>
          
        <div className="max-w-lg mx-auto mt-10 p-5 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-4">Todo App</h2>
      
      {/* Title Input Field */}
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
       
        className="mb-2 p-2 border w-full rounded"
      />

      {/* Description Input Field */}
      <textarea
        placeholder="Enter description"
        value={description}
        onChange={(e)=> setDescription(e.target.value)}
        className="mb-2 p-2 border w-full rounded"
      />

      {/* Add Button */}
      <button onClick={AddTodo} className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Add Todo
      </button>

      {/* Todo List Display */}
      <div className="mt-5">
        {todo.map(todo => (
          <div key={todo.id} className="p-4 mb-3 flex justify-between items-center shadow-md border rounded">
            <div>
              <h3 className="font-semibold text-lg">{todo.title} </h3>
              <p className="text-gray-600"> {todo.description} </p>
            </div>
            <button onClick={()=>DeleteTodo(todo.id) } className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition duration-200">
                <TiDelete size={24} />
            </button>
          </div>
        ))} 
      </div>
    </div>

        </div>
<section class="p-6 bg-gray-100">
  <div class="max-w-7xl mx-auto">
    <h2 class="text-2xl font-bold mb-6 text-center">Our Features</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      
      <!-- Card 1 -->
      <div class="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
        <h3 class="text-xl font-semibold mb-2">Card Title 1</h3>
        <p class="text-gray-600">This is a short description for the first card.</p>
      </div>

      <!-- Card 2 -->
      <div class="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
        <h3 class="text-xl font-semibold mb-2">Card Title 2</h3>
        <p class="text-gray-600">This is a short description for the second card.</p>
      </div>

      <!-- Card 3 -->
      <div class="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
        <h3 class="text-xl font-semibold mb-2">Card Title 3</h3>
        <p class="text-gray-600">This is a short description for the third card.</p>
      </div>

      <!-- Card 4 -->
      <div class="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
        <h3 class="text-xl font-semibold mb-2">Card Title 4</h3>
        <p class="text-gray-600">This is a short description for the fourth card.</p>
      </div>

    </div>
  </div>
</section>

        
    </div>
  )
}

export default TodoApp
