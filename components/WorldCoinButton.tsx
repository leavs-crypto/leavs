import worldID from "@worldcoin/id";
import { useContext, useEffect, useLayoutEffect } from "react";
import { AuthContext } from "./WithWalletConnect";
const WorldCoinButton = ({
  onAuth,
}: {
  onAuth: (nullifier_hash: string) => void;
}) => {
  const provider = useContext(AuthContext);
  // console.log("provider", provider.connected);

  useEffect(() => {
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
    } else {
      enable();
    }
  });
  async function enable() {
    const result = await worldID.enable();
    console.log("result", result);
    onAuth(result.nullifier_hash);
    return;
  }
  return (
    <div>
      <div id="world-id-container" />
    </div>
  );
};
export default WorldCoinButton;
