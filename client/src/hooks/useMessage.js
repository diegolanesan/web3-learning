import {useState, useEffect} from 'react'

const useMessage = () => {
    const [message, setMessage] = useState("")
    const [isDisabled, setIsDisabled] = useState(true)

    useEffect(() => {
        message.length > 0 ? setIsDisabled(false) : setIsDisabled(true)
      }, [message])

    return {message, setMessage, isDisabled}
}

export default useMessage
