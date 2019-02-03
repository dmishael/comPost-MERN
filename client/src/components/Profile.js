import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

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
const ProfileBorder = styled.ul `
font-family: Courier New;
font-size: 12pt;
border-radius: 20px;
border: 1.5px solid black;
padding: 10px 10px 10px 10px;
text-align: left-center;
margin-left: 15%;
margin-right: 15%;
`

const ProfileCategory = styled.div`
font-weight: bold;
color: "black";
display: inline-block;
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
                <NavLink to = {`/Posts/${this.props.match.params.id}`}>ComPOST</NavLink>
                <NavLink to = {`/users`}>Gardens</NavLink>
                <NavLink to = {`/`}>Home</NavLink>
              
        </Nav>
        <ProfileBorder>
        
                <h1><ProfileCategory>Profile: </ProfileCategory>   {this.state.user.name}</h1>
                <h1><ProfileCategory>Address: </ProfileCategory>   {this.state.user.address}</h1>
                <h1><ProfileCategory>Gallons Composted: </ProfileCategory>   {this.sumCompostAmount(this.state.user.totalComposted)}</h1>
        
                     
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