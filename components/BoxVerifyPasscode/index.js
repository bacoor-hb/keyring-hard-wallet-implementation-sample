import React, { useEffect, useRef, useState } from 'react'
import PinInput from 'react-pin-input'


const BoxVerifyPasscode = (props) => {
  const refInput = useRef()
  const refTitle = useRef()
  const { callbackDone, invalidPasscode, isDisabled } = props
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(false)
  }, [])
  // useEffect(() => {
  //   refInput && refInput.current.focus()
  // }, [refInput])

  return (
    <div className=' border-zinc-400 flex shrink-0 max-w-[100%] lg:max-w-[50%] flex-col justify-start items-center py-4 my-4 border-2 rounded-md'>
      <p className='text-primary text-center text-title font-bold mb-4'>Enter passcode</p>

      <p ref={refTitle} className='text-grey text-center mt-15 mb-15 text-gray-400'>A passcode is required to proceed</p>

      <div className='flex justify-center mt-2' style={{ position: 'relative', opacity: loading ? 0.5 : 1 }}>

        {
          loading && (
            <div style={{ position: 'absolute', top: '10px' }}>
              <span>Verifying...</span>
            </div>
          )
        }

        <PinInput
          disabled={loading || isDisabled}
          style={{ width: '100%', display: 'flex', justifyContent: 'center', opacity: loading || isDisabled ? '0.5' : '1'}}
          inputStyle={{
            display: 'flex',
            flexDirection: 'row',
            border: '1px solid rgba(108, 117, 126, 0.20)',
            borderRadius: '6px',
            marginLeft: '5px',
            marginRight: '5px',
            fontSize: '22px',
            width: '50px',
            height: '50px'
          }}
          length={6}
          secret
          secretDelay={100}
          type='numeric'
          inputMode='decimal'
          autoSelect={false}
          ref={refInput}
          onComplete={(value, index) => {
            setLoading(true)
            setTimeout(async () => {
              refInput && refInput.current.clear()
              refInput && refInput.current.focus()
              callbackDone && await callbackDone(value)

              setLoading(false)
            }, 300)
          }}
        />
      </div>

      {
        invalidPasscode && (
          <div className='flex justify-center mt-4'>
            <span className='text-red-500'>{'Passcode does not match'}</span>
          </div>
        )
      }

    </div>
  )
}

export default BoxVerifyPasscode
