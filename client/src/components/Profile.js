import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Profile extends Component {

    state = {
        user: {}
    }
    
    componentDidMount() {
        this.getSingleUser()
    }

    getSingleUser = () => {
        const id = this.props.match.params.id
        console.log(id)
        axios.get(`/api/users/${id}`).then((res)=>{
            this.setState({user: res.data})
        
        })
}

    render() {
        return (
            <div>
                <h1>Profile: {this.state.user.name}</h1>
                <h1>Address: {this.state.user.address}</h1>
                <Link to = {`/posts/${this.props.match.params.id}`}>Let's Compost</Link>
            </div>

        );
    }
}

export default Profile;