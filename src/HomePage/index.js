import React, {useState, useEffect} from 'react'
import Web3 from 'web3'
import styled from "styled-components";


import {FootballData, MMAData, EsportsData} from './data'
import {Container, BetButton, BetContainer, HeaderContainer} from './styles'

import betting from './ABI/Betting.json'
import staking from './ABI/Staking.json'

import Footer from './footer.js'

const StakingContract = "0x6cFf0b2d01B1e7892f9b66A2D7A39777464aBFc5";

const StakingContainer = styled.div`

    border: 3px solid black;
    border-radius: 15px;
    padding-top: 50px;
    padding-right: 30px;
    padding-bottom: 50px;
    float: left;

`

const StakingBox = styled.div`

    border: 3px solid black;
    border-radius: 15px;
    padding-top: 20px;
    padding-bottom: ${props => props.bottom};

    width: 350px;

    display: inline-block;

    margin-left: 30px;

`

export const StakingButton = styled.div`

    border: 2px solid white;
    border-radius: 5px;

    opacity: 0.5;

    height: 20px;
    width: 180px;

    display: inline-block;

    background-color: green;

    text-align: center;

    margin-top: 30px;

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

export default function Homepage() {

    const [BettingData, setBettingData] = useState(FootballData);
    const [walletAmount, setWalletAmount] = useState(0);
    const [pageState, setPageState] = useState("Home");

    const [amountStaked, setAmountStaked] = useState(0);

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

    async function pay_out_staked() {

        const web3 = window.web3
        const Ethaccounts = await web3.eth.getAccounts();
        const Staking = new web3.eth.Contract(staking.abi, StakingContract);

        await Staking.methods.pay_out().send({from: Ethaccounts[0]})
        .once('receipt', (receipt) => {
            console.log(receipt);
        })

    }

    async function submit_stake(){

        const web3 = window.web3
        const Ethaccounts = await web3.eth.getAccounts();
        const Staking = new web3.eth.Contract(staking.abi, StakingContract);

        await Staking.methods.deposit().send({from: Ethaccounts[0], value:100000000000000000})
        .once('receipt', (receipt) => {
            console.log(receipt);
            console.log("transaction hash" + receipt.transactionHash);
        })
    }

    async function submit_donation(){

        const web3 = window.web3
        const Ethaccounts = await web3.eth.getAccounts();
        const Staking = new web3.eth.Contract(staking.abi, StakingContract);

        await Staking.methods.donate().send({from: Ethaccounts[0], value:100000000000000000})
        .once('receipt', (receipt) => {
            console.log(receipt);
            console.log("transaction hash" + receipt.transactionHash);
        })
    }

    async function get_amount_staked() {

        const web3 = window.web3;
        var balance = await web3.eth.getBalance(StakingContract);

        console.log(balance / 1000000000000000000);
        setAmountStaked(balance / 1000000000000000000)
    }

    async function get_bets(){
        setPageState("Bets");
    }

    async function submit_bet(amount, gameID) {

        const web3 = window.web3;
        const Ethaccounts = await web3.eth.getAccounts();
        const Betting = new web3.eth.Contract(betting.abi, "0x7c13890f3D6c625A878118B72f1396eCf72c1e7c");

        //Betting on '1' uses team one that the player is betting on
        //Need to add in the ability to use GameIDs
        await Betting.methods.bet(2, gameID).send({from: Ethaccounts[0], value: amount})
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
        get_amount_staked();
    }, []);

    async function payout_bets(){

        const web3 = window.web3;
        const Ethaccounts = await web3.eth.getAccounts();
        const Betting = new web3.eth.Contract(betting.abi, "0x7c13890f3D6c625A878118B72f1396eCf72c1e7c");

        //Betting on '1' uses team one that the player is betting on
        await Betting.methods.distributePrizes(2).send({from: Ethaccounts[0]})
        .once('receipt', (receipt) => {
            console.log(receipt);
        })
    }
    // state = {lat: null, errorMessage: ''};

    // componentDidMount() {
    //     window.navigator.geolocation.getCurrentPosition(
    //       position => this.setState({ lat: position.coords.latitude }),
    //       err => this.setState({ errorMessage: err.message })
    //     );
    // }

    if (pageState == "Home") {
    return (
        <>

        <HeaderContainer>

            <h2 Style="margin-left: 30px;"> Sports Betting </h2>

            <ul>
                <li onClick={() => setBettingData(FootballData)}>Football</li>
                <li onClick={() => setBettingData(MMAData)}> MMA </li>
                <li onClick={() => get_bets()}> Staking</li>
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

                <BetButton onClick={() => submit_bet(100000000000000000, data.gameID)}>
                    Place Bet
                </BetButton>
                </>
        </Container>

        )}

            <h2 onClick={() => payout_bets()}> Payout One Test </h2>
            <h2> Payout Two Test </h2>


        <footer Style="padding-top: 150px;">
            <Footer />
        </footer>
        </>
    )
    } else {

        return (
            <>
                <HeaderContainer top="0px;">

                <h2 Style="margin-left: 30px;"> Sports Betting </h2>

                <ul>
                    <li onClick={() => setPageState("Home")}>Football</li>
                    <li onClick={() => setPageState("Home")}> MMA </li>
                    <li onClick={() => setPageState("Home")}> Staking </li>
                    <li onClick={() => setPageState("Home")}> Wallet Balance: {walletAmount} ETH </li>
                </ul>

                </HeaderContainer>

            <div>
                 <p Style="padding-top: 15px">Current Amount Staked: </p>
                 <p Style="margin-top: -10px"> Staked: 100.32 ETH </p>
            </div>

            <StakingContainer>
                 <StakingBox bottom="80px;">
                     <h2> Your Payout: </h2>

                     <h2>714.00 ETH</h2>
                </StakingBox>

                <StakingBox bottom="80px;">
                     <h2>Amount Staked: </h2>

                     <h2>{amountStaked} ETH </h2>
                </StakingBox>


                <StakingBox bottom="80px;">
                     <h2> Your Stake: </h2>

                     <h2>0.0714 ETH</h2>
                </StakingBox>
            </StakingContainer>

            <div Style="float: left">
                <StakingButton onClick={() => pay_out_staked()}>
                    Payout Test
                </StakingButton>

                <StakingButton onClick={() => submit_donation()}>
                    Dontae To Fund
                </StakingButton>


                <StakingButton onClick={() => submit_stake()}>
                    Stake
                </StakingButton>
            </div>

            </>
        )
    }

}