import { ThirdwebSDK } from "@3rdweb/sdk";
import ethers from "ethers";

// Read environment variables from .env
import dotenv from "dotenv";
dotenv.config();

const walletPrivateKey = process.env.WALLET_PRIVATE_KEY;

if (!walletPrivateKey) {
    console.error("Wallet private key missing")
    process.exit(1)
}

export const sdk = new ThirdwebSDK(
    new ethers.Wallet(
        process.env.WALLET_PRIVATE_KEY,
        ethers.getDefaultProvider("https://rpc-mumbai.maticvigil.com")
    ),
);

const appAddress = '0x5A3FEEE521f27f23BC286153f89F1AE1f3878e3D';

export async function getApp() {
    const app = await sdk.getAppModule(appAddress);
    return app;
}