import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'

const Button = styled.a`
text-decoration: none;
background: #ffec99;
text-align: "center";
display: "inline";
color: black;
font-size: 1em;
margin: 3%;
padding: 0.25em 1em;
border: .8px solid black;
border-radius: 20px;
`

class UserForm extends Component {

    state = {
        user: {
            name: '',
            address: ''
        }
    }

    handleChange = (event) => {
        const newUser = {...this.state.user}
        newUser[event.target.name] = event.target.value
        this.setState({ user: newUser })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const input = this.state.user
        axios.post('api/users', input).then((res) => {
            this.props.history.goBack()
        
        })
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                        type = "text"
                        placeholder="Composter Name"
                        name="name"
                        value={this.state.user.name}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input 
                        type = "text"
                        placeholder="Address"
                        name="address"
                        value={this.state.user.address}
                        onChange={this.handleChange}
                        />
                    </div>
                    <Button>Submit</Button>
                
                </form>


            </div>
        );
    }
}

export default UserForm;