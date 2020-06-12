import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message :  'Hello'
        }
    }

    clickHandler() {
       console.log(this)
        this.setState({
            message: 'Goodbye'
        })
    }
    
    render() {
        return (
            <div>
                <div>
                    {this.state.message}
                </div>
                <button type="button" onClick={() =>  this.clickHandler() }>Click</button>
                {/* <button type="button" onClick={ this.clickHandler }>Change Text</button> */}
            </div>
        )
    }
}

export default EventBind
