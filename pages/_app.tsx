import "../styles/globals.css";
import "../styles/font.css";
import "../styles/color.css";
import "read-more-less-react/dist/index.css";

import {ExternalProvider, Web3Provider, JsonRpcFetchFunc} from "@ethersproject/providers";
import {Web3ReactProvider} from "@web3-react/core";
import {Head} from "next/document";

function getLibrary(provider: ExternalProvider | JsonRpcFetchFunc) {
    const library = new Web3Provider(provider);
    library.pollingInterval = 12000;
    return library
}

function MyApp({Component, pageProps}) {
    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <Component {...pageProps} />
        </Web3ReactProvider>
    );
}

export default MyApp;
