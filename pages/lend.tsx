import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Drawer from "../components/Drawer";
import Table from "../components/Table";
import data from "../util/lend.json";

const Borrow: NextPage = () => {
    return (
        <Drawer parent="lend">
            <Table data={data}/>
        </Drawer>
    );
};

export default Borrow;
