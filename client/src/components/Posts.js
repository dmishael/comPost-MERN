import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

class Posts extends Component {

    state = {
        Posts: []
    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get('/api/posts/:userId').then((res) => {
            console.log(res)
            this.setState({ Posts: res.data })

        })
    }

    deleteIdea = (event, postId) => {
        event.preventDefault()
            axios.delete(`/api/posts/${postId}`).then((res)=>{
                this.getAllUsers()
            })

    }

    render() {
        return (
            <div>
                <Link to={`/Post/${this.props.match.params.id}`}>Post</Link>
                {this.state.Posts.map((posts, i) =>
                    <div key={i}>
                        <h1> Post: </h1>
                        <ul>Pickup Date: {posts.pickupDate}</ul>
                        <ul>Pickup Location: {posts.pickupLocation}</ul>
                        <ul>Dollar Price: {posts.dollarPrice}</ul>
                        <ul>Favor Points: {posts.favorPoints}</ul>
                        <ul>Booked: {posts.booked}</ul>
                        <div>
                            <Link to={`/Posts/${this.props.match.params.id}/Book`}>Book!</Link>
                            <div><button onClick={(event) => this.deleteIdea(event, posts._id)}>Delete</button></div>
                        </div>
                    </div>


                )}


            </div>

        );
    }
}

export default Posts;