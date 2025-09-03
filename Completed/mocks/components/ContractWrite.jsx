"use client";
import { Send } from "lucide-react";
import { useState } from "react";

const ContractWrite = () => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [txStatus, setTxStatus] = useState(null);

  const handleSend = () => {
    if (!recipient || !amount) return;

    setIsLoading(true);
    setTxStatus("preparing");

    setTimeout(() => {
      setTxStatus("sending");
      setTimeout(() => {
        setTxStatus("success");
        setIsLoading(false);
        setTimeout(() => setTxStatus(null), 5000);
      }, 2000);
    }, 1500);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
          <Send className="w-4 h-4 text-green-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">
          Write to Contract
        </h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Recipient Address
          </label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="0x..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Amount (USDC)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        {txStatus && (
          <div
            className={`p-4 rounded-lg ${
              txStatus === "success"
                ? "bg-green-50 border border-green-200"
                : "bg-blue-50 border border-blue-200"
            }`}
          >
            <div className="flex items-center space-x-2">
              {txStatus === "success" ? (
                <CheckCircle className="w-4 h-4 text-green-600" />
              ) : (
                <Loader className="w-4 h-4 animate-spin text-blue-600" />
              )}
              <span
                className={`text-sm font-medium ${
                  txStatus === "success" ? "text-green-800" : "text-blue-800"
                }`}
              >
                {txStatus === "preparing" && "Preparing transaction..."}
                {txStatus === "sending" &&
                  "Transaction sent! Waiting for confirmation..."}
                {txStatus === "success" && "Transaction confirmed!"}
              </span>
            </div>
            {txStatus === "success" && (
              <p className="text-xs text-green-600 mt-1 font-mono">
                Tx Hash: 0xabcd...1234
              </p>
            )}
          </div>
        )}

        <button
          onClick={handleSend}
          disabled={isLoading || !recipient || !amount}
          className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? (
            <Loader className="w-4 h-4 animate-spin" />
          ) : (
            <Send className="w-4 h-4" />
          )}
          <span>{isLoading ? "Sending..." : "Send Tokens"}</span>
        </button>

        <div className="text-xs text-gray-500">
          <p>Gas Fee: ~$2.50</p>
          <p>Function: transfer(address, uint256)</p>
        </div>
      </div>
    </div>
  );
};

export default ContractWrite;
