import {useState} from 'react'

const useInput = () => {
  const [value, setValue] = useState('')

  return {
    value,
    onChange: setValue,
  }
}

export default useInput
