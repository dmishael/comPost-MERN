import React, { Component } from 'react';
import axios from 'axios'


class AddPostForm extends Component {

    state = {
        post: {
            pickupDate: '',
            composter: '',
            gallonsNeeded: ''

        }
    }

    handleChange = (event) => {
        const newPost = { ...this.state.post }
        newPost[event.target.name] = event.target.value
        this.setState({ post: newPost })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const input = this.state.post
        const userId = this.props.match.params.id
        axios.post(`/api/users/${userId}/posts`, input).then((res) => {

            this.props.history.goBack()
        })

    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="Pick Up Date"
                            name="pickupDate"
                            value={this.state.post.pickupDate}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Composter Name"
                            name="composter"
                            value={this.state.post.composter}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Gallons Needed"
                            name="gallonsNeeded"
                            value={this.state.post.gallonsNeeded}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddPostForm;