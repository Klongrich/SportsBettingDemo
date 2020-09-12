import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import Web3 from 'web3'

import NavBar from './Navbar'

import {FootballData, MMAData, EsportsData} from './data'


const Container = styled.div`

    margin-top: 100px;

    border: 2px solid white;
    border-radius: 10px;

    width: 950px;

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

    :focus & {
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

    padding-top: 10px;
    padding-bottom: 14px;

    &:hover {
        color: white;
        opacity: 1;
        cursor: pointer;
    }

`

export default function Homepage() {

    const [BettingData, setBettingData] = useState(FootballData)

    return (
        <>
        {BettingData.map (data =>
        <Container> 
                <>

              
                <ul Style="width: 220px;">
                    <li Style="Color: #b0b0b0; 
                               font-weight: bold;
                               text-decoration: underline">{data.title} </li>
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

                <ul>
                    <li Style="color:#808080;
                               font-weight:bold;
                               margin-left: 10px;"> Liqudity </li>
                    
                    <li Style="margin-left: 9px;"> ETH: 7.14 </li>
                
                </ul>

                <BetButton>
                    Place Bet
                </BetButton>


                    </>  
        </Container>
        )}  
        </>
    )

}