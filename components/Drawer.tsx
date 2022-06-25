import {
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    Link,
    LinkBox
} from '@chakra-ui/react';
import React from 'react';
import { useRouter } from "next/router";
import { useState } from "react";

const DrawerComponent = () => {
    const router = useRouter();
    const [pathname] = useState(typeof window !== "undefined" && window.location.pathname);

    return (
        <>
            <Drawer placement={'left'} isOpen={true}>
                <DrawerContent>
                    <DrawerBody>
                        <LinkBox padding="16px 8px" marginTop="48px">
                            <Link
                                fontWeight={pathname === "/borrow" ? "bold" : "400"}
                                onClick={() => router.push("/borrow")}
                            >
                                Borrow
                            </Link>
                        </LinkBox>
                        <LinkBox padding="16px 8px">
                            <Link
                                fontWeight={pathname === "/lend" ? "bold" : "400"}
                                onClick={() => router.push("/lend")}
                            >
                                Lend
                            </Link>
                        </LinkBox>
                        <LinkBox padding="16px 8px">
                            <Link
                                fontWeight={pathname === "/active-loans" ? "bold" : "400"}
                                onClick={() => router.push("/active-loans")}
                            >
                                Active loans
                            </Link>
                        </LinkBox>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default DrawerComponent;
