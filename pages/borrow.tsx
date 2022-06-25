import {
    Button,
    Container
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Table from "../components/Table";
import Drawer from "../components/Drawer";
import BorrowModal from "../components/BorrowModal";


const Borrow: NextPage = () => {
    return (
        <Drawer parent="borrow">
            <BorrowModal/>
        </Drawer>
    );
};

export default Borrow;
