import React, { useState } from 'react'

const NewTodo = () => {

  
    const [todo, setTodo] = useState({
        title: "",
        description: "",
    })
    const { title, description } = todo
    const HandleSubmit = (e) => {
        e.preventDefault();
        setTodo({title : "" , description : ""})
        console.log(todo)


    }
    const handleChange = (e) => {
        const name = e.target.name;
        setTodo((oldTodo) => {
            return { ...oldTodo, [name]: e.target.value }
        })

    }
    return (
        <div>

            <form onSubmit={HandleSubmit} className="space-y-4">
                {/* Title Input */}
                <div>
                    <label className="block text-gray-700 font-medium">Title</label>
                    <input
                        type="text"
                        onChange={handleChange}
                        value={title}
                        name='title'
                        className="w-full p-2 border border-teal-400 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter todo title"
                    />
                </div>

                {/* Description Input */}
                <div>
                    <label className="block text-gray-700 font-medium">Description</label>
                    <textarea
                        onChange={handleChange}
                        value={description}
                        name='description'
                        className="w-full p-2 border border-teal-400 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter todo description"
                    ></textarea>
                </div>

                {/* Add Button */}
                <button
                    type="submit"
                    className="w-full bg-teal-400 hover:bg-rose-400 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                >
                    Add Todo
                </button>
            </form>

        </div>
    )
}

export default NewTodo