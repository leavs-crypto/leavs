import {
  Box,
  Button,
  Link,
  useColorMode,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { enableCustomer } from "@tatumio/tatum";
import { useRouter } from "next/router";
import { useContext } from "react";
import Logo from "../assets/logo";
import { truncateEthAddress } from "../util/helper";
import { AuthContext } from "./WithWalletConnect";

const Header = () => {
  const router = useRouter();
  const provider = useContext(AuthContext);
  // provider.onConnect &&
  //   provider.onConnect(() => {
  //     setProvider(provider);
  //   });
  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      gap={4}
      width="100vw"
      padding="16px 0"
      borderBottomWidth="1px"
    >
      <GridItem colSpan={1} />
      <GridItem colSpan={2}>
        <Box width="150px">
          <Link onClick={() => router.push("/")}>
            <Logo />
          </Link>
        </Box>
      </GridItem>
      <GridItem colSpan={6} />
      <GridItem colSpan={2}>
        <Box display="flex" textAlign="right">
          <Box width="110px">
            {router.route == "/" ? (
              <Button
                fontSize="14px"
                lineHeight="17px"
                colorScheme="green"
                variant="solid"
                onClick={() => {
                  router.push("/borrow");
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
                  provider &&
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
      </GridItem>
      <GridItem colSpan={1} />
    </Grid>
  );
};

export default Header;
