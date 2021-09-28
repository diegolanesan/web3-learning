import {useState, useEffect} from 'react'
import { checkIfWalletIsConnected } from '../utils/checkIfWalletIsConnected'

const useEthereum = () => {
    const [currentAccount, setCurrentAccount] = useState("")

    useEffect(() => {
        checkIfWalletIsConnected()
        .then(account => {
            setCurrentAccount(account)
        })
      }, [])

    return { currentAccount, setCurrentAccount}
}



export default useEthereum

