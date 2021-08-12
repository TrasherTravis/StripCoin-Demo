//@ts-nocheck


export const change: () => void = () => {
    if (window !== undefined) {
        window.ethereum.enable();
        console.log(window.ethereum.chainId)
        switch(window.ethereum.chainId){
            case '0x1':
                return;
            case '0x4':
                return;
            default:
                window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{chainId: '0x1'}],
                });
                break;
        }
    }
};

