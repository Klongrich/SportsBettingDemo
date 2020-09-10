import React from 'react'
import styled from "styled-components";

import NavBar from './Navbar'


const Container = styled.div`

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
    }

`

export default function Homepage() {

    return (
        <>
        <Container>
            <ul>
                <li>Browns vs Stealers</li>
                <li>Team One:</li>
                <li Style="margin-top: 10px;">Team Two:</li>
            </ul>

            <ul>
                <li>Money Line </li>

                <BetContainer>
                    <li> +130</li>
                </BetContainer>

                <BetContainer>
                    <li> -120 </li>
                </BetContainer>
            </ul>

            <ul>
                <li>Over / Under </li>

                <BetContainer>
                    <li>+7 +140</li>
                </BetContainer>

                <BetContainer>
                    <li>-7 -120</li>
                </BetContainer>
            </ul>

            <BetButton>
                Place Bet
            </BetButton>
        </Container>
        </>
    )

}