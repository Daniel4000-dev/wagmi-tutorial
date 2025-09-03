import { Send, Zap } from "lucide-react";

const TransactionHistory = () => {
  const transactions = [
    {
      hash: "0xabcd...1234",
      type: "Send",
      amount: "100 USDC",
      status: "Success",
      time: "2 min ago",
    },
    {
      hash: "0xefgh...5678",
      type: "Receive",
      amount: "0.5 ETH",
      status: "Success",
      time: "1 hour ago",
    },
    {
      hash: "0xijkl...9012",
      type: "Send",
      amount: "50 USDC",
      status: "Pending",
      time: "2 hours ago",
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
          <Zap className="w-4 h-4 text-yellow-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">
          Recent Transactions
        </h3>
      </div>

      <div className="space-y-3">
        {transactions.map((tx, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  tx.type === "Send" ? "bg-red-100" : "bg-green-100"
                }`}
              >
                <Send
                  className={`w-4 h-4 ${
                    tx.type === "Send"
                      ? "text-red-600 rotate-45"
                      : "text-green-600 -rotate-45"
                  }`}
                />
              </div>
              <div>
                <p className="font-medium text-gray-900">
                  {tx.type} {tx.amount}
                </p>
                <p className="text-sm text-gray-500 font-mono">{tx.hash}</p>
              </div>
            </div>
            <div className="text-right">
              <span
                className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                  tx.status === "Success"
                    ? "bg-green-100 text-green-800"
                    : tx.status === "Pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {tx.status}
              </span>
              <p className="text-xs text-gray-500 mt-1">{tx.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TransactionHistory;
