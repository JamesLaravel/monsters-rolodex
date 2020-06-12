import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler() {
        alert('Class Component Button Clicked')
    }
    render() {
        return (
            <div>
                <button type="button" onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default ClassClick
