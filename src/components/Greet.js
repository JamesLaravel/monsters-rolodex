import React from 'react'

// function Greet() {
//     return <h1>Welcome james to React</h1>
// }

//functional component

const Greet = props => {
    const {name, heroName, children} = props
    return (
        <div>
            <h1>Hello { name } aka {heroName} this is JSX - i really don't understand this react shit</h1>
            { children }
        </div>
    )
}

export default Greet 