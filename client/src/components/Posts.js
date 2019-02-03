import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostList = styled.div `
text-align: left-center;
margin-left: 33%;
margin-right: 33%;

`
const PostBorder = styled.ul `
border-radius: 20px;
border: 1.5px solid black;
padding: 10px 10px 10px 10px;
font-family: Courier New;
`

const Button = styled.a`
text-decoration: none;
background: #ffec99;
text-align: "center";
display: "inline";
color: black;
font-size: 1em;
padding: 0.1em 1em;
border: .8px solid black;
border-radius: 20px;
`
const StyledLink = styled.div`
text-decoration: none;
text-align: "center";
color: black;
font-size: 1em;
margin: 3%;
padding: 0.25em 1em;
border-radius: 20px;
display: inline-block;
`

const Nav = styled.nav`
width: 100%;
background-color: #45616C;
text-align: right;
`
const NavLink = styled(Link)`
text-decoration: none;
background: #ffec99;
border-radius: 20px;
padding: 1%;
margin: 20px;
color: black;
`
const PostHeader = styled.div`
font-family: Courier New;
text-align: left;
Padding: 0px;
Margin: 0px;
`


const PostCategory = styled.div`
font-weight: bold;
color: "black";
display: inline-block;
font-size: 20px;
`





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

    deleteBooking = (event, bookingId) => {
        event.preventDefault()
        axios.delete(`/api/bookings/${bookingId}`).then((res) => {
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
                <Nav>
                <NavLink to={`/Post/${this.props.match.params.id}`}>comPOST</NavLink>
                <NavLink to = {`/users/${this.props.match.params.id}`}>Profile</NavLink>
                <NavLink to = {`/`}>Home</NavLink>
                </Nav>
                <PostList>
                {this.state.Posts.map((posts, i) =>
                    <PostBorder key={i}>
                        <h1> <PostHeader>Post </PostHeader></h1>
                        <ul><PostCategory>Pickup Date: </PostCategory>  {posts.pickupDate}</ul>
                        <ul><PostCategory>Name: </PostCategory>   {posts.composter}</ul>
                        <ul><PostCategory>Gallons of Compost: </PostCategory>   {posts.gallonsNeeded} Gallons</ul>
                        {/* <ul>Favor Points: {posts.favorPoints}</ul> */}
                        <ul><Link to={`/Posts/${posts._id}/Book`}><Button>Commit</Button></Link>{posts.bookings.map((booking) => {
                            return (
                            <p>{booking.userName} <Button onClick={(event) => this.deleteBooking(event, booking._id)}>Delete</Button></p>
                            )
                                
                            

                        })}</ul>
                        

                        <StyledLink>
                            
                            <Button onClick={(event) => this.deleteIdea(event, posts._id)}>Delete</Button>
                            {/* <div><button onClick={(event) => this.book(event, posts._id)}>Book</button></div> */}
                        </StyledLink>
                    </PostBorder>


                )}
                </PostList>


            </div>

        );
    }
}

export default Posts;