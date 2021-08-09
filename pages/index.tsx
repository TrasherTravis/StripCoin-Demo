import React, {useEffect, useReducer, useState} from "react";
import {Background, Content, Image} from '../libs/styles'

import Header from "components/header/index";
import ConnectWallet from "components/connectWallet/connect-wallet";
import Index from "components/walletBalance";
import BuyForm from "components/buyForm/buyForm";
import Presale from "../components/welcomeToPresale";
import {useWeb3React} from "@web3-react/core";
import {Web3Provider} from "@ethersproject/providers";
import Web3 from 'web3';

export const AppContext = React.createContext({});
const initialState = {
    balance: 0,
}

let window: any;

function reducer(state, action) {
    switch (action.type) {
        case "UPDATE_BALANCE":
            return {
                balance: action.data
            }
        default:
            return initialState;
    }
}

const IndexPage = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const context = useWeb3React<Web3Provider>();
    const web3 = new Web3(Web3.givenProvider);

    useEffect(() => {
        const compare = source => {
            if (source) setIsMobile(true);
            else setIsMobile(false);
        };

        if(window.ethereum !== undefined ){
             window.ethereum.enable();
             if(context.chainId === 1 || context.chainId === 4) {
             } else {
                 window.ethereum.request({
                     method: 'wallet_switchEthereumChain',
                     params: [{ chainId: '0x1' }],
                 });
             }
        }

        const media = window.matchMedia('(max-width: 600px)');
        compare(media.matches);
        media.addListener((e) => {
            compare(e.matches);
        });
    }, [context]);


    return (
        <AppContext.Provider value={{state, dispatch}}>
            <Background>
                <Content isMobile={isMobile}>
                    <Header isMobile={isMobile}/>
                    <Presale isMobile={isMobile}/>
                    <ConnectWallet isMobile={isMobile}/>
                    <Index isMobile={isMobile}/>
                    <BuyForm isMobile={isMobile}/>
                    <Image src='images/logo.png' alt='logo' isMobile={isMobile}/>
                </Content>
            </Background>
        </AppContext.Provider>
    );
};

export default IndexPage;
