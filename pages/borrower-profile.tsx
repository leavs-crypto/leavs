import {
    Box, Button, FormControl, FormLabel, FormInput, Input
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import type { NextPage } from "next";
import Drawer from "../components/Drawer";
import { postIPFS } from "../util/tatum";

// TODO: -> fix styles of this form with flex wrap
const BorrowerProfile: NextPage = () => {
    return (
        <Drawer parent="borrower-profile">

            <Formik
                initialValues={{
                    firstName: undefined,
                    lastName: null,
                    age: null,
                    location: null,
                    creditScore: null,
                    monthlyIncome: null,
                    monthlyDebt: null
                }}
                onSubmit={async (values, actions) => {
                    actions.setSubmitting(false);
                    try {
                        const ipfs = await postIPFS(values);
                        console.log('ipfs: ', ipfs);

                    } catch (error) {
                        console.log('error: ', error);
                        
                    }
                }}
            >
                {(props) => (
                    <Form>
                        <Field name="firstName" style={{ flex: 1 }}>
                            {({ field, form }) => (
                                <FormControl mt={4}>
                                    <FormLabel>First Name</FormLabel>
                                    <Input
                                        {...field}
                                        placeholder='First Name'
                                    />
                                </FormControl>
                            )}
                        </Field>

                        <Field name="lastName" style={{ flex: 1 }}>
                            {({ field, form }) => (
                                <FormControl mt={4}>
                                    <FormLabel>Last Name</FormLabel>
                                    <Input
                                        {...field}
                                        placeholder='Last Name'
                                    />
                                </FormControl>
                            )}
                        </Field>

                        <Field name="age">
                            {({ field, form }) => (
                                <FormControl mt={4}>
                                    <FormLabel>Age</FormLabel>
                                    <Input
                                        {...field}
                                        placeholder='Age'
                                        type='number'
                                    />
                                </FormControl>
                            )}
                        </Field>

                        <Field name="location">
                            {({ field, form }) => (
                                <FormControl mt={4}>
                                    <FormLabel>Location</FormLabel>
                                    <Input
                                        {...field}
                                        placeholder='Location'
                                    />
                                </FormControl>
                            )}
                        </Field>


                        <Field name="creditScore">
                            {({ field, form }) => (
                                <FormControl mt={4}>
                                    <FormLabel>Credit score</FormLabel>
                                    <Input
                                        {...field}
                                        placeholder='Credit score'
                                        type='number'
                                    />
                                </FormControl>
                            )}
                        </Field>

                        <Field name="monthlyIncome">
                            {({ field, form }) => (
                                <FormControl mt={4}>
                                    <FormLabel>Montly income</FormLabel>
                                    <Input
                                        {...field}
                                        placeholder='Montly income'
                                        type='number'
                                    />
                                </FormControl>
                            )}
                        </Field>


                        <Field name="monthlyDebt">
                            {({ field, form }) => (
                                <FormControl mt={4}>
                                    <FormLabel>Montly debt</FormLabel>
                                    <Input
                                        {...field}
                                        placeholder='Montly debt'
                                        type='number'
                                    />
                                </FormControl>
                            )}
                        </Field>

                        <Button
                            marginTop="16px"
                            colorScheme='blue'
                            mr={3}
                            type="submit"
                            isLoading={props.isSubmitting}
                        // disabled={loading}
                        >
                            Update my profile
                        </Button>
                    </Form>
                )}
            </Formik>
        </Drawer >

    );
};

export default BorrowerProfile;
