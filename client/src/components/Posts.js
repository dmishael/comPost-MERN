import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

class Posts extends Component {

    state = {
        Posts: [],
        Users: []
    }

    componentDidMount() {
        this.getAllPosts()
    }

    getAllPosts = () => {
        axios.get(`/api/posts/${this.props.match.params.id}`).then((res) => {
            console.log(this.props.match.params.id)
            console.log(res.data)
            this.setState({ Posts: res.data })

        })
    }

    deleteIdea = (event, postId) => {
        event.preventDefault()
        axios.delete(`/api/posts/${postId}`).then((res) => {
            this.getAllPosts()
        })

    }

    addCompostCredit = (event, postId) => {
        event.preventDefault()
        console.log(this.props.match.params.id)
        axios.delete(`/api/posts/${postId}`).then((res) => {
            this.getAllPosts()
        })

    }

    // book = (event, postId) => {
    //     event.preventDefault()
    //         axios.post(`/api/posts/${postId}/bookings`).then((res)=>{
    //             console.log(res)
    //         })

    // }

    render() {
        return (
            <div>
                <Link to={`/Post/${this.props.match.params.id}`}>Post</Link>
                {this.state.Posts.map((posts, i) =>
                    <div key={i}>
                        <h1> Post: </h1>
                        <ul>Pickup Date: {posts.pickupDate}</ul>
                        <ul>Name: {posts.composter}</ul>
                        <ul>Gallons of Compost: {posts.gallonsNeeded} Gallons</ul>
                        {/* <ul>Favor Points: {posts.favorPoints}</ul> */}
                        <ul>Booked By: {posts.bookings.map((booking) => {
                            return (
                            <p>{booking.userName}</p>
                            )
                                
                            

                        })}</ul>

                        <div>
                            <Link to={`/Posts/${posts._id}/Book`}>Book!</Link>
                            <div><button onClick={(event) => this.deleteIdea(event, posts._id)}>Delete</button></div>
                            {/* <div><button onClick={(event) => this.book(event, posts._id)}>Book</button></div> */}
                        </div>
                    </div>


                )}


            </div>

        );
    }
}

export default Posts;