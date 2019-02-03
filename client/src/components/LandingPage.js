import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';


const HomeLinks = styled.a`
position: absolute;
top: 40%;
margin-left: 20%;
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
left-align: 30%;

`


const Intro = styled.div`
position: absolute;
top: 20%;
margin-left: 20%;
margin-right: 20%;
font-weight: bold;
`
const Content = styled.div`
font-family: Courier New;
`

class LandingPage extends Component {
    render() {
        return (
            <div>

<Content>
                    <HomeLinks>
                
                    <Link to="/users"><Button>Find Local Garden</Button></Link>
                    <Link to="/userForm"><Button>Register</Button></Link>

                    </HomeLinks>
            <Intro>
                <p>“The greatest threat to our planet is the belief that someone else will save it.”
– Robert Swan</p>
            </Intro>
            </Content>
            </div>
        );
    }
}

export default LandingPage;