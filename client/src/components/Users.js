import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UserList = styled.div `
text-align: center;
background-image: url("https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi-98joy53gAhWwneAKHf7JDPcQjRx6BAgBEAU&url=https%3A%2F%2Fimgur.com%2Fgallery%2FLLaTA&psig=AOvVaw1ay1rwwOaVgYUi5DVTm2xv&ust=1549215509929430");
background-size: cover;
margin-left: 33%;
margin-right: 33%;
`
const UserBorder = styled.ul `
border-radius: 20px;
border: 2px solid black;
`

const Button = styled.a`
background: "transparent";
color: "black";
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 20px;
`


class Users extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get(`api/users`).then((res) => {
            console.log(res)    
            this.setState({ users: res.data })
            
        })
    }

    deleteIdea = (event, userId) => {
            console.log(userId)
            event.preventDefault()
            axios.delete(`/api/users/${userId}`).then((res)=>{
                this.getAllUsers()
            })
    }
    
    render() {

        return (
            <UserList>
                {this.state.users.map((user, i) => (
                    <UserBorder key={i}>
                            
                        <ul>Name: <Link to = {`/users/${user._id}`}>{user.name}</Link></ul>
                        <ul>Address: {user.address} </ul>
                        {/* <li>Adress: {user.address}</li>
                        <li>Gallons Composted: {user.amountComposted}</li>
                        <li>Routes Hauled: {user.routesHauled}</li>
                        <li>Available Credit: {user.availableCredit}</li> */}
                      
                    <Link to = {`/users/${user._id}/edit`}><Button>Edit</Button></Link>
                    <div><Button onClick={(event)=>this.deleteIdea(event, user._id)}>Delete</Button></div>
                   
                    </UserBorder>

                ))}
            </UserList>
        )
    }
}


    export default Users;