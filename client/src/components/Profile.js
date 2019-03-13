import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
const ProfileBorder = styled.ul`
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
        user: [],
        Posts: [],
        posts: []
        // gallonsNeeded: Number,


    }

    componentDidMount() {
        this.getSingleUser()
        this.getUserBookings()
        // this.sumCompostAmount()

    }

    getSingleUser = () => {
        const id = this.props.match.params.id

        axios.get(`/api/users/${id}`).then((res) => {

            this.setState({ user: res.data })
            console.log(res.data)
            console.log(this.state.user.posts)

        })
    }


    getUserBookings = () => {
        const id = this.props.match.params.id
        console.log(id)

        axios.get(`/api/Posts/${id}`).then((res) => {

            console.log(res.data)
            this.setState({ posts: res.data })
            console.log(this.state)


        })
    }



    // sumCompostAmount = () => {
    //     this.state.posts.map((post) => {

    //         return post.gallonsNeeded
    //     }).reduce((accumulator, currentValue) => {

    //         const gallons = accumulator + currentValue
    //         this.setState({ gallonsNeeded: gallons })
    //         console.log(this.state.gallonsNeeded)
    //     }, 0)
    // }







    render() {


        return (
            <div>
                <Nav>
                    <NavLink to={`/Posts/${this.props.match.params.id}`}>ComPOST</NavLink>
                    <NavLink to={`/users`}>Gardens</NavLink>
                    <NavLink to={`/`}>Home</NavLink>

                </Nav>
                <ProfileBorder>

                    <h2><ProfileCategory>Profile: </ProfileCategory>   {this.state.user.name}</h2>
                    <h2><ProfileCategory>Address: </ProfileCategory>   {this.state.user.address}</h2>




                    {/* <h1><ProfileCategory>Gallons Committed: </ProfileCategory>   {this.sumCompostAmount(this.state.user.posts)}</h1> */}

                    <h4> <ProfileCategory>Gallons Needed: </ProfileCategory>{this.state.posts.map((post) => {

                        return post.gallonsNeeded
                    }).reduce((accumulator, currentValue) => {

                        return accumulator + currentValue
                    }, 0)} 

                    </h4>

                    <h4> <ProfileCategory>Gallons Committed: </ProfileCategory> {this.state.posts.map((post, i) => {
                        console.log("For post #", i);
                        return post.bookings.map(((booking, j) => {
                            console.log(this.state.user.posts)
                            console.log(`For booking ${j} in post ${i}`);

                            return (
                                booking.amountCommitted
                            )
                        })).reduce((accumulator, currentValue) => {
                            console.log("sum all the bookings ")
                            return accumulator + currentValue

                        }, 0)
                    }



                    ).reduce((accumulator, currentValue) => {
                        console.log("sum all the posts")
                        return accumulator + currentValue
                    }, 0)}
                    </h4>



                    {/* <div> <ProfileCategory>Gallons Needed: </ProfileCategory> { return x -y}</div> */}

                </ProfileBorder>


            </div>

        );
    }
}

export default Profile;