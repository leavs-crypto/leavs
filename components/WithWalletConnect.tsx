import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import React, { createContext } from "react";

// Create a connector
const connector = new WalletConnect({
  bridge: "https://bridge.walletconnect.org", // Required
  qrcodeModal: QRCodeModal,
});
const provider = new WalletConnectProvider({
  infuraId: "d62fb642f5ad46ec98639ad9d23de080", // Required
});
export const AuthContext = createContext({} as WalletConnectProvider);
export const WithWalletConnect = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <AuthContext.Provider value={provider}>{children}</AuthContext.Provider>
  );
};
