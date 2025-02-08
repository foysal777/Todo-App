import React, { useEffect, useState } from 'react'
import SignleData from './SignleData';

const loadingMsg = <p>  Please wait... Give me some moment  </p>

const UseEffect = () => {
    const [data, setData] = useState([]);
    const [isloading, setLoading] = useState(true);
    const [error , setError ] = useState(null);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                if (!res.ok) {
                    throw Error("Fetching is not successful")

                }
                return res.json()
            })
            .then((data) => {
                setData(data);
                setLoading(false);
                setError(null)
                console.log(data)
            }).catch((error)=>{
               setError(error);
               setLoading(false)
            })
    }, [])
    return (
        <div>
            {isloading && loadingMsg}
            {error  && <p>{error} </p> }
            {
                data.map(datas => <SignleData data={datas} ></SignleData>)
            }

        </div>
    )
}

export default UseEffect