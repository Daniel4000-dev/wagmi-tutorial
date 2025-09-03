"use client";

import { Eye, Loader } from "lucide-react";
import { useAccount, useReadContract } from "wagmi";
import { USDC_ABI } from "@/constants/abi";
import { formatUnits } from "viem"; // To format balance

const ContractRead = () => {
  const { address, isConnected } = useAccount();
  console.log(address);

  const { data, isLoading, error } = useReadContract({
    abi: USDC_ABI,
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    functionName: "balanceOf",
    args: [address],
    query: {
      enabled: !!address, // Only fetch if wallet is connected
    },
  });

  const formattedBalance = data ? formatUnits(data, 6) : "0.00"; // i used viem formatUnits to format the balance (USDC has a decimal of 6, assuming it was a token that had 18 we would use 18 -> the decimals are show on etherscan)

  return (
    isConnected && (
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
            <Eye className="w-4 h-4 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">
            Read Contract Data
          </h3>
        </div>

        <div className="space-y-4">
          {isConnected ? (
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-2">USDC Token Balance</p>
              {isLoading ? (
                <p className="text-sm text-gray-500 flex items-center space-x-2">
                  <Loader className="w-4 h-4 animate-spin" />
                  <span>Loading...</span>
                </p>
              ) : error ? (
                <p className="text-sm text-red-500">Error fetching balance.</p>
              ) : (
                <p className="text-2xl font-bold text-gray-900">
                  {formattedBalance} USDC
                </p>
              )}
            </div>
          ) : (
            <p className="text-sm text-gray-500">
              Connect wallet to read balance.
            </p>
          )}

          <div className="text-xs text-gray-500">
            <p>Contract: 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48</p>
            <p>Function: balanceOf(address)</p>
          </div>
        </div>
      </div>
    )
  );
};

export default ContractRead;
