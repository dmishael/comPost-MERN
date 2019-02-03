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

class AddBookingForm extends Component {

    state = {
        booking: {
            userName: ''
            // comment: ''
        }
    }

    handleChange = (event) => {
        // console.log(this.state.booking)
        const newBooking = {...this.state.booking}
        console.log("posts here", this.state.booking)
        newBooking[event.target.name] = event.target.value
        this.setState({ booking: newBooking})

    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        const booking = this.state.booking
        const postId = this.props.match.params.id
        console.log("postId",postId)
        // axios.get(`/api/posts/${postId}`).then((res)=> {

        // })
        axios.post(`/api/posts/${postId}`, booking)
        .then(() => this.props.history.goBack())

        }

    


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                        type = "text"
                        placeholder="User Name - Gallons Committed"
                        name="userName"
                        value={this.state.booking.userName}
                        onChange={this.handleChange}
                        />
                    </div>
                    <Button>Submit</Button>
                    </form>
            </div>
        );
    }
}

export default AddBookingForm;