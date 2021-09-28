import {HStack, Flex, Box, Spacer, Text, Link} from '@chakra-ui/react'

const Waves = ({allWaves}) => {
    
    return (
        <Flex 
            w={{base: '100%', md: '80%', xl:'80%'}}
            direction={{base: 'column', md:"row", xl:"row"}}
            my={10}
            mx={8}
            wrap="wrap"
            justify="center"
            align="center"
        >
            {allWaves.sort((a,b) => b.timestamp - a.timestamp).map((wave, index) => {
                return (
                <Flex
                    key={index} 
                    minW="280px"
                    maxW="300px"
                    minH="120px"
                    direction="column"
                    align="center"
                    bg="gray.600"
                    boxShadow="xl"
                    rounded="xl"
                    color="white"
                    m={4}
                >
                    <Text py={4} px={8} textAlign="center" fontSize={16} maxW="100%">{wave.message}</Text>
                    <Spacer/>
                    <HStack spacing={20} pb={4} justify="space-between" color="gray.300">
                        <Link 
                            href={`https://rinkeby.etherscan.io/address/0x272b0924D541fd0dFdE3Acb95bb20d3B5394c666?fromaddress=${wave.address}`} isExternal
                            textDecoration="underline"
                            fontWeight="bold"
                        >
                            🔎{wave.address.slice(-6)}
                        </Link>
                        <Text color="gray.300">{wave.timestamp.toString().slice(4,15)} </Text>
                    </HStack>
                </Flex>
                )
            })}
        </Flex>
    )
}

export default Waves
