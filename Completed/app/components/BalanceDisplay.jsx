"use client";
import { Eye, Loader } from "lucide-react";
// import { useBalance } from "../../mocks/wagmiMocks";
import { useAccount, useBalance } from "wagmi";

const BalanceDisplay = () => {
  const { isConnected, address } = useAccount();
  //   const { data: balance, isLoading, error } = useBalance();
  const {
    isLoading,
    error,
    data: balance,
  } = useBalance({
    address: address,
  });

  return (
    isConnected && (
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <Eye className="w-4 h-4 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">
            Wallet Balance
          </h3>
        </div>

        {isLoading ? (
          <div className="flex items-center space-x-2 text-gray-500">
            <Loader className="w-4 h-4 animate-spin" />
            <span>Loading balance...</span>
          </div>
        ) : error ? (
          <div className="flex items-center space-x-2 text-red-500">
            <AlertCircle className="w-4 h-4" />
            <span>Error loading balance</span>
          </div>
        ) : (
          <div className="text-3xl font-bold text-gray-900">
            {balance?.formatted} {balance?.symbol}
          </div>
        )}
      </div>
    )
  );
};

export default BalanceDisplay;
