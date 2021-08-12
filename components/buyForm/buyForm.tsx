// @ts-nocheck
import React, {useContext, useEffect, useState} from "react";
import {Web3Provider} from '@ethersproject/providers';
import {useWeb3React} from '@web3-react/core';
import {presaleABI, tokenABI} from "../../contracts/abis";
import {presaleContract, STRIPCOIN} from "../../contracts/constants";
import Card from '../card';
import Input from '../input';
import {
    List,
    Row,
    Strong,
    Text,
    PrimaryText,
    SwapArrow,
    ButtonAndReceipt,
    InputContainer,
    ErrorContainer,
    Receipt,
    Pre
} from './styles';
import Popup from "../popup";
import {AppContext} from "pages";
import Button from "../button";
import Web3 from "web3";


const BuyForm = (props) => {
    const context = useWeb3React<Web3Provider>();
    const {step, setStep} = props;
    const {active} = context
    const [buyAmountETH, setBuyAmountETH] = useState<string>('');
    const [buyAmountSTRIP, setBuyAmountSTRIP] = useState<string>('');
    const [isDisabled, setIsDisabled] = useState<boolean>(true);
    const [balance, setBalance] = useState<number>(0);
    const [stripBalance, setStripBalance] = useState<string>('0');
    const [error, setError] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [strip, setStrip] = useState<any>('');
    const [fee, setFee] = useState<string>('0');
    const [txState, setTxState] = useState<string>('');

    const web3 = new Web3(Web3.givenProvider);

    const PRESALE_CONTRACT = new web3.eth.Contract(presaleABI, presaleContract);
    const Token = new web3.eth.Contract(tokenABI, STRIPCOIN);

    useEffect(() => {
        if (buyAmountSTRIP.length === 0 || buyAmountETH.length === 0 || error) setIsDisabled(true);
        else setIsDisabled(false);
        web3.eth.getGasPrice().then((result) => {
            setFee(web3.utils.fromWei(result))
        })

        try {
            PRESALE_CONTRACT.methods.MAX_ALLOC_STRIP().call().then((amount) => {
                setStrip(web3.utils.fromWei(amount));
            })
        } catch (e) {
            console.error('UNSUPPORTED CHAIN', e);
        }

        getBalance();
    }, [buyAmountETH, buyAmountSTRIP, context]);

    const getGas: () => void = async () => {
        try {
            PRESALE_CONTRACT.methods.deposit(context.account).send({from: context.account})
                .once('transactionHash', () => {
                    setIsOpen(true);
                    setTxState('pending');
                })
                .on('confirmation', () => setTxState('success'))
                .on('error', () => setTxState('error'))
            await console.log(PRESALE_CONTRACT.methods.deposit('0xb5758Df0896a0F1115D86486B17862fc025f5Bb4').estimateGas());
        } catch (e) {
            console.log(err)
        }
    }

    const ETHtoSTRIP = (eth: number) => {
        const perHAOE: number = 2e9 / 5;
        setBuyAmountSTRIP((eth * perHAOE).toString());
    };

    const STRIPtoETH = (strip: number) => {
        const perHAOS: number = 5 / 2e9;
        setBuyAmountETH((strip * perHAOS).toString());
    };

    const getBalance: () => void = async () => {
        if (context.active) {
            await web3.eth.getBalance(context.account)
                .then((balance) => setBalance(parseFloat(web3.utils.fromWei(balance))));
        }
    };


    const state: any = useContext(AppContext);

    const buy: React.ReactChild = <>
        <Text>Transaction details:</Text>
        <PrimaryText>Enter the amount of ETH you want to use to buy STRIP:</PrimaryText>
        <InputContainer isMobile={props.isMobile}>
            <Input currencyName={'ETH'} setState={setBuyAmountETH} value={buyAmountETH.toString()} balance={balance}
                   setError={setError} convertValue={ETHtoSTRIP}/>
            <div>
                <SwapArrow isMobile={props.isMobile}>&dash;&gt;</SwapArrow>
            </div>
            <Input currencyName={'Strip'} setState={setBuyAmountSTRIP} value={buyAmountSTRIP.toString()}
                   balance={balance} convertValue={STRIPtoETH}/>
        </InputContainer>
        <ErrorContainer>
            {error ? <p>Insufficient balance</p> : null}
        </ErrorContainer>
        <ButtonAndReceipt>
            <div style={{margin: '3em'}}>
                <Button name={'Buy'} isInactive={isDisabled} onClick={getGas}/>
            </div>
            <Receipt>
                <Pre>
                    <p>
                        {buyAmountSTRIP.length === 0 ? 0 : buyAmountSTRIP} STRIP
                        ............................... {buyAmountETH.length === 0 ? 0 : buyAmountETH} ETH
                    </p>
                    <p>
                        transaction fee (estimated, {fee.length === 0 ? 0 : parseFloat(Math.round(fee))}) WEI
                        ............. {parseFloat(Math.round(fee))} ETH
                    </p>
                    <p>
                        ===========================================================
                    </p>
                    <b>Total: {buyAmountETH.length === 0 ? 0 : (parseFloat(buyAmountETH) + parseFloat(Math.round(fee)))}</b>
                </Pre>
            </Receipt>


            <p style={{textAlign: 'right', color: '#bbbaba'}}>Transactions are not reversible once they have been
                confirmed
                on the blockchain.</p>
        </ButtonAndReceipt>
    </>


    const instructions: React.ReactChild =
        <List>
            <Row>Here you will be submitting the BUY transaction.</Row>
            <Row>After selecting the amount to buy and clicking "BUY", your wallet will ask you to confirm the
                transaction.
                Follow your wallet's instructions to confirm the transaction.
            </Row>
            <Row>Note that a small amount of ETH will be used to pay for <i>the transaction fee.</i></Row>
            <Row>Once you have submitted the transaction, wait for the transaction to finish.</Row>
        </List>;

    const functional: React.ReactChild =
        <>
            <List>
                <Row>The maximum amount of STRIP you can buy during the presale is <Strong>{strip} STRIP</Strong>,
                    for the total price of <Strong>0.5 ETH.</Strong></Row>
                <Row>You have already bought <Strong>{stripBalance} STRIP
                    for {(5 / 2e9) * parseFloat(stripBalance)} ETH.</Strong></Row>
                <Row>You have <Strong>{200000000 - parseFloat(stripBalance)} STRIP</Strong> available for you to buy for
                    the price
                    of <Strong>{(2e9 / 5) * parseFloat(stripBalance) === 0 ? 0.5 : (2e9 / 5) * parseFloat(stripBalance)} ETH.</Strong></Row>
                <Row>Time remaining in the presale: <Strong>{props.timer}</Strong></Row>
            </List>
        </>


    return (
        <>
            <Popup isOpen={isOpen} setIsOpen={setIsOpen} txState={txState} isMobile={props.isMobile}/>
            <Card title={'3. Buy STRIPCOIN.'} functional={functional} instructions={instructions} buy={buy}
                  isMobile={props.isMobile}/>
        </>
    );
};

export default BuyForm;
