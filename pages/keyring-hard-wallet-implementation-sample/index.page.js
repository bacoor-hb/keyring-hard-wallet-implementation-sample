import { useState } from 'react'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import Step4 from './components/Step4'

const KeyringHardWalletImplementationSample = () => {
  const [walletData, setWalletData] = useState('')
  const [userEncryptKey, setUserEncryptKey] = useState('')
  const [userPrivateKey, setUserPrivateKey] = useState('')

  return (
    <div className='w-full flex-col justify-center pt-5 overflow-x-auto'>
      <p className='text font-bold text-3xl text-center'>KEYRING HARD WALLET Implementation Sample</p>

      <div className='divide-y divide-dotted divide-slate-800'>

        {/* >> Step 1: Read keyring-hard-wallet file content */}
        <Step1
          walletData={walletData}
          setWalletData={setWalletData} />

        {/* >> Step 2: Get user's encrypt key from api */}
        <Step2
          walletData={walletData}
          userEncryptKey={userEncryptKey}
          setUserEncryptKey={setUserEncryptKey} />

        {/* >> Step 3: Get user's private key by decrypt userData based on user's encrypt key and user's passcode */}
        <Step3
          walletData={walletData}
          userEncryptKey={userEncryptKey}
          userPrivateKey={userPrivateKey}
          setUserPrivateKey={setUserPrivateKey}
        />

        {/* >> Step 4: Use user's private key for execute transaction */}
        <Step4
          walletData={walletData}
          userPrivateKey={userPrivateKey}
        />
      </div>
    </div>
  )
}

export default KeyringHardWalletImplementationSample