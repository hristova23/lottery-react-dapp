import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import { Box, Container, Stack } from "@mui/material";

import { useState, useEffect } from 'react'
import Web3 from 'web3'
import lotteryContract from './blockchain/lottery'

function App() {
  const [web3, setWeb3] = useState()
  const [address, setAddress] = useState()
  const [lcContract, setLcContract] = useState()
  const [lotteryBalance, setLotteryBalance] = useState()

  useEffect(()=>{
    /* Check if local lottery contract exists */
    if(lcContract){
      getBalance()
    }
  },[lcContract, lotteryBalance])

  const getBalance = async () => {
    const balance = await lcContract.methods.getBalance().call() //using call since getBalance is read only func
    setLotteryBalance(web3.utils.fromWei(balance, 'ether'))
  }

  const connectWalletHandler = async () =>{
    //check if in browser enviroment && MetaMask is installed
    if(typeof window != "undefined" && typeof window.ethereum != "undefined"){
      try {
        /* request wallet connection */
        await window.ethereum.request({ method: "eth_requestAccounts"})
        /* create web3 instance & set to state */
        const web3 = new Web3(window.ethereum)
        /* set web3 instance in React state */
        setWeb3(web3)
        /* get list of accounts */
        const accounts = await web3.eth.getAccounts()
        /* set account 1 to React state */
        setAddress(accounts[0])

        /* create local contract copy */
        const lc = lotteryContract(web3)
        setLcContract(lc)

      } catch(err) {
        console.log(err.message)
      }
    }else{
      console.log("Please install MetaMask!")
    }
  }

  return (
    <>
    <Navbar connectWalletHandler={connectWalletHandler}/>
    <Container maxWidth="lg">
      <Box>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar lotteryBalance={lotteryBalance}/>
          <Rightbar/>
        </Stack>
      </Box>
    </Container>
    </>
  );
}

export default App;