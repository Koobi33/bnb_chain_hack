import "./app.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import { NODE_URL } from "../constants";

function getLibrary(provider) {
  return new Web3(NODE_URL);
}

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}

export default MyApp;
