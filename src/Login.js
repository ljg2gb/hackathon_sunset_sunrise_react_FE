import React, {Component} from "react"

export default class Login extends Component{
    state = {
        username: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username: this.state.username})
        };
        fetch('http://localhost:3000/users', requestOptions)
        
    }


    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type = "text"
                    name = "username"
                    value = {this.state.username} 
                    onChange = {this.handleChange}/>
                <input type='submit' value='Submit' />
            </form>
        )
    }
}