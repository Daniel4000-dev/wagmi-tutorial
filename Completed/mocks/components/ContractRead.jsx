"use client";
import { Eye } from "lucide-react";
import { useState } from "react";

const ContractRead = () => {
  const [tokenBalance, setTokenBalance] = useState("1,000.50");
  const [isLoading, setIsLoading] = useState(false);

  const handleRead = () => {
    setIsLoading(true);
    setTimeout(() => {
      setTokenBalance((Math.random() * 10000).toFixed(2));
      setIsLoading(false);
    }, 1500);
  };

  return (
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
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-2">USDC Token Balance</p>
          <p className="text-2xl font-bold text-gray-900">
            {tokenBalance} USDC
          </p>
        </div>

        <button
          onClick={handleRead}
          disabled={isLoading}
          className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? (
            <Loader className="w-4 h-4 animate-spin" />
          ) : (
            <Eye className="w-4 h-4" />
          )}
          <span>{isLoading ? "Reading..." : "Read Token Balance"}</span>
        </button>

        <div className="text-xs text-gray-500">
          <p>Contract: 0xA0b86a33E6B7dE04B4CF5B5A7b5eF2ACc9F9b2C3</p>
          <p>Function: balanceOf(address)</p>
        </div>
      </div>
    </div>
  );
};

export default ContractRead;
