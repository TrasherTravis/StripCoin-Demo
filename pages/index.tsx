//@ts-nocheck
import React, {useEffect, useReducer, useState} from "react";
import {Background, Content, Image} from '../libs/styles'
import Head from 'next'
import Header from "components/header/index";
import ConnectWallet from "components/connectWallet/connect-wallet";
import Index from "components/walletBalance";
import BuyForm from "components/buyForm/buyForm";
import Presale from "../components/welcomeToPresale";
import {useWeb3React} from "@web3-react/core";
import {Web3Provider} from "@ethersproject/providers";
import Web3 from 'web3';
import {parseValue, countdown} from "../libs/timer";
import {change} from "../libs/changeNet";
import {presaleABI} from "../contracts/abis";
import {presaleContract} from "../contracts/constants";

export const AppContext = React.createContext({});
const initialState = {
    balance: 0,
}

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
    const [days, setDays] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [outdated, setIsOutdated] = useState<boolean>(0);

    const context = useWeb3React<Web3Provider>();
    const web3 = new Web3(Web3.givenProvider);


    //get interval from contract -> ms
    const PRESALE_CONTRACT = new web3.eth.Contract(presaleABI, presaleContract);

    useEffect(() => {
        if (context.account) change()
    }, [context])


    useEffect(() => {
        const compare = source => {
            if (source) setIsMobile(true);
            else setIsMobile(false);
        };

        void (async () => {
            let interval = 0
            await PRESALE_CONTRACT.methods.PERIOD().call().then(r => interval = parseInt(r))
            const getData = parseValue(interval);
            countdown({getData, setDays, setMinutes, setSeconds, setHours, setIsOutdated});
            console.log(interval)
        })();

        let interval: number = 0;

        const media = window.matchMedia('(max-width: 1200px)');
        compare(media.matches);
        media.addListener((e) => {
            compare(e.matches);
        });
    }, []);

    const timeLeft: string = outdated ? 'Expired' : days + 'd' + ':' + hours + 'h' + ':' + minutes + 'm' + ':' + seconds + 's';


    return (
        <>
            <AppContext.Provider value={{state, dispatch}}>
                <Background>
                    <Content isMobile={isMobile}>
                        <Header isMobile={isMobile}/>
                        <Presale isMobile={isMobile} timer={timeLeft}/>
                        <ConnectWallet isMobile={isMobile}/>
                        <Index isMobile={isMobile}/>
                        <BuyForm isMobile={isMobile} timer={timeLeft}/>
                        <Image src='images/logo.png' alt='logo' isMobile={isMobile}/>
                    </Content>
                </Background>
            </AppContext.Provider>
        </>
    );
};

export default IndexPage;
