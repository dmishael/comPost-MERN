import React, { Component, Link } from 'react';
import axios from 'axios'

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

    render() {
        return (
            <div>
                {this.state.Posts.map((posts, i) =>
                    <div key = {i}>
                    <h1> Post: </h1>
                    <ul>Pickup Date: {posts.pickupDate}</ul>
                    <ul>Pickup Location: {posts.pickupLocation}</ul>
                    <ul>Dollar Price: {posts.dollarPrice}</ul>
                    <ul>Favor Points: {posts.favorPoints}</ul>
                    <ul>Booked: {posts.booked}</ul>
                    
                    <Link to = {`/Posts/Post/${this.props.match.params.id}`}>Post</Link>
                
                    </div>
                    
                    
                    )}
                    
                   
            </div>
            
        );
    }
}

export default Posts;