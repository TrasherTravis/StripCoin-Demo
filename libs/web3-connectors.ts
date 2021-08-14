// import { Connectors } from 'web3-react'
// const { NetworkOnlyConnector } = Connectors
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { InjectedConnector } from '@web3-react/injected-connector'
import { AbstractConnector } from '@web3-react/abstract-connector'
 
export const injectedConnector = new InjectedConnector({
});

export const walletConnector = new WalletConnectConnector({
  rpc: {1: '...'},
  qrcode: true,
  pollingInterval: 12000
})

export const resetWalletConnector = (connector: AbstractConnector) => {
  if (
    connector &&
    connector instanceof WalletConnectConnector &&
    connector.walletConnectProvider?.wc?.uri
  ) {
    connector.walletConnectProvider = undefined
  }
}
 
// const Infura = new NetworkOnlyConnector({
//   providerURL: 'https://mainnet.infura.io/v3/...'
// })
 
// const connectors = { injectedConnector, walletConnector, Infura }

// export default connectors