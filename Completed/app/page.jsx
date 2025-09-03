import { ExternalLink, Users } from "lucide-react";
import WalletConnection from "./components/WalletConnection";
import BalanceDisplay from "./components/BalanceDisplay";
import ContractRead from "./components/ConractRead";
import NetworkInfo from "./components/NetworkInfo";
import TransactionHistory from "@/mocks/components/TransactionHistory";
import CodeExample from "@/mocks/components/CodeExample";
import ContractWrite from "./components/ContractWrite";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  WAGMI Tutorial
                </h1>
                <p className="text-sm text-gray-600">
                  Learn blockchain development with React
                </p>
              </div>
            </div>
            <a
              href="https://github.com"
              className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Build Your First Web3 DApp
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This tutorial demonstrates how to use WAGMI hooks to interact with
            the Ethereum blockchain. Perfect for React developers ready to dive
            into Web3 development.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <WalletConnection />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BalanceDisplay />
              <NetworkInfo />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ContractRead />
              <ContractWrite />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <TransactionHistory />
          </div>
        </div>

        {/* Code Examples Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Code Examples
            </h3>
            <p className="text-gray-600">
              Key WAGMI hooks and patterns you'll learn in the tutorial
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CodeExample
              title="Connect Wallet"
              code={`import { useAccount, useConnect } from 'wagmi'

function ConnectWallet() {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()

  if (isConnected) {
    return <div>Connected: {address}</div>
  }

  return (
    <button onClick={() => connect()}>
      Connect Wallet
    </button>
  )
}`}
            />

            <CodeExample
              title="Read Contract Data"
              code={`import { useContractRead } from 'wagmi'

function TokenBalance() {
  const { data, isLoading } = useContractRead({
    address: '0x...',
    abi: tokenAbi,
    functionName: 'balanceOf',
    args: [address],
  })

  return (
    <div>
      Balance: {data?.formatted} {data?.symbol}
    </div>
  )
}`}
            />

            <CodeExample
              title="Write to Contract"
              code={`import { usePrepareContractWrite, useContractWrite } from 'wagmi'

function SendTokens() {
  const { config } = usePrepareContractWrite({
    address: '0x...',
    abi: tokenAbi,
    functionName: 'transfer',
    args: [recipient, amount],
  })

  const { write } = useContractWrite(config)

  return (
    <button onClick={() => write?.()}>
      Send Tokens
    </button>
  )
}`}
            />

            <CodeExample
              title="Transaction Status"
              code={`import { useWaitForTransaction } from 'wagmi'

function TransactionStatus({ hash }) {
  const { data, isLoading, isSuccess } = useWaitForTransaction({
    hash,
  })

  if (isLoading) return <div>Processing...</div>
  if (isSuccess) return <div>Success!</div>
  
  return <div>Transaction Status</div>
}`}
            />
          </div>
        </div>

        {/* Tutorial Steps */}
        <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Tutorial Roadmap
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Setup & Connect",
                desc: "Install WAGMI and connect wallets",
              },
              {
                step: 2,
                title: "Read Data",
                desc: "Fetch balances and contract data",
              },
              {
                step: 3,
                title: "Write Transactions",
                desc: "Send tokens and interact with contracts",
              },
              {
                step: 4,
                title: "Advanced Patterns",
                desc: "Error handling and best practices",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="text-center p-4 border border-gray-200 rounded-lg"
              >
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  {item.step}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>
              Built By{" "}
              <a href="https://codewithty.dev" rel="_blank">
                CWT
              </a>{" "}
              with React, WAGMI, and Tailwind CSS
            </p>
            <p className="text-sm mt-2">
              Fork this project on GitHub to get started with your own Web3 app!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default page;
