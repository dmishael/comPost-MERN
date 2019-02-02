import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

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
const View = styled.div `
text-align: left-center;
margin-left: 33%;
margin-right: 33%;

`
const Info = styled.ul `
padding: 10px 10px 10px 10px;
text-decoration: "none";
`

const ProfileBorder = styled.ul `
border-radius: 20px;
border: 1.5px solid black;
padding: 10px 10px 10px 10px;
`

class Profile extends Component {

    state = {
        user: {
            totalComposted: []
        }
    }
    
    componentDidMount() {
        this.getSingleUser()

    }

    getSingleUser = () => {
        const id = this.props.match.params.id
        console.log(id)
        axios.get(`/api/users/${id}`).then((res)=>{
            console.log(res)
            this.setState({user: res.data})
        
        })
}


    sumCompostAmount = (array) => {
        let total = 0
        array.forEach(element => {
            
            total = total+element
        })
        return total
        ;
    }    

    render() {
        return (
            <div>
                <Nav>
                <NavLink to = {`/Posts/${this.props.match.params.id}`}>Let's Compost</NavLink>
              
        </Nav>
        <ProfileBorder>
            <View>
                <h1>Profile: <Info>{this.state.user.name}</Info></h1>
                <h1>Address: {this.state.user.address}</h1>
                <h1>Gallons Composted: {this.sumCompostAmount(this.state.user.totalComposted)}</h1>
                {/* <h1>Hauling Credit: {this.state.user.bookingCredit}</h1> */}
                {console.log(this.state.user.posts)}
                {/* <h1>{this.state.user.posts.reduce((a,b) => {
                    return( a + b)
                })}</h1>
                     */}
                     </View>
                     </ProfileBorder>
               
                
            </div>

        );
    }
}
// amountComposted: Number,
// routesHauled: Number,
// availableCredit: Number,
// name: String,
// address: String,
// posts: [
export default Profile;