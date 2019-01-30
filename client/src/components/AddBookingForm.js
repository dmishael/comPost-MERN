import React, { Component } from 'react';
import axios from 'axios'

class AddBookingForm extends Component {

    state = {
        booking: {
            userName: '',
            comment: ''
        }
    }

    handleChange = (event) => {
        const newBooking = {...this.state.post}
        newBooking[event.target.name] = event.target.value
        this.setState({ booking: newBooking})
    }
    
    // handleSubmit = (event) => {
    //     event.preventDefault()
    //     const booking = this.state.post
    //     axios.post(`/api/posts/${}/bookings`, input).then((res)=> {
    //         this.props.history.goBack()
    //     })

    // }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                        type = "text"
                        placeholder="User Name"
                        name="userName"
                        value={this.state.post.userName}
                        onChange={this.handleChange}
                        />
                    </div>
                    </form>
            </div>
        );
    }
}

export default AddBookingForm;