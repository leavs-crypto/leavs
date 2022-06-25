import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Drawer from "../components/Drawer";
import Table from "../components/Table";

const Borrow: NextPage = () => {
    return (
        <Drawer parent="lend">
            <Box textAlign="center">Lend page</Box>
            <Table />
        </Drawer>
    );
};

export default Borrow;
