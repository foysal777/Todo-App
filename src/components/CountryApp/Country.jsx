import React, { useEffect, useState } from 'react'
import SingleCountry from './SingleCountry';
import Search from './Search';

const url = "https://restcountries.com/v3.1/all"
const Country = () => {
    const [data, setData] = useState([]);
    const [isloading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [originalData, setOriginalData] = useState([]);


    const fetchData = async (url) => {

        try {
            setLoading(true)
            const res = await fetch(url)
            const data = await res.json();
            setData(data)
            setOriginalData(data);
            setLoading(false)
            setError(null)
            console.log(data)
        } catch (error) {
            setLoading(false)
            setError(error)
        }


    }

    useEffect(() => {
        fetchData(url);
    }, [])

    const RemoveCountry =(name)=>{

        const updateData = data.filter((country => country.name.common !== name))
        setData(updateData);
        alert(name );
    }

    const filterCountry =(searchvalue)=>{
        console.log(searchvalue)
        if (!searchvalue) {
            setData(originalData); 
            return;
        }
    
        let value = searchvalue.toLowerCase();
        const filterCountry = data.filter(country => {
            const NewCountry = country.name.common.toLowerCase();
            return NewCountry.startsWith(value);
     
        });
        setData(filterCountry)
    }
    return (
        <div>
            <h1 className='flex items-center justify-center text-white  p-4 text-4xl bg-sky-400'>Country Flag Project</h1>
            <Search filterCountry = {filterCountry} ></Search>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">  
           
            {isloading && <h1> Loading data , wait...</h1>}
            {error && <h1> {error.message} </h1>}
            {
                data.map(country => <SingleCountry onSelect={RemoveCountry}  country ={country} ></SingleCountry> )
            }</div>

        </div>
    )
}

export default Country