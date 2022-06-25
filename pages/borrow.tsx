import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Container,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Table from "../components/Table";
import Drawer from "../components/Drawer";


const Borrow: NextPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Drawer parent="borrow">
            <Container centerContent>
                <Button onClick={onOpen}>Borrow</Button>
            </Container>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Borrow your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>First name</FormLabel>
                            <Input placeholder='First name' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Last name</FormLabel>
                            <Input placeholder='Last name' />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Drawer>
    );
};

export default Borrow;
