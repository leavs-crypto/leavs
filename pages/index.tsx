import { Box, Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect } from "react";
const DynamicWorldCoinButton = dynamic(
  () => import("../components/WorldCoinButton"),
  {
    ssr: false,
  }
);
const Home: NextPage = () => {
  return (
    <>
      <Box textAlign="center">Put landing page picture here</Box>
      <DynamicWorldCoinButton />
    </>
  );
};

export default Home;
