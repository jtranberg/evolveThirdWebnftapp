import { ConnectWallet, ThirdwebNftMedia, Web3Button, useAddress, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { contract } = useContract("0x70cfefd27649dB320b8788d88BB6387f8b73328D");
   const address = useAddress();

const { data: nfts } = useOwnedNFTs(contract, address);

  return (
    <div >
          <ConnectWallet accentColor="blue" colorMode="light"/>
        <hr/>
        {nfts?.map((nft) => (
          <div key={nft.metadata.id.toString()}>
            <ThirdwebNftMedia metadata={nft.metadata}/>
            {nft.metadata.name}
            </div>
        ))}
         <hr/>
         <Web3Button contractAddress={"0x70cfefd27649dB320b8788d88BB6387f8b73328D"} 
         action={(contract) => contract.erc1155.claim(0, 1)}
         >
          Claim a Sqyuirtle
          </Web3Button> 
        <hr/>
         <Web3Button contractAddress={"0x70cfefd27649dB320b8788d88BB6387f8b73328D"}
         accentColor="red" 
         action={(contract) => contract.call("evolve")}
         >
          Evolve
          </Web3Button> 
    </div>
  );
};

export default Home;
