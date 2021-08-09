// @ts-nocheck
import React, {useContext, useEffect, useState} from "react";
import {Web3Provider} from '@ethersproject/providers';
import {useWeb3React} from '@web3-react/core';
import {presaleABI} from "../../contracts/abis";
import {presaleContract} from "../../contracts/constants";
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
    ErrorContainer
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
    const [error, setError] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(true);

    useEffect(() => {
        if (buyAmountSTRIP.length === 0 || buyAmountETH.length === 0 || error) setIsDisabled(true);
        else setIsDisabled(false);
        getBalance();
    }, [buyAmountETH, buyAmountSTRIP, active]);


    const web3 = new Web3(Web3.givenProvider);

    const PRESALE_CONTRACT = new web3.eth.Contract(presaleABI, presaleContract);

    console.log(PRESALE_CONTRACT)

    const swap: () => void = () => PRESALE_CONTRACT.methods.recipients(context.account).call().then((r) => console.log(r));

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
            <SwapArrow isMobile={props.isMobile}>&dash;&gt;</SwapArrow>
            <Input currencyName={'Strip'} setState={setBuyAmountSTRIP} value={buyAmountSTRIP.toString()}
                   balance={balance} convertValue={STRIPtoETH}/>
        </InputContainer>
        <ErrorContainer>
            {error ? <p>Insufficient balance</p> : null}
        </ErrorContainer>
        <ButtonAndReceipt>
            <Button name={'Buy'} isInactive={isDisabled} onClick={swap}/>
        </ButtonAndReceipt>
        <p style={{textAlign: 'right', color: '#bbbaba'}}>Transactions are not reversible once they have been confirmed on the blockchain.</p>
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
                <Row>The maximum amount of STRIP you can buy during the presale is <Strong>200,000,000 STRIP</Strong>,
                    for the total price of <Strong>0.5 ETH.</Strong></Row>
                <Row>You have already bought <Strong>10,000,000 STRIP for 0.025 ETH.</Strong></Row>
                <Row>You have <Strong>190,000,000 STRIP</Strong> available for you to buy for the price of <Strong>0.475
                    ETH.</Strong></Row>
                <Row>Time remaining in the presale: <Strong>17d 5h 9m 17s</Strong></Row>
            </List>
        </>


    return (
        <>
            <Popup isOpen={isOpen} setIsOpen={setIsOpen} txState={'pending'} isMobile={props.isMobile}/>
            <Card title={'3. Buy STRIPCOIN.'} functional={functional} instructions={instructions} buy={buy} isMobile={props.isMobile}/>
        </>
    );
};

export default BuyForm;
