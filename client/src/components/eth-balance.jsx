import React, { useEffect, useState } from "react";
import Web3 from "web3";

const EthereumBalance = ({ address }) => {
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        setLoading(true);
        // Replace with your Infura URL
        const infuraUrl =
          "https://mainnet.infura.io/v3/YOUR_INFURA_API_KEY";
        // Create a Web3 instance
        const web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl));
        // Fetch the balance
        const balanceWei = await web3.eth.getBalance(address);
        console.log("Raw Balance (Wei):", balanceWei); // Log for debugging
        // Convert balance from Wei to Ether
        const balanceEther = Web3.utils.fromWei(balanceWei, "ether");
        setBalance(balanceEther);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBalance();
  }, [address]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <p>Balance: {balance} ETH</p>
    </div>
  );
};

export default EthereumBalance;
