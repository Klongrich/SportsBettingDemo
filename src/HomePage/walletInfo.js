import React, {useEffect, useState} from 'react'
import styled from "styled-components";

import Web3 from 'web3';

const API_KEY = 'SGJRWYUZK9QJH2UUQ96JKTZAY4RAPIB5PK';
const PUBlIC_KEY = '0x3F5AA308D0D27fD80479dbcD1012c8254da45820';
const ACTION = 'txlist'

//Minimum ABI to get ERC20 Token balance
var ERC_20_ABI = [
  // balanceOf
  {
    "constant":true,
    "inputs":[{"name":"_owner","type":"address"}],
    "name":"balanceOf",
    "outputs":[{"name":"balance","type":"uint256"}],
    "type":"function"
  },
  // decimals
  {
    "constant":true,
    "inputs":[],
    "name":"decimals",
    "outputs":[{"name":"","type":"uint8"}],
    "type":"function"
  }
];

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

export function testing() {

    return (
        <>
            <p>Hello world</p>
        </>
    )
}

const removeDuplicates = (arr) => {

    const result = [];
    const duplicatesIndices = [];

    // Loop through each item in the original array
    arr.forEach((current, index) => {
    
        if (duplicatesIndices.includes(index)) return;
    
        result.push(current);
    
        // Loop through each other item on array after the current one
        for (let comparisonIndex = index + 1; comparisonIndex < arr.length; comparisonIndex++) {
        
            const comparison = arr[comparisonIndex];
            const currentKeys = Object.keys(current);
            const comparisonKeys = Object.keys(comparison);
            
            // Check number of keys in objects
            if (currentKeys.length !== comparisonKeys.length) continue;
            
            // Check key names
            const currentKeysString = currentKeys.sort().join("").toLowerCase();
            const comparisonKeysString = comparisonKeys.sort().join("").toLowerCase();
            if (currentKeysString !== comparisonKeysString) continue;
            
            // Check values
            let valuesEqual = true;
            for (let i = 0; i < currentKeys.length; i++) {
                const key = currentKeys[i];
                if ( current[key] !== comparison[key] ) {
                    valuesEqual = false;
                    break;
                }
            }
            if (valuesEqual) duplicatesIndices.push(comparisonIndex);
            
        } // end for loop

    }); // end arr.forEach()  
    return result;
}

const get_token_balance = async (publicKey, tokenAddy) => {
    const web3 = window.web3
    var balance;
    
    // Get ERC20 Token contract instance
    const contract = await new web3.eth.Contract(ERC_20_ABI, tokenAddy);
    
    // Call balanceOf function
    await contract.methods.balanceOf(publicKey).call(function(error, result){
        balance = web3.utils.fromWei(result, 'ether');
    });     
    console.log(balance);  
    return (balance);
}

export async function getWalletAmount(){

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

    var wallet = await loadWeb3();
      
    if (wallet) {

        const web3 = window.web3

        const accounts = await web3.eth.getAccounts()
        const address = {account: accounts[0]}.account;

        if (address) {
            
                web3.eth.getBalance(address, function (error, wei) {
                    if (!error) {
                        var balance = web3.utils.fromWei(wei, 'ether');
                        return ( <> {balance} </>);
                    }  
                });
            }
    }
}

export async function get_erc_20() {

        fetch('http://api.etherscan.io/api?module=account&action=tokentx&address=' + PUBlIC_KEY + '&startblock=0&endblock=999999999&sort=asc&apikey=' + API_KEY , {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                    "Content-Type": "application/json"
            },
        },
        ).then(response => {
            if (response.ok) {
                response.json().then(json => {
                    json.result.map((data,index) => 
                        get_token_balance(PUBlIC_KEY, data.contractAddress).then( result => {
                            // setErc20(erc20 => [...erc20, {
                            //     name: data.tokenName, 
                            //     contract: data.contractAddress,
                            //     amount: result
                            // }])
                        })
                    )
                })
            }
        })
}
