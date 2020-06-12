import React, { Component } from 'react'


// class component
class Welcome extends Component {
    constructor() {
        super()
        this.state = {
            state1 : 'State One',
            state2 : 'State Two'
        }
    }

    render() {
        const { name, children } = this.props
        const { state1, state2 } = this.state
        return (
            <div>
                <h1> { name } this is component function</h1>
                { children }

                <div>
                     <h5>This is { state1 }</h5>
                     <h5>This is { state2 }</h5>
                </div>
            </div>
        )
    }
}

export default Welcome