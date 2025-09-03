"use client";
import { Wallet } from "lucide-react";
import { useConnect, useDisconnect, useAccount } from "../wagmiMocks";

const WalletConnection = () => {
  const { address, isConnected, isConnecting } = useAccount();
  const { connect, connectors, isLoading } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected && address) {
    return (
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <Wallet className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-green-800">
                Connected Wallet
              </p>
              <p className="text-xs text-green-600 font-mono">
                {address.slice(0, 6)}...{address.slice(-4)}
              </p>
            </div>
          </div>
          <button
            onClick={disconnect}
            className="px-4 py-2 text-sm font-medium text-green-700 bg-white border border-green-300 rounded-lg hover:bg-green-50 transition-colors"
          >
            Disconnect
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
      <Wallet className="w-12 h-12 text-gray-400 mx-auto mb-4" />
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        Connect Your Wallet
      </h3>
      <p className="text-gray-600 mb-6">
        Connect your wallet to interact with the blockchain
      </p>
      <div className="space-y-3">
        {connectors.map((connector) => (
          <button
            key={connector.name}
            onClick={() => connect()}
            disabled={isLoading}
            className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? (
              <Loader className="w-4 h-4 animate-spin" />
            ) : (
              <Wallet className="w-4 h-4" />
            )}
            <span>Connect {connector.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default WalletConnection;
