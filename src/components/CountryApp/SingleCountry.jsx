import React from 'react';

const SingleCountry = ({country , onSelect}) => {
    const { name, flags, capital, population } = country;

    // parent theke data pass kora holo onSelect deye 
    const CountryClick = ()=>{

        onSelect(name.common);
    }
    return (
        <div className=" rounded-lg shadow-lg p-4 bg-white hover:shadow-xl transition duration-300">
           <img className="w-full h-40 object-cover rounded-md" src={flags.png} alt="Country Flag" />
            <h2 className="text-lg font-bold mt-2">{name.common}</h2>
            <p className="text-gray-600">Capital: {capital}</p>
            <p className="text-gray-500">Population: {population}</p>
            <button onClick={CountryClick} className='bg-rose-400 items-center p-2 rounded-lg'>Remove Flag</button> 
        </div>
    );
};

export default SingleCountry;
