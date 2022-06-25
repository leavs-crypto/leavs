import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {
    Button,
    Grid,
    GridItem
} from "@chakra-ui/react";
import Drawer from "../components/Drawer";

const App: NextPage = () => {
    return (
        <>
            <Drawer />
            app page
        </>
    )
}

export default App;