import React, {useEffect, useState} from 'react'
import styled from "styled-components";

import Web3 from 'web3';

export default function Navbar() {

        return (
            <>
                <Container> 
                <h2 Style="margin-left: 30px;"> Sports Betting </h2>

                <ul>
                    <li>Baseball</li>
                    <li>MMA</li>
                    <li>E-Sports</li>
                    <li> Wallet Balance: {walletBalance} ETH </li>
                </ul>
                </Container>      
            </>
        )

}