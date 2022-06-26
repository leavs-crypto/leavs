import {
    Box,
    Button,
    FormControl,
    FormLabel,
    FormInput,
    Input,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import type { NextPage } from "next";
import Drawer from "../components/Drawer";
import { postIPFS } from "../util/tatum";
import { toast } from "react-toastify";
import { useState } from "react";

const formatHumanData = (data: object) => {
    const { age, location, creditScore, monthlyIncome, monthlyDebt } = data;
    return {
        KYC: {
            age,
            location
        },
        creditScore,
        monthlyIncome,
        monthlyDebt
    }
}

// TODO: -> fix styles of this form with flex wrap
const BorrowerProfile: NextPage = () => {
    const [formState, setFormState] = useState('notSubmitted');

    return (
        <Drawer parent="borrower-profile">
            {formState == 'submitted' && <Alert status='success'>
                <AlertIcon />
                Data uploaded to IPFS. Fire on!
            </Alert>}
            {formState == 'error' && <Alert status='error'>
                <AlertIcon />
                There was an error processing your request
            </Alert>}


            {formState == 'notSubmitted' && <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    age: null,
                    location: "",
                    creditScore: null,
                    monthlyIncome: null,
                    monthlyDebt: null
                }}
                onSubmit={async (values, actions) => {
                    actions.setSubmitting(false);
                    const data = formatHumanData(values);
                    try {
                        const IpfsHash = await postIPFS(data);
                        setFormState('submitted');
                    } catch (error) {
                        setFormState('error');
                        throw Error(error);
                    }
                }}
            >
                {(props) => (
                    <Form style={{ textAlign: "center" }}>
                        <Field name="firstName">
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
                        >
                            Update my profile
                        </Button>
                    </Form>
                )}
            </Formik>}
        </Drawer >

    );
};

export default BorrowerProfile;
