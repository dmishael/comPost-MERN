import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UserList = styled.div`
text-align: left-center;
margin-left: 33%;
margin-right: 33%;

`
const UserBorder = styled.ul`
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
margin: 3%;
padding: 0.25em 1em;
border: .8px solid black;
border-radius: 20px;
`

const List = styled.div`
text-decoration: none;
font-weight: bold;
color: "black";
display: inline-block;
`
const StyledLink = styled(Link)`
text-decoration: none;
background: #ffec99;
text-align: "center";
color: black;
font-size: 1em;
margin: 3%;
padding: 0.25em 1em;
border: .8px solid black;
border-radius: 20px;
display: inline-block;
`
const Edit = styled.div`
margin-left: 60%;
display: inline-block;
`
const Nav = styled.nav`
font-family: Courier New;
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

class Users extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get(`api/users`).then((res) => {
            this.setState({ users: res.data })

        })
    }

    deleteIdea = (event, userId) => {
        event.preventDefault()
        axios.delete(`/api/users/${userId}`).then((res) => {
            this.getAllUsers()
        })
    }

    render() {

        return (

            <div>
                <Nav>

                    <NavLink to="/userForm">Register Your Garden</NavLink>
                    <NavLink to="/">Home</NavLink>

                </Nav>

                <UserList>

                    {this.state.users.map((user, i) => (
                        <UserBorder key={i}>

                            <ul> <List> Name: </List><StyledLink to={`/users/${user._id}`}>{user.name}</StyledLink></ul>
                            <ul><List> Address: </List>  {user.address} </ul>

                            <List>
                                <Link to={`/users/${user._id}/edit`}><Button>Edit</Button></Link>
                                <Button onClick={(event) => this.deleteIdea(event, user._id)}>Delete</Button></List>

                        </UserBorder>

                    ))}
                </UserList>
            </div>
        )
    }
}


export default Users;