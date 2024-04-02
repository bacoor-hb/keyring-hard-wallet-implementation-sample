
import { useFilePicker } from 'use-file-picker'
import cryptoUtils from '../../../utils/crypto'
import MyButton from '../../../components/Button'

/**
 *
 * Step 1: Get keyring-hard-wallet file content
 */
const Step1 = ({
  walletData,
  setWalletData
}) => {
  const [openFileSelector, { filesContent, loading }] = useFilePicker({
    accept: '.json',
    multiple: false,
    limitFilesConfig: { max: 1 },
    onFilesSuccessfulySelected: ({ plainFiles, filesContent }) => {
      handleFilesSuccessfulySelected(filesContent)
    }
  })

  const handleFilesSuccessfulySelected = (filesContent) => {
    const fileContent = filesContent?.[0]?.content || ''

    const walletDataFormated = cryptoUtils.getFormatWalletData(fileContent)
    setWalletData(walletDataFormated)
  }

  return (
    <div className='w-full flex flex-col mt-10'>
      <div className='flex flex-col'>
        <span className='font-bold'>Step 1: Read the content of KEYRING HARD WALLET connection json file</span>
        <span className='font-bold'>ステップ1: KEYRING HARD WALLET 接続 json ファイルの内容を読み取る</span>
      </div>

      <div className='mt-2'>
        <MyButton
          label={'Select "keyring-hard-wallet-file"'}
          onClick={openFileSelector} />
        <span className='text-sm italic'>/public/keyring-hard-wallet-file-sample.json</span>
      </div>

      <div className='mt-2'>
        <span className='font-[500]'>keyring-hard-wallet Data</span>
        <pre className='text-[12px] p-1 mt-1 bg-zinc-100 overflow-x-auto rounded-sm'>
          {
            walletData
              ? JSON.stringify(walletData, null, 2)
              : (
                walletData === false ? (
                  <span className='text-red-500'>Incorrect keyring-hard-wallet file format!</span>
                ) : '-'
              )
          }
        </pre>
      </div>
    </div>
  )
}

export default Step1
