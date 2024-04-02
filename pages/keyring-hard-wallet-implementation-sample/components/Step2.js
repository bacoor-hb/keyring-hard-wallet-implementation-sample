import { useState } from 'react'
import MyButton from '../../../components/Button'

/**
 *
 * Step 2: Get user's encrypt key from api
 */
const Step2 = ({
  walletData,
  userEncryptKey = '',
  setUserEncryptKey
}) => {
  const { userAddress } = walletData || {}

  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleGetEncryptKey = async () => {
    try {
      setLoading(true)

      const apiGetKeyPath = `${process.env.NEXT_PUBLIC_KEYRING_HARD_WALLET_API}/get-key`
      const params = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.NEXT_PUBLIC_KEYRING_HARD_WALLET_API_KEY,
        },
        body: JSON.stringify({ address: walletData.userAddress }),
      }
      const postResponse = await fetch(apiGetKeyPath, params)
      const userEncryptInfo = await postResponse.json()

      setLoading(false)
      setUserEncryptKey(userEncryptInfo?.data?.encryptKey)

      if (!userEncryptInfo?.data?.encryptKey) {
        setErrorMessage('User not found!')
      }
    } catch (error) {
      setLoading(false)
      setErrorMessage('Network error, please try again later!')
    }
  }

  return (
    <div className='w-full flex flex-col mt-16'>
      <div className='flex flex-col'>
        <span className='font-bold'>Step 2: Get the encrypt key of a user, based on the user's address and KEYRING HARD WALLET API key</span>
        <span className='font-bold'>ステップ2: ユーザーのアドレスとKEYRING HARD WALLET APIキーに基づいて、ユーザーの暗号化キーを取得する</span>
      </div>

      <div className='mt-2'>
        <MyButton
          label='Get Encrypt Key'
          disabled={!userAddress}
          onClick={handleGetEncryptKey} />
      </div>

      <div className='mt-4'>
        <span className='font-[500]'>User's Encrypt Key</span>
        <pre className='text-[12px] p-1 mt-1 bg-zinc-100 overflow-x-auto w-auto rounded-sm'>
          {
            loading
              ? <span>Loading...</span>
              : errorMessage
                ? <span className='text-red-500'>{errorMessage}</span>
                : userEncryptKey || '-'
          }
        </pre>
      </div>

    </div>
  )
}

export default Step2
