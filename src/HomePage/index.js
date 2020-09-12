import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import Web3 from 'web3'

import NavBar from './Navbar'


const Container = styled.div`

    margin-top: -100px;

    border: 2px solid white;
    border-radius: 10px;

    ul{
        list-style-type: none;
        float: left;

        margin-right: 40px;
        margin-top: 8px;
    }

    li {
        padding-top: 20px;
    }
`

const BetContainer = styled.div`

    border: 2px solid white;
    border-radius: 5px;

    opacity: 0.5;

    background-color: grey;

    text-align: center;

    margin-top: 10px;
    li {
        margin-top: -10px;
        padding-bottom: 10px;
    }

    &:hover {
        color: white;
        opacity: 1;
        cursor: pointer;
    }

`

const BetButton = styled.div`

    border: 2px solid white;
    border-radius: 5px;

    opacity: 0.5;

    height: 20px;
    width: 180px;

   display: inline-block;
    background-color: green;

    text-align: center;

    margin-right: 20px;

    margin-top: 123px;
    padding-top: 10px;
    padding-bottom: 14px;

    &:hover {
        color: white;
        opacity: 1;
        cursor: pointer;
    }

`

const FootBallData = [
    {
        title: "Browns vs Stealer",
        teamOne: "+130",
        teamTwo: "-140",
        teamOneOver: "+7 +140",
        teamTwoOver: "-7 -120"
    },
    {
        title: "Cavs vs Golden State",
        teamOne: "+110",
        teamTwo: "-170",
        teamOneOver: "+3 +120",
        teamTwoOver: "-2 -150"
    },
    {
        title: "Jets vs Patroits",
        teamOne: "+180",
        teamTwo: "-140",
        teamOneOver: "+10 +120",
        teamTwoOver: "-5 -160"
    }
]

export default function Homepage() {

    return (
        <>
        <Container>

            {FootBallData.map (data =>
                
                <>
            <ul>
                <li>{data.title} </li>
                <li>Team One:</li>
                <li Style="margin-top: 10px;">Team Two:</li>
            </ul>

            <ul>
                <li>Money Line </li>

                <BetContainer>
                    <li> {data.teamOne} </li>
                </BetContainer>

                <BetContainer>
                    <li> {data.teamTwo} </li>
                </BetContainer>
            </ul>

            <ul>
                <li>Over / Under </li>

                <BetContainer>
                    <li> {data.teamOneOver} </li>
                </BetContainer>

                <BetContainer>
                    <li> {data.teamTwoOver} </li>
                </BetContainer>
            </ul>

            <BetButton>
                Place Bet
            </BetButton>
                </>
          )}    
        </Container>
        </>
    )

}