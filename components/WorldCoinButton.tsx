import { Button } from "@chakra-ui/react";
import dynamic from "next/dynamic";
//@ts-ignore
import worldID from "@worldcoin/id";
import { useLayoutEffect } from "react";
console.log("window", typeof window);
const WorldCoinButton = () => {
  useLayoutEffect(() => {
    if (!worldID.isInitialized()) {
      worldID.init("world-id-container", {
        enable_telemetry: true,
        action_id: "wid_BPZsRJANxct2cZxVRyh80SFG",
        signal: "hi",
      });
      enable();
    }
  }, []);
  async function enable() {
    const result = await worldID.enable();
  }
  return (
    <div>
      <div id="world-id-container" />
    </div>
  );
};
export default WorldCoinButton;
