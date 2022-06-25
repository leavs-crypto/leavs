import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {
    Button,
    Grid,
    GridItem
} from "@chakra-ui/react";
const App: NextPage = () => {
    return (
        <>
            <Head>
                <title>Leavs</title>
                <meta name="description" content="Leavs app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Grid templateColumns='repeat(4, 1fr)' gap={4} h="200px" >
                <GridItem colSpan={3} bg='papayawhip' />
                <GridItem colSpan={1} bg='papayawhip'>
                    <Button
                        borderRadius="16px"
                        mr="24px"
                        fontSize="14px"
                        lineHeight="17px"
                        width="110px"
                        variant="ghost"
                        textAlign="center"
                    >
                        Connect Wallet
                    </Button>
                </GridItem>

            </Grid>
        </>
    )
}

export default App;
