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
import WalletConnectProvider from "@walletconnect/web3-provider";
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
import { addUser } from "../util/user";

const formatHumanData = (data: object) => {
  const {
    worldCoinID,
    walletAddress,
    age,
    location,
    creditScore,
    monthlyIncome,
    monthlyDebt,
  } = data;
  return {
    worldcoin_nullifier: worldCoinID,
    walletAddress,
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
  const [formState, setFormState] = useState("notSubmitted");
  const [worldCoinID, setWorldCoinID] = useState("");
  function trySetWorldCoinID(nullfier_hash: string) {
    setWorldCoinID(nullfier_hash);
  }
  const provider = useContext(AuthContext);
  const walletAddress = provider.accounts[0];
  return (
    <Drawer parent="borrower-profile">
      {formState == "submitted" && (
        <Alert status="success">
          <AlertIcon />
          Data uploaded to IPFS. Fire on!
        </Alert>
      )}
      {formState == "error" && (
        <Alert status="error">
          <AlertIcon />
          There was an error processing your request
        </Alert>
      )}

      {formState == "notSubmitted" && (
        <Box style={{ padding: 5 }}>
          {provider.connected && (
            <DynamicWorldCoinButton onAuth={trySetWorldCoinID} />
          )}
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              age: null,
              location: "",
              creditScore: null,
              monthlyIncome: null,
              monthlyDebt: null,
            }}
            onSubmit={async (values, actions) => {
              console.log("Hi");
              actions.setSubmitting(false);
              const data = formatHumanData(values);
              let IpfsHash;
              try {
                IpfsHash = await postIPFS(data);
              } catch (error) {
                setFormState("error");
                throw Error(error);
              }
              console.log("Hddi");
              try {
                await addUser(worldCoinID, IpfsHash, provider);
                setFormState("submitted");
              } catch (error) {
                setFormState("error");
                throw Error(error);
              }
              console.log("Hddddi");
            }}
          >
            {(props) => (
              <Form
                style={{
                  textAlign: "center",
                  flexDirection: "row",
                  width: 500,
                }}
              >
                <Field name="firstName">
                  {({ field, form }) => (
                    <FormControl mt={4}>
                      <FormLabel>First Name</FormLabel>
                      <Input
                        {...field}
                        placeholder="First Name"
                        style={{ flex: 1 }}
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
                      <FormLabel>Monthly debt</FormLabel>
                      <Input
                        {...field}
                        placeholder="Monthly debt"
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
                >
                  Update my profile
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      )}
    </Drawer>
  );
};

export default BorrowerProfile;
