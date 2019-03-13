import React, { Component } from 'react';
import axios from 'axios'


class AddBookingForm extends Component {

    state = {
        booking: {
            amountCommitted: ''
        }
    }

    handleChange = async (event) => {
        const newBooking = { ...this.state.booking }
        console.log("posts here", this.state.booking)
        newBooking[event.target.name] = event.target.value
        await this.setState({ booking: newBooking })
        console.log(this.state.booking)
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const booking = this.state.booking
        const postId = this.props.match.params.id
        
        const res = await axios.post(`/api/posts/${postId}`, booking)
        const data = res.data
        await this.setState({amountCommitted: data})
        
        await this.props.history.goBack()
        console.log('posts',this.state.booking.amountCommitted)
       
    }



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="number"
                            placeholder="Gallons Committed"
                            name="amountCommitted"
                            value={this.state.booking.amountCommitted}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddBookingForm;