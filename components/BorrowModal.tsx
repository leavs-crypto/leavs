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

const BorrowModal = () => {
    // TODO: frh -> form logic with state
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Container centerContent>
                <Button onClick={onOpen}>Borrow</Button>
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
                        onSubmit={(values, actions) => {
                            console.log('values: ', values);
                            actions.setSubmitting(false);
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