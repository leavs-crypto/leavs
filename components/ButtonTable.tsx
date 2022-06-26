import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Grid,
    GridItem,
    Button
} from '@chakra-ui/react';
import { useState, useContext, useLayoutEffect } from "react";

const ButtonTable = (props: object) => {
    const [button, setButton] = useState();
    const { action } = props;

    return (
        <Button
            colorScheme='blue'
            mr={3}
            width="100px"
            onClick={() => {
                console.log(action);
                switch (action) {
                    case 'Sell':
                        setButton('On Sale');
                        break;
                    case 'On Sale':
                        setButton('Sell');
                        break;
                    case 'Invest':
                        setButton('Buy');
                        break;
                    case 'Buy':
                        setButton('Invest');
                        break;
                }
            }}
        >
            {button ? button : action}
        </Button>

    )
}

export default ButtonTable;