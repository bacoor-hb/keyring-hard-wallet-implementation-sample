import { useState } from 'react'
import MyButton from '../../../components/Button'
import cryptoUtils from '../../../utils/crypto'
import BoxVerifyPasscode from '../../../components/BoxVerifyPasscode'

/**
 *
 * Step 3: Get user's private key by decrypt userData based on user's encrypt key + user's passcode
 */
const Step3 = ({
  walletData,
  userEncryptKey,
  userPrivateKey,
  setUserPrivateKey
}) => {
  const [errorGetPrivateKey, setError] = useState(false)
  const { userData } = walletData || {}

  const handleDecryptDataForGetPrivateKey = (passcode) => {
    const userPrivateKey = cryptoUtils.decryptData(userData, cryptoUtils.formatUserPasscode(passcode, userEncryptKey))
    if (cryptoUtils.isValidPrivateKey(userPrivateKey)) {
      setUserPrivateKey(userPrivateKey)
      setError(false)
    } else {
      setUserPrivateKey('')
      setError(true)
    }
  }

  return (
    <div className='w-full flex flex-col mt-16'>
      <div className='flex flex-col'>
        <span className='font-bold'>Step 3: Get the private key of the user by decrypting "userData", based on the user's encrypted key and user's passcode</span>
        <span className='font-bold'>ステップ3: ユーザーの暗号化キーに基づいて、"userData"を復号化してユーザーの秘密鍵を取得する</span>
      </div>

      <BoxVerifyPasscode
          isDisabled={!userEncryptKey}
          invalidPasscode={errorGetPrivateKey}
          callbackDone={handleDecryptDataForGetPrivateKey}
        />

      <div className='mt-4'>
        <span className='font-[500]'>User's Private Key</span>
        <pre className='text-[12px] p-1 mt-1 bg-zinc-100 overflow-x-auto w-auto rounded-sm'>
          {
            userPrivateKey || '-'
          }
        </pre>
      </div>
    </div>
  )
}

export default Step3
