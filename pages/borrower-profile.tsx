import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  useCounter,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useContext, useState } from "react";
import Drawer from "../components/Drawer";
import { AuthContext } from "../components/WithWalletConnect";
const DynamicWorldCoinButton = dynamic(
  () => import("../components/WorldCoinButton"),
  {
    ssr: false,
  }
);
import { postIPFS } from "../util/tatum";

const formatHumanData = (data: object) => {
  const { age, location, creditScore, monthlyIncome, monthlyDebt } = data;
  return {
    KYC: {
      age,
      location,
    },
    creditScore,
    monthlyIncome,
    monthlyDebt,
  };
};

// TODO: -> fix styles of this form with flex wrap
const BorrowerProfile: NextPage = () => {
  const [worldCoinID, setWorldCoinID] = useState("");
  function trySetWorldCoinID(nullfier_hash: string) {
    setWorldCoinID(nullfier_hash);
  }
  const provider = useContext(AuthContext);
  return (
    <Drawer parent="borrower-profile">
      <Box style={{ padding: 5 }}>
        {provider.connected && (
          <DynamicWorldCoinButton onAuth={trySetWorldCoinID} />
        )}
        <Formik
          initialValues={{
            firstName: undefined,
            lastName: null,
            age: null,
            location: null,
            creditScore: null,
            monthlyIncome: null,
            monthlyDebt: null,
          }}
          onSubmit={async (values, actions) => {
            actions.setSubmitting(false);
            const data = formatHumanData(values);
            try {
              const IpfsHash = await postIPFS(data);
            } catch (error) {
              throw Error(error);
            }
          }}
        >
          {(props) => (
            <Form style={{ flexDirection: "row", width: 500 }}>
              <Field
                name="firstName"
                style={{ flex: 1 }}
                disabled={worldCoinID == ""}
              >
                {({ field, form }) => (
                  <FormControl mt={4}>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      {...field}
                      placeholder="First Name"
                      disabled={worldCoinID == ""}
                    />
                  </FormControl>
                )}
              </Field>

              <Field
                name="lastName"
                style={{ flex: 1 }}
                disabled={worldCoinID == ""}
              >
                {({ field, form }) => (
                  <FormControl mt={4}>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      {...field}
                      placeholder="Last Name"
                      disabled={worldCoinID == ""}
                    />
                  </FormControl>
                )}
              </Field>

              <Field name="age" disabled={worldCoinID == ""}>
                {({ field, form }) => (
                  <FormControl mt={4}>
                    <FormLabel>Age</FormLabel>
                    <Input
                      {...field}
                      placeholder="Age"
                      type="number"
                      disabled={worldCoinID == ""}
                    />
                  </FormControl>
                )}
              </Field>

              <Field name="location" disabled={worldCoinID == ""}>
                {({ field, form }) => (
                  <FormControl mt={4}>
                    <FormLabel>Location</FormLabel>
                    <Input
                      {...field}
                      placeholder="Location"
                      disabled={worldCoinID == ""}
                    />
                  </FormControl>
                )}
              </Field>

              <Field name="creditScore" disabled={worldCoinID == ""}>
                {({ field, form }) => (
                  <FormControl mt={4}>
                    <FormLabel>Credit score</FormLabel>
                    <Input
                      {...field}
                      placeholder="Credit score"
                      type="number"
                      disabled={worldCoinID == ""}
                    />
                  </FormControl>
                )}
              </Field>

              <Field name="monthlyIncome" disabled={worldCoinID == ""}>
                {({ field, form }) => (
                  <FormControl mt={4}>
                    <FormLabel>Montly income</FormLabel>
                    <Input
                      {...field}
                      placeholder="Montly income"
                      type="number"
                      disabled={worldCoinID == ""}
                    />
                  </FormControl>
                )}
              </Field>

              <Field name="monthlyDebt" disabled={worldCoinID == ""}>
                {({ field, form }) => (
                  <FormControl mt={4}>
                    <FormLabel>Montly debt</FormLabel>
                    <Input
                      {...field}
                      placeholder="Montly debt"
                      type="number"
                      disabled={worldCoinID == ""}
                    />
                  </FormControl>
                )}
              </Field>

              <Button
                marginTop="16px"
                colorScheme="blue"
                mr={3}
                type="submit"
                disabled={worldCoinID == ""}
                isLoading={props.isSubmitting}
                // disabled={loading}
              >
                Update my profile
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Drawer>
  );
};

export default BorrowerProfile;
