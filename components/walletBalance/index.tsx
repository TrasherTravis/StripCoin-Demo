import React, {useState, useEffect, useContext} from "react";
import Web3 from "web3";
import {useWeb3React} from '@web3-react/core';
import {Web3Provider} from '@ethersproject/providers';
import {AppContext} from "pages";
import Card from "../card";
import {List, Row, Link, TextPrimary, Balance, Secondary, Image, BlockedContent} from './styles';

declare let window: any;

const Index = (props) => {
    const context = useWeb3React<Web3Provider>();
    const {active} = context;
    const [accounts, setAccounts] = useState([]);
    const [balance, setBalance] = useState(null);
    const contextData: any = useContext(AppContext);
    const {state, dispatch} = contextData;

    const updateBalance = value => {
        dispatch({type: "UPDATE_BALANCE", data: value})
    }

    useEffect(() => {
        const ethereumEnable = async () => {
            if (typeof window.ethereum !== undefined) {
                console.log("MetaMask is installed");
                const web3 = new Web3(Web3.givenProvider);
                try {
                    await window.ethereum.enable();
                    var tAccounts = await web3.eth.getAccounts()
                    var tBalance = await web3.eth.getBalance(tAccounts[0])
                    if (tBalance) {
                        console.log(tBalance, 'balance')
                        setBalance(parseFloat(web3.utils.fromWei(tBalance, 'ether')).toFixed(3))
                        updateBalance(web3.utils.fromWei(tBalance, 'ether'))
                    }
                    return true
                } catch (err) {
                    console.log("web3 error");
                    return false
                }
            } else {
                alert('MetaMask error')
            }
        };

        if (active) {
            ethereumEnable()
        } else {
            setBalance(null)
        }

    }, [active]);


    const instructions: React.ReactChild =
        <List>
            <Row>STRIPCOIN is built on the Ethereum blockchain, and so we have chosen the base currency of this presale
                to be ETH, the native currency of the Ethereum blockchain.</Row>
            <Row>You can only buy STRIPCOIN with ETH, so you need to have ETH in your wallet to buy STRIP.</Row>
            <Row>You can buy ETH from cryptocurrency exchanges such as CoinBase, Gemini, Binance, etc..</Row>
            <Row>If this is your first time buying ETH, please read our ETH Buying Guide by clicking here:<Link
                href="#">... ETH Buying Guide ...</Link></Row>

        </List>;

    const functional: React.ReactChild =
        <>
            {balance === null ?
                <BlockedContent>
                    <Image src='images/unlock.png' alt={'lock'}/>
                    <Secondary>Connect your wallet <br/>to see
                        your ETH balance displayed here.
                    </Secondary>
                </BlockedContent>
                :
                <>
                    <TextPrimary>Your ETH balance:</TextPrimary>
                    <Balance>{balance} ETH</Balance>
                    <Secondary>Awesome! Your balance is enough to buy the full allocation in this presale.</Secondary>
                </>
            }
        </>;

    return (
        <Card title='Buy STRIPCOIN.' functional={functional} instructions={instructions} isMobile={props.isMobile}/>
    );
};

export default Index;
