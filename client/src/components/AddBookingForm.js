import React, { Component } from 'react';
import axios from 'axios'

class AddBookingForm extends Component {

    state = {
        post: {
            pickupDate: '',
            pickupLocation: '',
            dollarPrice: '',
            favorPoints: '',
            booked: '',
        
        }
    }

    handleChange = (event) => {
        const newPost = {...this.state.post}
        newPost[event.target.name] = event.target.value
        this.setState({ post: newPost})
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        const input = this.state.post
        axios.post('/api/users', input).then((res)=> {
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
                        placeholder="Pick Up Date"
                        name="pickupDate"
                        value={this.state.post.pickupDate}
                        onChange={this.handleChange}
                        />
                    </div>
                    </form>
            </div>
        );
    }
}

export default AddBookingForm;