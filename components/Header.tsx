import { Box, Button, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext } from "react";
import Logo from "../assets/logo";
import { truncateEthAddress } from "../util/helper";
import { AuthContext } from "./WithWalletConnect";

const Header = () => {
  const router = useRouter();
  const { connected, accounts } = useContext(AuthContext);
  console.log("router", router.route);
  return (
    <>
      <Box
        display="flex"
        justifyContent={"space-between"}
        px="200px"
        py="20px"
        borderBottomWidth="1px"
      >
        <Box width="150px">
          <Link onClick={() => router.push("/")}>
            <Logo />
          </Link>
        </Box>
        <Box display="flex" textAlign="right">
          <Box width="110px">
            {router.route == "/" ? (
              <Button
                fontSize="14px"
                lineHeight="17px"
                variant="ghost"
                onClick={() => {
                  router.push("overview");
                }}
              >
                Enter App
              </Button>
            ) : !connected ? (
              <Button
                fontSize="14px"
                lineHeight="17px"
                variant="ghost"
                onClick={() => {
                  router.push("overview");
                }}
              >
                Connnect Wallet
              </Button>
            ) : (
              <Button
                fontSize="14px"
                lineHeight="17px"
                variant="ghost"
                onClick={() => {
                  router.push("overview");
                }}
              >
                {truncateEthAddress(accounts[0])}
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
