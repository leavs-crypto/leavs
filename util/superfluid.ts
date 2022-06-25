import { Framework } from "@superfluid-finance/sdk-core";
import Operation from "@superfluid-finance/sdk-core/dist/main/Operation";
import { useContext } from "react";
import divide from "divide-bigint";




import { AuthContext } from "../components/WithWalletConnect";
const provider = useContext(AuthContext);


export const createFlow = async (recipient: string, flowRate: string) => {
    const sf = await Framework.create({
        chainId: 80001,
        provider: <any>provider
    });

    const daix = await sf.loadSuperToken("fDAIx");


    try {
        const createFlowOperation = sf.cfaV1.createFlow({
            receiver: recipient,
            superToken: daix.address,
            flowRate: flowRate,
        });

        console.log("Creating...");
        const result = await createFlowOperation.exec(provider.getSigner());
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

export const updateFlow = async (recipient: string,  newFlowRate: string) => {
    const sf = await Framework.create({
        chainId: 80001,
        provider: <any>provider
    });

    const daix = await sf.loadSuperToken("fDAIx");

    try {
        let operation: Operation
        if (Number(newFlowRate) === 0) {
            operation = sf.cfaV1.deleteFlow({
                superToken: daix.address,
                sender: await provider.getSigner().getAddress(),
                receiver: recipient
            });
        } else {
            operation = sf.cfaV1.updateFlow({
                flowRate: newFlowRate,
                receiver: recipient,
                superToken: daix.address
            });
        }

        console.log("Updating...");
        const result = await operation.exec(provider.getSigner());
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

export const getFlowRate = async (account: string) => {
    const sf = await Framework.create({
        chainId: 80001,
        provider: <any>provider
    });

    const daix = await sf.loadSuperToken("fDAIx");

    try {
        const flow = await sf.cfaV1.getAccountFlowInfo({
            superToken: daix.address,
            account: account,
            providerOrSigner: <any>provider
        });

        return divide(BigInt(flow.flowRate), 10 ** 18);
    } catch (error) {
        console.error(error);
    }
}
