import React, {useEffect} from 'react'
import Modal from 'react-modal';
import {useWeb3React} from '@web3-react/core';
import {Web3Provider} from '@ethersproject/providers';
import {injectedConnector, resetWalletConnector, walletConnector} from 'libs/web3-connectors';
import {change} from "../libs/changeNet";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: "700px",
        background: 'white',
        borderRadius: '12px',
        padding: '0'
    }
};

const wallets = [
    {
        'name': 'MetaMask',
        'icon': '/icons/mt.svg',
        'desc': 'Connect to your MetaMask Wallet',
        'id': 'mt'
    },
    {
        'name': 'WalletConnect',
        'icon': '/icons/walletconnect.svg',
        'desc': 'Scan with WalletConnect to connect',
        'id': 'wc'
    }
];

const {forwardRef, useImperativeHandle} = React;
const Wallets = forwardRef((props, ref) => {
    const context = useWeb3React<Web3Provider>()
    const {account, activate} = context

    const [modalIsOpen, setIsOpen] = React.useState(false);
    useImperativeHandle(ref, () => ({
        openModal: () => {
            setIsOpen(true)
        }
    }));

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        if (account) {
            closeModal();
        }
    }, [account]);

    // connect injected Metamask and walletConnect
    const connectAccount = (id: any) => {
        change();
        if (id == 'mt') {
            activate(injectedConnector);
        }
        if (id == 'wc') {
            resetWalletConnector(walletConnector);
            activate(walletConnector);
        }
    }
    return (
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Modal"
            ariaHideApp={false}
        >
            <div className="wallet-modal">
                <div className="wallet-body">
                    {wallets.map((wallet, index) => {
                        return (
                            <div className="wallet-wrapper text-center" key={index}
                                 onClick={() => connectAccount(wallet.id)}>
                                <div className="wallet-logo">
                                    <img src={wallet.icon} className="meta"/>
                                </div>
                                <div className="wallet-name">{wallet.name}</div>
                                <div className="wallet-desc">{wallet.desc}</div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </Modal>
    )
})

export default Wallets
