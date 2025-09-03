"use client";
import { Globe } from "lucide-react";
import { useState } from "react";
import { useAccount, useChains, useSwitchChain } from "wagmi";

const NetworkInfo = () => {
  const { chain: currentChain, isConnected } = useAccount();
  const chains = useChains();
  const { switchChain } = useSwitchChain();

  const [currentNetwork, setCurrentNetwork] = useState("Ethereum Mainnet");

  return (
    isConnected && (
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
            <Globe className="w-4 h-4 text-indigo-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Network</h3>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
            <span className="text-indigo-800 font-medium">
              {currentChain?.name}
            </span>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>

          <select
            value={currentNetwork}
            onChange={(e) => {
              setCurrentNetwork(e.target.value);
              switchChain({ chainId: Number(e.target.value) });
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            {chains.map((chain) => (
              <option key={chain.id} value={chain.id}>
                {chain.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    )
  );
};

export default NetworkInfo;
