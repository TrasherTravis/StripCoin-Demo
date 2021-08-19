import React from 'react';
import {Container, InnerBlock, Header, Content, PopupCont, Close, Strong, Image, TransactionHASH} from "./styles";

interface Props {
    isOpen: boolean;
    setIsOpen: (b: boolean) => void;
    txState: string;
    isMobile: boolean;
    hash: string;
};


const Status = (props) => {
    switch (props.txState) {
        case 'pending':
            return <>
                <h3>Status: <Strong>Pending</Strong> ... </h3>
                <Image isMobile={props.isMobile} src="images/loading.gif"/>
                <p>Please wait for the transaction to get confirmed.</p>
            </>;
        case 'success':
            return <>
                <h3>Status: <Strong>Confirmed!</Strong></h3><Image src="images/check.png" isMobile={props.isMobile}/>
                <p>Your transaction has been successfully confirmed!</p>
            </>;
        case 'error':
            return <>
                <h3>Status: <Strong>FAILED.</Strong></h3>
                <Image src="iages/fail.png" isMobile={props.isMobile}/>
                <p>Your transaction has failed.</p>
            </>
    }
};


const Popup: React.FC<Props> = ({isOpen, setIsOpen, txState, isMobile, hash}) => {
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
                                                 href={`https://etherscan.io/tx/${hash}`}>{hash}</TransactionHASH>
                            </Content>
                        </InnerBlock>
                    </PopupCont>
                </Container> : null
            }
        </>
    )
};

export default Popup;