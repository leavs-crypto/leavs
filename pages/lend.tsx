import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Drawer from "../components/Drawer";

const Borrow: NextPage = () => {
    return (
        <>
            <Drawer />

            <Box textAlign="center">Lend page</Box>
        </>
    );
};

export default Borrow;
