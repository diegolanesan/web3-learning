import { Flex, Button } from "@chakra-ui/react"

const Header = ({currentAccount, setCurrentAccount, connectWallet}) => {
    return (
        <Flex 
            justify="flex-end" 
            w="90%"
            h={10}
            my={6}
        >
          {!currentAccount && (
            <Button 
                colorScheme="orange" 
                bg="orange.400"
                rounded="3xl"
                onClick={() => connectWallet(setCurrentAccount)}   
            >
               Connect wallet
            </Button>
          )}
        </Flex>
    )
}

export default Header
