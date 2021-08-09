import React from 'react';
import {Container, InnerBlock, Header, Content, PopupCont, Close, Strong, Image, TransactionHASH} from "./styles";

declare type Props = {
    isOpen: boolean;
    setIsOpen: (b: boolean) => void;
    txState: string;
    isMobile: boolean;
};


const Status: React.FC<{ txState: string, isMobile: boolean }> = ({txState, isMobile}) => {
    switch (txState) {
        case 'pending':
            return <>
                <h3>Status: <Strong>Pending</Strong> ... </h3>
                <Image isMobile={isMobile} src="images/loading.gif"/>
                <p>Please wait for the transaction to get confirmed.</p>
            </>;
        case 'success':
            return <>
                <h3>Status: <Strong>Confirmed!</Strong></h3><Image src="images/check.png" isMobile={isMobile}/>
                <p>Your transaction has been successfully confirmed!</p>
            </>;
        case 'error':
            return <>
                <h3>Status: <Strong>FAILED.</Strong></h3>
                <Image src="iages/fail.png" isMobile={isMobile}/>

                <p>Your transaction has failed.</p>
            </>
    }
};


const Popup: React.FC<Props> = ({isOpen, setIsOpen, txState, isMobile}) => {
    return (
        <>
            {isOpen ?
                <Container>
                    <PopupCont isMobile={isMobile}>
                        <InnerBlock>
                            <Close href="#" onClick={() => setIsOpen(false)}>X</Close>
                            <Header>Transaction sent!</Header>
                            <Content>
                                You have submitted a <Strong>BUY</Strong> transaction to the STRIPCOIN Presale
                                Contract on
                                the
                                Ethereum blockchain.<br/>
                                <Status txState={txState} isMobile={isMobile}/>
                                <p>You can click here to see the details of your transaction on Etherscan:</p>
                                <TransactionHASH isMobile={isMobile}
                                                 href={'https://etherscan.io/tx/0xb65bcbb85c1633b0ab4e4886c3cd8eeaeb63edbb39cacdb9223fdcf4454fd2c7'}>0xb65bcbb85c1633b0ab4e4886c3cd8eeaeb63edbb39cacdb9223fdcf4454fd2c7</TransactionHASH>
                            </Content>
                        </InnerBlock>
                    </PopupCont>
                </Container> : null
            }
        </>
    )
};

export default Popup;