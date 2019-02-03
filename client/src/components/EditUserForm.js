import React, { Component } from 'react';
import axios from 'axios'


class EditUserForm extends Component {

    state = {
        user: {
            amountComposted: NaN,
            routesHauled: NaN,
            availableCredit: NaN,
            name: "",
            address: "",
        }
    }

    handleChange = (event) => {
        const newUser = { ...this.state.user }
        newUser[event.target.name] = event.target.value
        this.setState({ user: newUser })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const edit = this.state.user
        const userId = this.props.match.params.id
        axios.patch(`/api/users/${userId}`, edit).then((res) => {
            this.props.history.push(`/users`)


        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={this.state.user.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Address"
                            name="address"
                            value={this.state.user.address}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button>Submit</button>

                </form>
            </div>
        );
    }
}


export default EditUserForm;