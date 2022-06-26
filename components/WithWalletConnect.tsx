import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export const AuthContext = createContext(
  {} as WalletConnectProvider
  // setProvider: Dispatch<SetStateAction<WalletConnectProvider>>;
  // }
);
const provider = new WalletConnectProvider({
  infuraId: "d62fb642f5ad46ec98639ad9d23de080",
});


export const WithWalletConnect = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // const [provider, setProvider] = useState({} as WalletConnectProvider);
  // useEffect(() => setProvider(), []);
  return (
    <AuthContext.Provider value={provider}>{children}</AuthContext.Provider>
  );
};
