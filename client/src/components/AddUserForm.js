import React, { Component } from 'react';
import axios from 'axios';

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
                        placeholder="Name"
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
                    <button>Sumbit</button>
                
                </form>


            </div>
        );
    }
}

export default UserForm;