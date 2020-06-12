import React from 'react'
import Person from "./Person";

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
    const persons = [
       {
           id: 3,
           name: 'Diana',
           age: 28,
           skill: 'Vue'
       },

       {
           id: 4,
           name: 'John',
           age: 27,
           skill: 'React'
       }
    ]
        const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
           // <h2>My name {person.name} and am {person.age}</h2>
              //<Person  key={person.id} person={person}/>
        
    return (
        <div>{ nameList }</div>
    )
}

export default NameList
