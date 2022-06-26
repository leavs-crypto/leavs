import { Box, Button, Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import BorrowModal from "../components/BorrowModal";
import dynamic from "next/dynamic";
import Drawer from "../components/Drawer";
import Table from "../components/Table";
import { useContext } from "react";
import { AuthContext } from "../components/WithWalletConnect";

const Borrow: NextPage = () => {
  const provider = useContext(AuthContext);
  return (
    <Drawer parent="borrow">
      <BorrowModal />
      <Box textAlign="center">This is the borrowing page</Box>
      {/* {provider.accounts[0] && <DynamicWorldCoinButton />} */}
    </Drawer>
  );
};

export default Borrow;
