import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

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
            <div>
                {this.state.users.map((user, i) => (
                    <div key={i}>
                            
                        <li>Name: {user.name}</li>
                        <li>Adress: {user.address}</li>
                        <li>Gallons Composted: {user.amountComposted}</li>
                        <li>Routes Hauled: {user.routesHauled}</li>
                        <li>Available Credit: {user.availableCredit}</li>
                    <Link to = {`/users/${user._id}/edit`}>Edit</Link>
                    <div><button onClick={(event)=>this.deleteIdea(event, user._id)}>Delete</button></div>

                    </div>

                ))}
            </div>
        )
    }
}


    export default Users;