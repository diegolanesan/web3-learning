import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import { ethers } from "ethers";
import contractABI from '../utils/WavePortal.json'
import { Box, Flex, Button, Input, Stack, VStack, Heading } from '@chakra-ui/react'
import { checkIfWalletIsConnected } from '../utils/checkIfWalletIsConnected';
import { connectWallet } from '../utils/connectWallet';
import { wave } from '../utils/wave';
import { getAllWaves } from '../utils/getAllWaves';
import useMessage from '../hooks/useMessage';
import useEthereum from '../hooks/useEthereum';
import Header from '../components/Header';
import Waves from '../components/Waves';

const Index = () => {
  const {currentAccount, setCurrentAccount} = useEthereum()
  const {message, setMessage, isDisabled} = useMessage()
  const [allWaves, setAllWaves] = useState([])

  useEffect(() => {
    if(currentAccount) {
      getAllWaves(setAllWaves)
    }
  }, [currentAccount])
  return (
    <>
    <Head>
          <title>Web3 Learning</title>
        </Head>
    <Flex
    direction="column"
    alignItems="center"
    justifyContent="flex-start"
    bg="gray.800"
    w="100%"
    minH="100vh"
    >
      <Header currentAccount={currentAccount} setCurrentAccount={setCurrentAccount} connectWallet={connectWallet}/>
      <Box direction="column" align="center">
        <Heading size="2xl" mb={6}> 👨‍🚀️ </Heading> 
        <Heading as="h1" size="xl" color="white"> Web3 Learning </Heading>
      </Box>

      <Heading as="h2" mt={6} mx={6} color="white" fontSize="lg" fontWeight="thin" textAlign="center">
        Connect your wallet to discover what others are working on in the Web3 space and share your learning goal! 🚀
      </Heading>
        <Stack spacing={4} mt={12} w={{base: "80%", md:"40%", xl:"25%"}}>
          <Input placeholder="Enter your learning goal" onChange={(e) => setMessage(e.target.value)} bg="white" rounded="2xl"/>
            <Button bg="cyan.400" colorScheme="cyan" rounded="2xl" onClick={() => wave(message)} isDisabled={isDisabled}>
              Share my goal!
            </Button>
        </Stack>
        <Waves allWaves={allWaves}/>
    </Flex>
    </>
  )
  
}

export default Index
