# WAGMI Tutorial - Build Your First Web3 DApp

![WAGMI Tutorial Banner](https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=400&fit=crop&crop=center)

> **Learn to build blockchain-connected React apps with WAGMI**  
> From zero Web3 knowledge to deploying your first DApp

[![Built by CWT](https://img.shields.io/badge/Built%20by-Codewithty.dev-blue?style=for-the-badge&logo=react)](https://codewithty.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![WAGMI](https://img.shields.io/badge/WAGMI-2.x-purple?style=for-the-badge)](https://wagmi.sh/)

## 🎯 What You'll Learn

This comprehensive tutorial teaches frontend developers how to build blockchain applications using React and WAGMI. Perfect for developers who want to enter the lucrative Web3 space.

### 📚 Tutorial Modules

1. **Blockchain Fundamentals** - Understanding the basics for developers
2. **WAGMI Setup & Configuration** - Getting your React app blockchain-ready
3. **Wallet Connection** - Connecting MetaMask and other Web3 wallets
4. **Reading Blockchain Data** - Fetch balances and contract information
5. **Writing to Blockchain** - Send transactions and interact with smart contracts
6. **Advanced Patterns** - Error handling, multi-chain support, and best practices

## 🚀 Quick Start

### Prerequisites

- React knowledge (hooks, components, state)
- Basic JavaScript & async/await understanding
- Node.js 16+ installed
- **No blockchain experience required!**

### Installation

```bash
# Clone the repository
git clone https://github.com/codewithty/wagmi-tutorial.git
cd wagmi-tutorial

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Setup

Create a `.env.local` file:

```env
# Optional: Add your RPC provider keys for production
REACT_APP_ALCHEMY_API_KEY=your_alchemy_key_here
REACT_APP_INFURA_API_KEY=your_infura_key_here
REACT_APP_WALLETCONNECT_PROJECT_ID=your_project_id_here
```

## 🏗️ What You'll Build

![Demo App Screenshot](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop)

A fully functional DApp featuring:

- ✅ **Wallet Connection** - MetaMask, WalletConnect integration
- ✅ **Balance Display** - Show ETH and token balances
- ✅ **Contract Interactions** - Read from smart contracts
- ✅ **Token Transfers** - Send transactions with proper UX
- ✅ **Multi-chain Support** - Ethereum, Polygon, Arbitrum
- ✅ **Transaction History** - Track and display user transactions
- ✅ **Error Handling** - Graceful error states and user feedback
- ✅ **Responsive Design** - Beautiful UI with Tailwind CSS

## 📁 Project Structure

```
src/
├── components/
│   ├── WalletConnection.jsx    # Wallet connect/disconnect
│   ├── BalanceDisplay.jsx      # Show user balances
│   ├── ContractRead.jsx        # Read contract data
│   ├── ContractWrite.jsx       # Send transactions
│   ├── NetworkInfo.jsx         # Network switching
│   └── TransactionHistory.jsx  # Transaction tracking
├── config/
│   └── wagmi.js               # WAGMI configuration
├── hooks/
│   └── useTokenBalance.js     # Custom WAGMI hooks
├── utils/
│   └── constants.js           # Contract addresses & ABIs
└── App.js                     # Main application
```

## 🛠️ Key Technologies

- **⚛️ React 18** - Modern React with hooks
- **🔗 WAGMI** - React hooks for Ethereum
- **🎨 Tailwind CSS** - Utility-first styling
- **🦊 MetaMask** - Web3 wallet integration
- **🔥 Viem** - TypeScript Ethereum library
- **🌐 Multi-chain** - Ethereum, Polygon, Arbitrum support

## 📖 Tutorial Sections

### 1. Blockchain Fundamentals (5 min)

```javascript
// Learn core concepts
- What is blockchain?
- Smart contracts basics
- Gas fees and transactions
- EVM-compatible chains
```

### 2. WAGMI Configuration (8 min)

```javascript
// Set up your config
import { createConfig, http } from "wagmi";
import { mainnet, polygon } from "wagmi/chains";

export const config = createConfig({
  chains: [mainnet, polygon],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
  },
});
```

### 3. Wallet Connection (10 min)

```javascript
// Connect user wallets
import { useAccount, useConnect, useDisconnect } from "wagmi";

function WalletButton() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  // Beautiful UI logic here...
}
```

### 4. Reading Blockchain Data (12 min)

```javascript
// Fetch balances and contract data
import { useBalance, useContractRead } from "wagmi";

const { data: balance } = useBalance({ address });
const { data: tokenBalance } = useContractRead({
  address: CONTRACT_ADDRESS,
  abi: TOKEN_ABI,
  functionName: "balanceOf",
  args: [address],
});
```

### 5. Writing Transactions (15 min)

```javascript
// Send transactions with proper UX
import { usePrepareContractWrite, useContractWrite } from "wagmi";

const { config } = usePrepareContractWrite({
  address: CONTRACT_ADDRESS,
  abi: TOKEN_ABI,
  functionName: "transfer",
  args: [recipient, amount],
});

const { write, isLoading } = useContractWrite(config);
```

## 🎬 Video Tutorial

[![YouTube Tutorial](https://img.shields.io/badge/Watch%20on-YouTube-red?style=for-the-badge&logo=youtube)](https://youtube.com/codewithty)

**Duration:** ~60 minutes  
**Level:** Beginner to Intermediate  
**Format:** Step-by-step coding tutorial

## 💼 Career Impact

### Why Learn Web3 Development?

- 🚀 **High Demand**: Shortage of Web3-skilled React developers
- 💰 **Competitive Salaries**: Web3 developers earn premium wages
- 🌐 **Growing Industry**: DeFi, NFTs, DAOs are expanding rapidly
- 🔧 **Transferable Skills**: Your React knowledge directly applies
- 🆕 **Cutting Edge**: Work on next-generation internet technology

### What Web3 Frontend Developers Build

- **DeFi Applications** - Uniswap, Aave, Compound interfaces
- **NFT Marketplaces** - OpenSea, Foundation, SuperRare
- **DAO Platforms** - Governance and voting interfaces
- **Web3 Gaming** - Play-to-earn game frontends
- **Wallet Applications** - MetaMask, Rainbow, Coinbase Wallet
- **Trading Platforms** - DEX interfaces and portfolio trackers

## 🌐 Supported Networks

| Network          | Chain ID | Currency   | Status       |
| ---------------- | -------- | ---------- | ------------ |
| Ethereum Mainnet | 1        | ETH        | ✅ Supported |
| Polygon          | 137      | MATIC      | ✅ Supported |
| Arbitrum One     | 42161    | ETH        | ✅ Supported |
| Optimism         | 10       | ETH        | ✅ Supported |
| Sepolia Testnet  | 11155111 | SepoliaETH | ✅ Supported |

## 🔧 Development Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Deploy to testnet
npm run deploy:testnet

# Deploy to mainnet
npm run deploy:mainnet
```

## 🤝 Contributing

We welcome contributions! See our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support & Community

- **🐛 Issues**: [GitHub Issues](https://github.com/codewithty/wagmi-tutorial/issues)
- **🐦 Twitter**: [@codewithty](https://twitter.com/codewithty_)
- **📧 Email**: hello@codewithty.dev
- **🌐 Website**: [codewithty.dev](https://codewithty.dev)

## 📜 License

This project is licensed under the CWT License.

## 🙏 Acknowledgments

- **WAGMI Team** - For the amazing React hooks library
- **Ethereum Foundation** - For the robust blockchain infrastructure
- **Viem Team** - For the excellent TypeScript Ethereum library
- **Our Community** - For feedback and contributions

---

<div align="center">
  <h3>🚀 Ready to start your Web3 journey?</h3>
  <p>Star this repo, follow the tutorial, and join thousands of developers building the future of the web!</p>
  
  [![Star this repo](https://img.shields.io/github/stars/codewithty/wagmi-tutorial?style=social)](https://github.com/codewithty/wagmi-tutorial)
  [![Follow @codewithty](https://img.shields.io/twitter/follow/codewithty?style=social)](https://twitter.com/codewithty)
</div>

---

**Built with ❤️ by [CWT (Codewithty.dev)](https://codewithty.dev)**
