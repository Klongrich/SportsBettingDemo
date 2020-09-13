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
    margin-bottom: 30px;

    padding-top: 10px;
    padding-bottom: 14px;

    &:hover {
        color: white;
        opacity: 1;
        cursor: pointer;
    }

`
const HeaderContainer = styled.div`

    background-color: black;
    color: white;

    height: 55px;
    width: 100%;

    border-bottom: 1px solid white;
    border-top: 1px solid black;

    h2 {
        text-align:left;
        font-size: 24px;
    }

    ul{
        list-style-type: none;
        margin-left: 710px;
        margin-top: -40px;
    }

    li {
        float: left;
        padding-left: 42px;
        font-size: 16px;
    }

    li:hover{
        color: red;
        cursor: pointer;
    }

`

export default function Homepage() {

    const [BettingData, setBettingData] = useState(FootballData)

    return (
        <>

        <HeaderContainer> 

            <h2 Style="margin-left: 30px;"> Sports Betting </h2>

            <ul>
                <li onClick={() => setBettingData(FootballData)}>Football</li>
                <li onClick={() => setBettingData(MMAData)}> MMA </li>
                <li onClick={() => setBettingData(EsportsData)}> E-Sports</li>
                <li> Wallet Balance: 1.08 ETH </li>
            </ul>

        </HeaderContainer> 

        {BettingData.map (data =>

        <Container> 
                <>    
                <ul Style="width: 240px;">
                    <li Style="Color: #b0b0b0; 
                               font-weight: bold;
                               text-decoration: underline">{data.title} </li>
                    <li> {data.teamOne} </li>
                    <li Style="margin-top: 10px;"> {data.teamTwo} </li>
                </ul>
           

                <ul>
                    <li>Money Line </li>

                    <BetContainer>
                        <li> {data.teamOneOdds} </li>
                    </BetContainer>

                    <BetContainer>
                        <li> {data.teamTwoOdds} </li>
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
                    
                    <li Style="margin-left: 9px;"> ETH: {data.liquidity}</li>
                
                </ul>

                <BetButton>
                    Place Bet
                </BetButton>


                </>  
        </Container>

        
        )}  

                <div Style="padding-top: 150px;">
                    <p> Footer Here </p>
                </div>
        </>
    )

}