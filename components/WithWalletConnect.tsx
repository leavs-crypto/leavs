import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import React, { createContext } from "react";

// Create a connector
const connector = new WalletConnect({
  bridge: "https://bridge.walletconnect.org", // Required
  qrcodeModal: QRCodeModal,
});
export const AuthContext = createContext({} as WalletConnect);
export const WithWalletConnect = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <AuthContext.Provider value={{ ...connector }}>
      {children}
    </AuthContext.Provider>
  );
};
