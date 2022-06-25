import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Drawer from "../components/Drawer";
import Table from "../components/Table";


const Borrow: NextPage = () => {
    return (
        <>
            <Drawer />
            <Box textAlign="center">This is the borrowing page</Box>
            <Table />
        </>
    );
};

export default Borrow;
