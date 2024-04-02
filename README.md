# KEYRING HARD WALLET Implementation Sample

## How to implement KEYRING HARD WALLET in 4 steps
  ```bash
  Step 1: Read the content of KEYRING HARD WALLET connection json file
  ステップ1: KEYRING HARD WALLET 接続 json ファイルの内容を読み取る

  Step 2: Get the encrypt key of a user, based on the user's address and KEYRING HARD WALLET API key
  ステップ2: ユーザーのアドレスとKEYRING HARD WALLET APIキーに基づいて、ユーザーの暗号化キーを取得する

  Step 3: Get the private key of the user by decrypting "userData", based on the user's encrypted key and user's passcode
  ステップ3: ユーザーの暗号化キーに基づいて、"userData"を復号化してユーザーの秘密鍵を取得する

  Step 4: To execute a transaction on the blockchain, use the user's private key to create a Web3 wallet then execute eth_signMessage
  ステップ4: ブロックチェーン上でトランザクションを実行するため、ユーザーの秘密鍵を使用してWeb3ウォレットを作成し、eth_signMessageを実行する
  ```


## Environment Setup

### Information Using In This Sample

- **Sample keyring-hard-wallet json file using at `Step 1`**

  - **Option 1:** Using keyring-hard-wallet json file at `/public/keyring-hard-wallet-file-sample.json`
      ```bash
      U2FsdGVkX18O635bHcbLnzFxReM/Lxvn/Jv3v5bctBwxHQs2134kToTpED1ILWrgrW1h44VcgbJtejKvIarNeHGd0sgzdaoJ8XCg1quFKEMafSCG28rFcrif1+wh9IcIQ7MjzLVWBEQCFzLBQDwts2rgeGC1PRwx1UvsgAt/2X2VlrmIWsrIJ59jetHe4RV6mkSMjfV9kH4xBjACCZC3gIXAJFckEBPAcwDXapTHnCMO13ZkbAqMQH73YeFVZIlVLyLBIdGbsAloSf+USnQeOvLmgXOAiwogUQr8xOetnvvizuLoXIqWxIU6l/N/QNlRxpFJ6GRfZUbciNUy22Ried/ZrCsQNMhf+vrqrVuS8qAewN/bIl+zVnb9LcxCqayVb+17H3ThVdnnBypNEqo6DwZmrQKVEGuzGJg3Jw0XRhavK8dUp9XvB7uWOqee85QnHYsVbfwIEUsxosRs9Cxpc6bS09up+O+fDEAVxQPAcc2FFnuqp6fxBvGdO7MJZlSf
      ```
  - **Option 2:** Create a keyring-hard-wallet json file by yourself at [This page](https://hardwallet.keyring.app/scan-nfc/demo/step1)
&nbsp;
- **KEYRING HARD WALLET API key using at `Step 2`**
  ```bash
  pRPaMF07ERrMXqjBTyglpyMkT5eLKcB3
  ```
- **User passcode using at `Step 3`**
  ```bash
  123456
  ```

### Running the app in development
Required [Node.js](https://nodejs.org) **version >= 12.22.0**

- Clone the repo and change the directory
  ```bash
  git clone https://github.com/bacoor-hb/keyring-hard-wallet-implementation-sample.git
  cd keyring-hard-wallet-implementation-sample
  ```


- Install npm packages
  ```bash
  yarn
  ```

- Create your .env.local file on root folder with this content
  ```bash
  NEXT_PUBLIC_FILE_ENCRYPT_KEY=St4H1XUafM
  NEXT_PUBLIC_KEYRING_HARD_WALLET_API=https://api-hardwallet.keyring.app/service/v1
  NEXT_PUBLIC_KEYRING_HARD_WALLET_API_KEY=pRPaMF07ERrMXqjBTyglpyMkT5eLKcB3
  ```

- Start app with your custom port
  ```bash
  yarn dev --port 3003
  ```

- Open http://localhost:3003 with your browser to see the result.

