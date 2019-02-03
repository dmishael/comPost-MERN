import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

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
left-align: 30%;

`
const HomeLinks = styled.a`
position: absolute;
top: 40%;
margin-left: 40%;
margin-right: 40%;
`

const Intro = styled.div`
position: absolute;
top: 20%;
margin-left: 40%;
margin-right: 40%;
`

class LandingPage extends Component {
    render() {
        return (
            <div>


                    <HomeLinks>
                
                    <Link to="/users"><Button>Users</Button></Link>
                    <Link to="/userForm"><Button>Sign Up</Button></Link>

                    </HomeLinks>
            <Intro>
                <p>“The greatest threat to our planet is the belief that someone else will save it.”
– Robert Swan</p>
            </Intro>
            </div>
        );
    }
}

export default LandingPage;