import React, {useEffect, useState} from 'react'
import styled from "styled-components";

import Web3 from 'web3';

const Container = styled.div`

    background-color: black;
    color: white;

    height: 55px;
    width: 100%;

    border-bottom: 1px solid white;
    border-top: 1px solid black;

    ul{
        list-style-type: none;
        margin-left: 710px;
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

    const [walletBalance, setWalletBalance] = useState(0);
    const [publicKey, setPublicKey] = useState("");

    useEffect(() => {

        async function loadWeb3() {
            if (window.ethereum) {
                window.web3 = new Web3(window.ethereum)
                await window.ethereum.enable()
                return(true);
            }
            else if (window.web3) {
                window.web3 = new Web3(window.web3.currentProvider)
                return(true);
            }
            else {
                window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
                return(false);
            }
        }

        async function getWalletData () {

            var wallet = await loadWeb3();
          
            if (wallet) {
                const web3 = window.web3

                const accounts = await web3.eth.getAccounts()
                const address = {account: accounts[0]}.account;

                setPublicKey(address);

                if (address) {
                
                    web3.eth.getBalance(address, function (error, wei) {
                        if (!error) {
                            var balance = web3.utils.fromWei(wei, 'ether');
                            setWalletBalance(balance.substring(0,4));
                            console.log(balance + " ETH");
                        }  
                    });
                }
            }
        }
          
        getWalletData();

    }, [])

    return (
        <>
            <Container> 
            <h2 Style="margin-left: 30px;"> Sports Betting </h2>

            <ul>
                <li>Baseball</li>
                <li>MMA</li>
                <li>E-Sports</li>
                <li>Wallet Balance: {walletBalance} ETH </li>
            </ul>
            </Container>      
        </>
    )

}