import { Box, Button, Link, useColorMode } from "@chakra-ui/react";
import { enableCustomer } from "@tatumio/tatum";
import { useRouter } from "next/router";
import { useContext } from "react";
import Logo from "../assets/logo";
import { truncateEthAddress } from "../util/helper";
import { AuthContext } from "./WithWalletConnect";

const Header = () => {
  const router = useRouter();
  const provider = useContext(AuthContext);
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
                colorScheme="green"
                variant="solid"
                onClick={() => {
                  router.push("app");
                }}
              >
                Enter App
              </Button>
            ) : !provider.connected ? (
              <Button
                fontSize="14px"
                lineHeight="17px"
                colorScheme="green"
                variant="solid"
                onClick={() => {
                  provider.enable().then(() => router.push(router.route));
                }}
              >
                Connect Wallet
              </Button>
            ) : (
              <Button
                fontSize="14px"
                lineHeight="17px"
                colorScheme="green"
                variant="solid"
                onClick={() => {
                  provider.disconnect().then(() => router.push(router.route));
                }}
              >
                {truncateEthAddress(provider.accounts[0])}
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
