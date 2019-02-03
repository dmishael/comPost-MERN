import React, { Component } from 'react';
import axios from 'axios'


class AddPostForm extends Component {

    state = {
        post: {
            pickupDate: '',
            composter: '',
            gallonsNeeded: '',
            // favorPoints: ''
        
        }
    }

    handleChange = (event) => {
        const newPost = {...this.state.post}
        newPost[event.target.name] = event.target.value
        this.setState({ post: newPost})
        console.log(this.state.post)
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        const input = this.state.post
        const userId = this.props.match.params.id
        axios.post(`/api/users/${userId}/posts`, input).then((res)=> {
            // const price = this.state.post.dollarPrice

            this.props.history.goBack()
        })
        /*
        On submit I want to the pass the amt of compost to 
        */

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
                    <div>
                        <input 
                        type = "text"
                        placeholder="Composter Name"
                        name="composter"
                        value={this.state.post.composter}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input 
                        type = "text"
                        placeholder="Gallons Needed"
                        name="gallonsNeeded"
                        value={this.state.post.gallonsNeeded}
                        onChange={this.handleChange}
                        />
                    </div>
                    {/* <div>
                        <input 
                        type = "text"
                        placeholder="Favor Points"
                        name="favorPoints"
                        value={this.state.post.favorPoints}
                        onChange={this.handleChange}
                        />
                    </div> */}
                    <button>Submit</button>
                    </form>
            </div>
        );
    }
}

export default AddPostForm;