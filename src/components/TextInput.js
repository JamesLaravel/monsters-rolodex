import React from 'react'

const TextInput = (props) => {
    return (
        <div>
            <label>Enter Name</label>
            <input type="text" {...props}/>
        </div>
    )
}

export default TextInput
