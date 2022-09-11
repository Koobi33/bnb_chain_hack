import { useWeb3React } from "@web3-react/core";
import {
  CONTRACT_ABI,
  CONTRACT_ADDRESS,
  injected,
  NODE_URL,
  PRIVATE_KEY,
} from "../../constants";
import { useEffect, useMemo, useState } from "react";
import { ethers } from "ethers";
import Web3 from "web3";

function useContract(contract) {
  useEffect(() => {
    if (contract) {
      const { active, account, library, connector, activate, deactivate } =
        useWeb3React();
      contract = contract.connect(library.givenProvider);

      const signer = library.givenProvider.getSigner();
      if (signer !== undefined) contract = contract.connect(signer);
    }
  }, [contract]);

  return contract;
}

export const ConnectButton = function ({ className }) {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  const [provider, setProvider] = useState();
  useEffect(() => {
    if (connector) {
      connector.activate().then((res) => {
        connector.getProvider().then((res) => {
          console.log(res.id);
        });
        setProvider(res.provider);
      });
    }
  }, [connector]);
  async function connect() {
    try {
      await activate(injected);
      localStorage.setItem("isWalletConnected", true);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
      localStorage.setItem("isWalletConnected", false);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function handle() {
    if (active) {
      await disconnect();
    } else {
      await connect();
    }
  }
  async function test() {
    let web3 = new Web3(provider);

    if (connector && library && provider) {
      await activate(connector);
      // let { provider } = await connector.activate();
      // signer
      // let web3 = new Web3(provider);
      console.log(provider);
      const LearnContract = new web3.eth.Contract(
        CONTRACT_ABI,
        CONTRACT_ADDRESS,
        provider
      );

      // let tx = {
      //   to: CONTRACT_ADDRESS,
      //   from: account,
      //   value: ethers.utils.parseEther("0.05"),
      //   gasLimit: 8000000,
      //   gasPrice: "0x07f9acf02",
      // };
      // let signedTx = await library.eth.signTransaction(tx);
      // console.log(signedTx);
      // let sentTx = await library.eth.sendTransaction(signedTx);
      // console.log(sentTx);

      await LearnContract.methods.registrationOnEducationPlatform().send({
        from: account,
        gasLimit: 8000000,
      });
    }
  }
  useEffect(() => {
    test();
  }, [connector, library, provider]);

  useEffect(() => {
    injected.isAuthorized().then((isAuthorized) => {
      if (isAuthorized && !active) {
        activate(injected);
      }
    });
  }, [activate, active]);
  return (
    <button className={className} onClick={handle}>
      {!active ? "Connect wallet" : account}
    </button>
  );
};
