import React from 'react';
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
    Link
} from './styles';
import {Head} from "next/document";

const Presale: React.FC<{ isMobile?: boolean }> = ({isMobile}) => {


    return (
        <Container isMobile={isMobile}>
            <Text>
                Welcome to the
                <Strong> STRIPCOIN Presale.</Strong>
                <br/>
                A presale is an opportunity to be among the first to secure a share of the token supply before it's made
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
                            <Value>500,000,000,000 STRIP</Value>
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
                            <Value>17d 10h 19m 7s</Value>
                        </Row>
                    </Body>
                </Table>
                <p>
                    <Strong>Vesting</Strong>:
                    <br/>
                    When you buy STRIP tokens in this presale, the tokens will be locked in a
                    <Strong> vesting contract</Strong>.
                    <br/>
                    You can only transfer or sell your tokens once they have been unlocked by the
                    <Strong> vesting schedule</Strong>.
                    <br/>
                    The schedule is as follows:
                    Starting from the ending of the presale, all tokens remain locked for one month,
                    <br/>
                    then 20% will be
                    gradually unlocked per month.
                    Total vesting period is thus 6 months.
                </p>
            </Content>
            <Separator/>
            <Tertiary>
                There are <i><Strong> 3 steps</Strong></i> you must follow to buy STRIPCOIN in this presale.
                <br/>
                You can see the steps below. Please read the instructions carefully.
                <br/>
                If at any point you have questions, feel free to join our <Link href={'#'}>...Telegram Chat...</Link> for support!
            </Tertiary>

        </Container>
    )
};

export default Presale;