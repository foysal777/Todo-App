import React from 'react';
import { TiDelete } from "react-icons/ti";

const Todo = (props) => {
    if (!props.todo) {
        return <p className="text-gray-500 text-center">No Todo Available</p>;
    }

const { title, description } = props.todo;
const { id } = props ;
const handleDelete=(id)=>{

    alert(id)
}    
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 flex justify-between items-center">
            <div>
                <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
            <button onClick={()=>{handleDelete(id)}} className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition duration-200">
                <TiDelete size={24} />
            </button>
        </div>
    );
};

export default Todo;
