import React from 'react'

const SignleData = ({ data }) => {
    const { id, title } = data
    return (
        <div className='flex items-center justify-center'>

            {id} <br />
            {title}
        </div>
    )
}

export default SignleData