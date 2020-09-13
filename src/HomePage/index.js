import React, {useState, useEffect} from 'react'
import Web3 from 'web3'

import {FootballData, MMAData, EsportsData} from './data'
import {Container, BetButton, BetContainer, HeaderContainer} from './styles'

export default function Homepage() {

    const [BettingData, setBettingData] = useState(FootballData);
    const [walletAmount, setWalletAmount] = useState(0);

    async function getWalletAmount(){

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
                return(false);
            }
        }
    
        var wallet = await loadWeb3();
          
        if (wallet) {
    
            const web3 = window.web3
    
            const accounts = await web3.eth.getAccounts()
            const address = {account: accounts[0]}.account;
    
            if (address) {
                
                    web3.eth.getBalance(address, function (error, wei) {
                        if (!error) {
                            var balance = web3.utils.fromWei(wei, 'ether');
                            setWalletAmount(balance.substring(0,4));
                        }  
                    });
                }
        }
    }

    useEffect(() => {
        getWalletAmount();
    });

    return (
        <>

        <HeaderContainer> 

            <h2 Style="margin-left: 30px;"> Sports Betting </h2>

            <ul>
                <li onClick={() => setBettingData(FootballData)}>Football</li>
                <li onClick={() => setBettingData(MMAData)}> MMA </li>
                <li onClick={() => setBettingData(EsportsData)}> E-Sports</li>
                <li> Wallet Balance: {walletAmount} ETH </li>
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