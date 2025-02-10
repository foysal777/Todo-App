import React, { useEffect, useState } from 'react'

const Search = (props) => {
    const [search, setSearch] = useState("");
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    useEffect(() => {
        props.filterCountry(search)
    }, [search])

    return (
        <div className="flex items-center justify-center pt-8">
        <div className="relative">
            <input
                type="text"
                placeholder="Search Country..."
                value={search}
                onChange={handleSearch}
                className="w-80 sm:w-96 px-4 py-2 pl-10 border border-blue-400 bg-sky-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition duration-200"
            />
         
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010 17.5 7.5 7.5 0 0016.65 12.65z" />
            </svg>
        </div>
    </div>
    
    )
}

export default Search