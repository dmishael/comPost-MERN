import React, { Component } from 'react';
import axios from 'axios'

class EditUserForm extends Component {

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
        console.log("starting handle suubmit")
        event.preventDefault()
        const edit = this.state.user
        const userId = this.props.match.params.id
        console.log(`api/users/${userId}`)
        axios.patch(`api/users/${userId}`, edit).then((res) => {
            this.props.history.goBack()
            console.log("handled it")
        
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


export default EditUserForm;