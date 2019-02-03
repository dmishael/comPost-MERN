import React, { Component } from 'react';
import axios from 'axios'
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
        console.log("starting handle suubmit")
        event.preventDefault()
        const edit = this.state.user
        const userId = this.props.match.params.id
        console.log("user", userId)
        console.log(`api/users/${userId}`)
        axios.patch(`/api/users/${userId}`, edit).then((res) => {console.log("smile")
            this.props.history.push(`/users`)
            console.log("handled it")

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
                    <Button type="submit">Submit</Button>

                </form>
            </div>
        );
    }
}


export default EditUserForm;