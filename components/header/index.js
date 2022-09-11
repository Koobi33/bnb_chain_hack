import React from "react";
// import { ConnectButton } from "@rainbow-me/rainbowkit";

import styles from "./header.module.scss";

import { Layout } from "antd";
import { FunnelPlotOutlined } from "@ant-design/icons";
import { ConnectButton } from "../connect-button/connect-button";
import { useWeb3React } from "@web3-react/core";
const { Header: HeaderAntd } = Layout;

export const Header = () => {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();
  return (
    <HeaderAntd
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#212121",
        padding: "0 5px",
      }}
    >
      <div>
        <a href="/">
          <FunnelPlotOutlined
            style={{
              color: "#9D59E1",
              fontSize: "25px",
              marginRight: "30px",
            }}
          />
        </a>

        {active && (
          <a className={styles.navLink} href="/profile">
            Profile
          </a>
        )}
      </div>
      <div className={styles.offSide}>
        <ConnectButton className={styles.button} />
      </div>
    </HeaderAntd>
  );
};
