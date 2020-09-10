import React from 'react'
import styled from "styled-components";


const Container = styled.div`

    background-color: black;
    color: white;

    height: 55px;
    width: 100%;

    border-bottom: 1px solid white;
    border-top: 1px solid black;

    ul{
        list-style-type: none;
        margin-left: 800px;
        margin-top: -40px;
    }

    li {
        float: left;
        padding-left: 42px;
    }

    li:hover{
        color: red;
        cursor: pointer;
    }

`

export default function Navbar() {

    return (
        <>
            <Container> 
            <h2 Style="margin-left: 30px;"> Sports Betting </h2>

            <ul>
                <li>FootBall</li>
                <li>Baseball</li>
                <li>MMA</li>
                <li>E-Sports</li>
            </ul>
            </Container>      
        </>
    )

}