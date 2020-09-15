import React, {useState, useEffect} from 'react'
import Web3 from 'web3'

import {FootballData, MMAData, EsportsData} from './data'
import {Container, BetButton, BetContainer, HeaderContainer} from './styles'

import box from './ABI/Box.json'
import betting from './ABI/Betting.json'

export default function Homepage() {

    const [BettingData, setBettingData] = useState(FootballData);
    const [walletAmount, setWalletAmount] = useState(0);
    const [pageState, setPageState] = useState("Home");

    const [currentBets, setCurrentBets] = useState("No Current Bets");

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

    async function get_bets(){

        const web3 = window.web3;

        const Ethaccounts = await web3.eth.getAccounts();

        const Betting = new web3.eth.Contract(betting.abi, "0x7c13890f3D6c625A878118B72f1396eCf72c1e7c");

        var current_bet;

        await Betting.methods.getAmountOfBetOne().call(function (error, result){
            current_bet = web3.utils.fromWei(result, 'ether')
            console.log(result);
            setCurrentBets(current_bet);
        });

        setPageState("Bets");

    }

    async function submit_bet(amount) {

        const web3 = window.web3;

        const Ethaccounts = await web3.eth.getAccounts();

        const Betting = new web3.eth.Contract(betting.abi, "0x7c13890f3D6c625A878118B72f1396eCf72c1e7c");

        //Betting on '1' uses team one that the player is betting on
        await Betting.methods.bet(1).send({from: Ethaccounts[0], value: amount})
        .once('receipt', (receipt) => {
            console.log(receipt);
            console.log("transaction hash" + receipt.transactionHash);
        })

        await Betting.methods.getAmountOfBetOne().call(function (error, result){
            console.log(result);
        });
    }


    useEffect(() => {
        getWalletAmount();
    });

    if (pageState == "Home") {
    return (
        <>

        <HeaderContainer> 

            <h2 Style="margin-left: 30px;"> Sports Betting </h2>

            <ul>
                <li onClick={() => setBettingData(FootballData)}>Football</li>
                <li onClick={() => setBettingData(MMAData)}> MMA </li>
                <li onClick={() => setBettingData(EsportsData)}> E-Sports</li>
                <li onClick={() => get_bets()}> Wallet Balance: {walletAmount} ETH </li>
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

                <BetButton onClick={() => submit_bet(100000000000000000)}>
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
    } else {

        return (
            <>
                <HeaderContainer Style="margin-top: -100px"> 

                <h2 Style="margin-left: 30px;"> Sports Betting </h2>

                <ul>
                    <li onClick={() => setBettingData(FootballData)}>Football</li>
                    <li onClick={() => setBettingData(MMAData)}> MMA </li>
                    <li onClick={() => setBettingData(EsportsData)}> E-Sports</li>
                    <li onClick={() => setPageState("Home")}> Wallet Balance: {walletAmount} ETH </li>
                </ul>

                </HeaderContainer> 

                 <p Style="padding-top: 200px">Current Bets: </p>
                 <p> Amount Bet On Team One: {currentBets} ETH </p>
            </>
        )
    }

}