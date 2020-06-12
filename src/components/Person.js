import React from 'react'

function Person({person}) {
    return (
        <div>
              <h2>My name {person.name} and am {person.age}</h2>
        </div>
    )
}

export default Person
