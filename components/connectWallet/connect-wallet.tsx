import React, {useRef} from 'react';
import Wallets from "../wallet-modal";
import {useWeb3React} from "@web3-react/core";
import {Web3Provider} from "@ethersproject/providers";
import Card from '../card';
import {List, Row, Link, Text, Wallet, WalletDisconnect, Separator, ButtonDisconnect, ContainerConnect} from './styles';
import Button from "../button";

const ConnectWallet: React.FC<{ isMobile: boolean }> = ({isMobile}) => {
    const context = useWeb3React<Web3Provider>()
    const {deactivate, active} = context
    const walletRef = useRef(null);
    const connectMetaMask = () => {
        walletRef.current.openModal();
    };

    const walletDisconnect = () => {
        void deactivate();
    };

    const account: string = context.account === undefined ? null : context.account.slice(0, 5) + '...' + context.account.slice(-4);

    const content = context.active ?
        <>
            <Text>Your wallet is succesfully connected with address:</Text>
            <Wallet>{account}</Wallet>
            <Text>If you wish to disconnect your wallet, click here:</Text>
                <br/>
                <WalletDisconnect onClick={walletDisconnect}>Disconnect Wallet</WalletDisconnect>
        </>
        :
        <>
            <Wallets ref={walletRef}/>
            <Text>
                Click here to begin:
            </Text>
            <ContainerConnect>
                <Button name={'Connect Wallet'} onClick={() => connectMetaMask()} isInactive={false}/>
            </ContainerConnect>
            <Text>
                Supported wallets: MetaMask (recommended), all WalletConnect™
                supported wallets, including Argent,
                RainbowWallet, TrustWallet...
            </Text>
        </>


    const instructions =
        <List>
            <Row>
                The first step is to connect your wallet to this presale website.
            </Row>
            <Row>
                If you don't have a wallet software installed yet, please read our Wallet Guide by clicking here:
            </Row>
            <Row>
                <Link href='#'>... Wallet Guide ...</Link>
            </Row>
            <Row>
                You can buy ETH from cryptocurrency exchanges such as CoinBase, Gemini, Binance, etc..
            </Row>
            <Row>Every wallet is a little different, but with any wallet you use, start by clicking the button on the
                right that says "Connect Wallet".</Row>
        </List>

    return (
        <Card title='1. CONNECT WALLET.' instructions={instructions} functional={content} isMobile={isMobile}/>
    );
};

export default ConnectWallet;
