//@ts-nocheck
import React, {useEffect, useState} from 'react';
import {
    Container,
    Text,
    Strong,
    Secondary,
    Table,
    Row,
    Key,
    Value,
    Body,
    Content,
    Separator,
    Tertiary,
    Link,
    Mono, Img
} from './styles';
import {Head} from "next/document";
import {presaleABI, tokenABI} from "../../contracts/abis";
import {presaleContract, STRIPCOIN} from "../../contracts/constants";
import GRAPH from '../../public/images/vesting.png'
import Web3 from "web3";

const Presale: React.FC<{ isMobile?: boolean; timer: string }> = ({isMobile, timer}) => {
    const [amount, setAmount] = useState<string>('');
    const [seconds, setSeconds] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);
    const [days, setDays] = useState<number>(0);
    const web3 = new Web3(Web3.givenProvider);
    const PRESALE_CONTRACT = new web3.eth.Contract(presaleABI, presaleContract);
    const Token = new web3.eth.Contract(tokenABI, STRIPCOIN);

    useEffect(() => {
        /*        const days: number = 86400000/ (1000 * 60 * 60 * 24)
                const absoluteDays: number = Math.floor(days)

                const hours: number = (days - absoluteDays) * (1000 * 60 * 60);
                const absoluteHours: number = Math.floor(hours);

                const minutes: number = (hours - absoluteHours) * 60;
                const absoluteMinutes: number = Math.floor(minutes);

                const seconds: number = (minutes - absoluteMinutes) * 60;
                const absoluteSeconds: number = Math.floor(seconds);


                setDays(absoluteDays);
                setHours(absoluteHours);
                setMinutes(absoluteMinutes);
                setSeconds(absoluteSeconds);

                timer();*/


        try {
            Token.methods.totalSupply().call().then((amount) => {
                setAmount(web3.utils.fromWei(amount));
            })
        } catch (e) {
            console.error('UNSUPPORTED CHAIN', e)
        }

    }, []);

    return (
        <Container isMobile={isMobile}>
            <Text>
                Welcome to the
                <Strong> STRIPCOIN Presale.</Strong>
                <br/>
                A presale is an opportunity to be among the first to secure a share of the token supply before it's
                made
                publicly tradeable.
            </Text>
            <Content>
                <Secondary>
                    STRIPCOIN Presale details in numbers:
                </Secondary>
                <Table>
                    <Body>
                        <Row>
                            <Key>Total supply:</Key>
                            <Value>{(parseFloat(amount)).toLocaleString('en-US')} STRIP</Value>
                        </Row>
                        <Row>
                            <Key>Presale allocation:</Key>
                            <Value>120,000,000,000 STRIP</Value>
                        </Row>
                        <Row>
                            <Key>Maximum per wallet:</Key>
                            <Value>200,000,000 STRIP</Value>
                        </Row>
                        <Row>
                            <Key>Price per 200M STRIP:</Key>
                            <Value>0.5 ETH</Value>
                        </Row>
                        <Row>
                            <Key>Presale open:</Key>
                            <Value>August 10th ‐ August 24th</Value>
                        </Row>
                        <Row>
                            <Key>Time remaining:</Key>
                            <Value>{timer}</Value>
                        </Row>
                    </Body>
                </Table>
                <p>
                    <Strong>Vesting</Strong>:
                    <Img src={GRAPH} alt={'graph'} isMobile={isMobile}/>
                    <Mono>
                        The schedule is as follows: Starting from the ending of the presale,<br/>
                        all tokens remain locked
                        for <Strong>45 days</Strong>, then <Strong>20%</Strong> will be gradually unlocked
                        every <Strong>30 days</Strong><br/>
                        Total vesting period is thus <Strong>6 months</Strong> and <Strong>15 days</Strong>, or <Strong>195
                        days</Strong>.
                    </Mono>
                </p>
            </Content>
            <Separator/>
            <Tertiary>
                There are <i><Strong> 3 steps</Strong></i> you must follow to buy STRIPCOIN in this presale.
                <br/>
                You can see the steps below. Please read the instructions carefully.
                <br/>
                If at any point you have questions, feel free to join our <Link href={'#'}>...Telegram
                Chat...</Link> for support!
            </Tertiary>

        </Container>
    )
};

export default Presale;