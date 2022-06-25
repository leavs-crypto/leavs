import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
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
    <>
      <Drawer />
      <Box textAlign="center">This is the borrowing page</Box>
      <DynamicWorldCoinButton />
      <Table />
    </>
  );
};

export default Borrow;
