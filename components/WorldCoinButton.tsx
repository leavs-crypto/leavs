import { Button } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import worldID from "@worldcoin/id";
import { useContext, useLayoutEffect } from "react";
import { AuthContext } from "./WithWalletConnect";
const WorldCoinButton = () => {
  const provider = useContext(AuthContext);
  useLayoutEffect(() => {
    if (!worldID.isInitialized()) {
      if (!provider.accounts[0]) {
        throw ReferenceError("User has to have wallet connected");
      }
      worldID.init("world-id-container", {
        enable_telemetry: true,
        action_id: "AssociateWalletAddress",
        signal: provider.accounts[0],
        signal_description: "Connect wallet",
      });
      enable();
    }
  }, []);
  async function enable() {
    const result = await worldID.enable();
    console.log("result");
  }
  return (
    <div>
      <div id="world-id-container" />
    </div>
  );
};
export default WorldCoinButton;
