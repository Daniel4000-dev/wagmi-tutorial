export const useAccount = () => ({
  address: "0x742d35Cc6634C0532925a3b8D82aB7c7c3f7E7b6",
  isConnected: true,
  isConnecting: false,
  isDisconnected: false,
});

export const useBalance = () => ({
  data: { formatted: "1.234", symbol: "ETH" },
  isLoading: false,
  error: null,
});

export const useConnect = () => ({
  connect: () => console.log("Connecting..."),
  connectors: [{ name: "MetaMask" }, { name: "WalletConnect" }],
  isLoading: false,
  pendingConnector: null,
});

export const useDisconnect = () => ({
  disconnect: () => console.log("Disconnecting..."),
});
