Here’s your **initial `README.md` draft** for the **NihonChain** project. You can copy this into your repo’s root `README.md` file:

---

# 🌸 NihonChain — Blockchain-Integrated Japanese Learning Tracker

**NihonChain** is a gamified Japanese language learning tracker powered by blockchain. Learners earn verifiable on-chain rewards (ERC-20 tokens & NFT badges) for their study progress, making their language journey transparent, fun, and tamper-proof.

---

## 🚀 Features

* 🎯 **Learning Progress Tracker:** Log completed lessons and vocabulary on-chain.
* 🏅 **Earn Rewards:**

  * **NIHON Token (ERC-20):** Rewards for learning milestones.
  * **Badge NFTs (ERC-721):** Unique NFTs for achievements (e.g., "Hiragana Master").
* 📊 **On-Chain Leaderboard:** Transparent ranking of learners.
* 🛡️ **Verifiable Achievements:** Blockchain-backed proof of learning.
* 🌐 **Decentralized:** Learning data stored transparently on Polygon Mumbai.

---

## 📂 Project Structure

```
nihonchain/
├── contracts/      # Smart contracts (Solidity)
├── frontend/       # Frontend (React + Tailwind + wagmi/viem)
├── scripts/        # Deploy & utility scripts
├── test/           # Smart contract tests
├── hardhat.config.js
└── README.md
```

---

## 🛠️ Tech Stack

| Layer           | Tech                             |
| --------------- | -------------------------------- |
| Smart Contracts | Solidity, Hardhat                |
| Frontend        | React, wagmi, viem, Tailwind CSS |
| Blockchain      | Polygon Mumbai Testnet           |
| Wallet          | MetaMask, Alchemy AccountKit     |

---

## 🔨 Setup & Run

### 🧑‍💻 Smart Contracts

```bash
cd nihonchain
npm install
npx hardhat compile
npx hardhat test
npx hardhat run scripts/deploy.js --network mumbai
```

### 🌐 Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables (Frontend)

Create a `.env` file in `/frontend/`:

```
NEXT_PUBLIC_ALCHEMY_API_KEY=your_alchemy_key
NEXT_PUBLIC_CHAIN_ID=80001
```

---

## 🌟 Demo Video

👉 *Coming soon after MVP!*

---

## 🎯 Future Enhancements

* Social login support
* NFT badge marketplace
* Off-chain quiz integrations
* Learning streak tracking


## 🧑‍💻 Author

* **Shubham Mate**
* LinkedIn: [Shubham Mate](https://www.linkedin.com/in/shubham-mate-6b436b229)

