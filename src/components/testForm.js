import React, { Component } from 'react'
import TextInput from './TextInput'

class testForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             formControls: {
                 name: {
                     placeholder:' What is your name'
                 }
                 
             }
        }
    }

    changeHandler = event => {

        const name = event.target.name
        const value = event.target.value

        this.setState({
            formControls: {
                [name]: value
            }
        })
    }

    
    render() {
        //const { Form } = this.state.formControls
        return (
           
                
                <TextInput name="name"
                            placeholder={this.state.formControls.name.placeholder}
                            value={this.state.formControls.name.value}
                            onChange={this.changeHandler}
                />
                
              
               
           
        )
    }
}

export default testForm
