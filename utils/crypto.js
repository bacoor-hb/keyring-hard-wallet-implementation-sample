import { ethers } from 'ethers'
import crypto from 'crypto-js'


export const isObject = (data) => {
  return data && typeof data === 'object'
}

const jsonStr2Obj = (strObj) => {
  try {
    if (isObject(strObj)) {
      return strObj
    }
    return JSON.parse(strObj)
  } catch (e) {
    return false
  }
}

export default class cryptoUtils {

  static decryptData = (encryptedData, encryptKey) => {
    try {
      return crypto.AES.decrypt(encryptedData.toString(), encryptKey).toString(crypto.enc.Utf8)
    } catch (error) {
      return false
    }
  }

  static isValidPrivateKey(value) {
    if (ethers.utils.isHexString(value)) {
      return true
    } else {
      if (value.length === 64) {
        return ethers.utils.isHexString(`0x${value}`)
      }
      return false
    }
  }


  static isValidWalletFormat = (walletFileContent) => {
    const fileEncryptKey = process.env.NEXT_PUBLIC_FILE_ENCRYPT_KEY
    const fileContentObj = jsonStr2Obj(cryptoUtils.decryptData(walletFileContent, fileEncryptKey))

    const isValidFormatFile = (
      !!fileContentObj?.cardId &&
      !!fileContentObj?.nfcData?.userUrl &&
      !!fileContentObj?.nfcData?.userAddress &&
      !!fileContentObj?.nfcData?.userData
    )


    return isValidFormatFile
  }

  static getFormatWalletData = (walletFileContent) => {
    if (cryptoUtils.isValidWalletFormat(walletFileContent)) {
      const fileEncryptKey = process.env.NEXT_PUBLIC_FILE_ENCRYPT_KEY
      const fileContentObj = jsonStr2Obj(cryptoUtils.decryptData(walletFileContent, fileEncryptKey))
      // {
      //   userUrl: '',
      //   userAddress: '',
      //   userData: ''
      // }
      return fileContentObj.nfcData
    } else {
      return false
    }
  }

  static formatUserPasscode = (passcode, userEncryptKey) => {
    return `${passcode}${userEncryptKey}${process.env.NEXT_PUBLIC_FILE_ENCRYPT_KEY}`
  }
}

