import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormInput,
  Input,
  Container,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { Field, Form, Formik } from "formik";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useContext, useState } from "react";
import Drawer from "../components/Drawer";
import { AuthContext } from "../components/WithWalletConnect";
import BorrowModal from "../components/BorrowModal";
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [worldCoinID, setWorldCoinID] = useState("");
  const [IpfsHash, setIpfsHash] = useState();
  function trySetWorldCoinID(nullfier_hash: string) {
    setWorldCoinID(nullfier_hash);
  }
  const provider = useContext(AuthContext);
  const walletAddress = provider.accounts[0];
  return (
    <Drawer parent="borrow">
      {provider.connected && (
        <DynamicWorldCoinButton onAuth={trySetWorldCoinID} />
      )}
      {!IpfsHash && !worldCoinID && <Container centerContent margin="32px auto">
        Please connect your wallet to borrow a loan
      </Container>
      }
      {IpfsHash && worldCoinID && <BorrowModal />}
      {formState == "submitted" && (
        <Alert status="success">
          <AlertIcon />
          Data submitted correctly. Fire on!
        </Alert>
      )}
      {formState == "error" && (
        <Alert status="error">
          <AlertIcon />
          There was an error processing your request
        </Alert>
      )}

      {!IpfsHash && worldCoinID && (
        <Box style={{ padding: 5 }}>
          <Container centerContent margin="32px auto">
            Your KYC data is need if you want to borrow a loan
            <Button colorScheme='blue' onClick={onOpen}>Fill KYC data</Button>
          </Container>
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            size="lg"
          >
            <ModalOverlay />
            <ModalContent >
              <ModalHeader>Specify your KYC data</ModalHeader>
              <ModalCloseButton />
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
                  actions.setSubmitting(false);
                  const data = formatHumanData(values);
                  let _IpfsHash;
                  try {
                    _IpfsHash = await postIPFS(data);
                    setIpfsHash(_IpfsHash);
                  } catch (error) {
                    setFormState("error");
                    throw Error(error);
                  }
                  try {
                    await addUser(worldCoinID, _IpfsHash, provider);
                    setFormState("submitted");
                  } catch (error) {
                    setFormState("error");
                    throw Error(error);
                  }
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
                    <ModalBody pb={6}>
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
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        colorScheme="blue"
                        mr={3}
                        type="submit"
                        disabled={worldCoinID == ""}
                        isLoading={props.isSubmitting}
                      >
                        Update my profile
                      </Button>

                      <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                  </Form>
                )}
              </Formik>
            </ModalContent>
          </Modal>
        </Box>
      )}
    </Drawer>
  );
};

export default BorrowerProfile;
