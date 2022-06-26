import { Box, Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import Image from "next/image";
import { useEffect } from "react";
const Home: NextPage = () => {
  return (
    <>
      <Box textAlign="center">
        <Image width={1400} height={900} src={require('/assets/images/home.png')} alt="" />
      </Box>
    </>
  );
};

export default Home;
