import {
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
import { Field, Form, Formik } from "formik";
import { createLoanContract } from "../util/loans";
import { AuthContext } from "./WithWalletConnect";
import { useContext, useLayoutEffect } from "react";
import { Console } from "console";


const BorrowModal = ({worldCoinID}) => {
    // TODO: frh -> form logic with state
    const { isOpen, onOpen, onClose } = useDisclosure();
    const provider = useContext(AuthContext);

    return (
        <>
            <Container centerContent margin="32px auto">
                Borrow peer to peer at the best rates!
                <Button colorScheme='blue' onClick={onOpen}>Borrow</Button>
            </Container>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Specify your loan conditions</ModalHeader>
                    <ModalCloseButton />
                    <Formik
                        initialValues={{
                            loanAmount: null,
                            loanTerm: null,
                            APR: null
                        }}
                        onSubmit={async (values, actions) => {
                            console.log('values: ', values);
                            actions.setSubmitting(false);


                            try {
                                console.log('HIIIIII')
                                const loan = await createLoanContract(provider, worldCoinID, values.loanAmount, values.loanTerm, values.APR);
                                console.log('Results:  ', loan)
                            } catch (error) {
                                console.log('Error', error)

                                throw Error(error);
                            }
                        }}
                    >
                        {(props) => (
                            <Form>
                                <ModalBody pb={6}>

                                    <Field name="loanAmount">
                                        {({ field, form }) => (
                                            <FormControl>
                                                <FormLabel>Loan amount</FormLabel>
                                                <Input
                                                    {...field}
                                                    placeholder='Loan amount'
                                                    type='number'
                                                />
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Field name="loanTerm">
                                        {({ field, form }) => (
                                            <FormControl mt={4}>
                                                <FormLabel>Loan term in days</FormLabel>
                                                <Input
                                                    {...field}
                                                    placeholder='Loan term in days'
                                                    type='number'
                                                />
                                            </FormControl>
                                        )}
                                    </Field>


                                    {/* TODO: frh-> show percentage on input */}
                                    <Field name="APR">
                                        {({ field, form }) => (
                                            <FormControl>
                                                <FormLabel>APR</FormLabel>
                                                <Input
                                                    {...field}
                                                    placeholder='APR'
                                                    type='number'
                                                />
                                            </FormControl>
                                        )}
                                    </Field>
                                </ModalBody>

                                <ModalFooter>
                                    <Button
                                        colorScheme='blue'
                                        mr={3}
                                        type="submit"
                                        isLoading={props.isSubmitting}
                                    // disabled={loading}
                                    >
                                        Save
                                    </Button>
                                    <Button onClick={onClose}>Cancel</Button>
                                </ModalFooter>
                            </Form>
                        )}
                    </Formik>
                </ModalContent>
            </Modal>
        </>
    )
}

export default BorrowModal;