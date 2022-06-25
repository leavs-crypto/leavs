import {
    Button,
    Grid,
    GridItem,
    Link,
    LinkBox
} from '@chakra-ui/react';
import React from 'react';
import { useRouter } from "next/router";
import { useState } from "react";
import Logo from "../assets/logo";

const DrawerComponent = ({ parent, children }: { parent: string, children: ReactNode }) => {
    const router = useRouter();
    const [pathname] = useState(typeof window !== "undefined" && window.location.pathname);

    return (
        <Grid templateColumns='repeat(12, 1fr)' gap={4} h="100vh">
            <GridItem colSpan={1}/>
            <GridItem colSpan={2} borderRightWidth="1px" fontSize="20px">
                <LinkBox padding="16px 0px" marginTop="16px" >
                    <Link
                        fontWeight={parent === "borrow" ? "bold" : "400"}
                        onClick={() => router.push("/borrow")}
                    >
                        Borrow
                    </Link>
                </LinkBox>
                <LinkBox padding="16px 0px">
                    <Link
                        fontWeight={parent === "lend" ? "bold" : "400"}
                        onClick={() => router.push("/lend")}
                    >
                        Lend
                    </Link>
                </LinkBox>
                <LinkBox padding="16px 0px">
                    <Link
                        fontWeight={parent === "profile" ? "bold" : "400"}
                        onClick={() => router.push("/profile")}
                    >
                        My profile
                    </Link>
                </LinkBox>
            </GridItem>
            <GridItem colSpan={9}>{children}</GridItem>
        </Grid>
    )
}

export default DrawerComponent;
