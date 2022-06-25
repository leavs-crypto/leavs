import {
  Box,
  Button,
  Container
} from "@chakra-ui/react";
import type { NextPage } from "next";
import BorrowModal from "../components/BorrowModal";
import dynamic from "next/dynamic";
import Drawer from "../components/Drawer";
import Table from "../components/Table";

const DynamicWorldCoinButton = dynamic(
  () => import("../components/WorldCoinButton"),
  {
    ssr: false,
  }
);
<DynamicWorldCoinButton />;

const Borrow: NextPage = () => {
  return (
    <Drawer parent="borrow">
      <BorrowModal />
      <Box textAlign="center">This is the borrowing page</Box>
      <DynamicWorldCoinButton />
    </Drawer>
  );
};

export default Borrow;
