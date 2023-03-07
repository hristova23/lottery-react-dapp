import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";

import { useState, useEffect } from 'react'
import { Box, Container, Stack } from "@mui/material";

import Web3 from 'web3'
import lotteryContract from './blockchain/lottery'

function App() {
  const [web3, setWeb3] = useState()
  const [address, setAddress] = useState()
  const [lcContract, setLcContract] = useState()
  const [lotteryBalance, setBalance] = useState()
  const [lotteryPlayers, setPlayers] = useState()
  const [lotteryHistory, setLotteryHistory] = useState([])
  const [lotteryId, setLotteryId] = useState()
  const [errorMsg, setErrorMsg] = useState()
  const [successMsg, setSuccessMsg] = useState()

  useEffect(()=>{
    /* Check if local lottery contract exists */
    if(lcContract){
      getBalance()
      getPlayers()
      getHistory()
      getLotteryId()
    }
  },[lcContract])//recursive

  const getBalance = async () => {
    const balance = await lcContract.methods.getBalance().call() //using call since getBalance is read only func
    setBalance(web3.utils.fromWei(balance, 'ether'))
  }

  const getPlayers = async () => {
    const players = await lcContract.methods.getPlayers().call()
    setPlayers(players)
  }

  const getHistory = async (id) => {
    setLotteryHistory([])
    for(let i = parseInt(id); i > 0; i--){
      const winnerAddress = await lcContract.methods.lotteryHistory(i).call();
      const currLottery = {};
      currLottery.id = i;
      currLottery.address = winnerAddress;
      setLotteryHistory(lotteryHistory => [...lotteryHistory, currLottery])
    }
  }

  const getLotteryId = async () => {
    const lotteryId = await lcContract.methods.lotteryId().call()
    setLotteryId(lotteryId)
    await getHistory(lotteryId)
  }

  const enterLotteryHandler = async () => {
    try {
      await lcContract.methods.enter().send({
        from: address,
        value: '15000000000000000',
        gas: 300000,
        gasPrice: null
      })
    } catch(err) {
      setErrorMsg(err.message)
    }
  }

  const pickWinnerHandler = async () => {
    try {
      await lcContract.methods.pickWinner().send({
        from: address,
        gas: 300000,
        gasPrice: null
      })
    } catch(err) {
      setErrorMsg(err.message)
    }
  }

  const connectWalletHandler = async () =>{
    setErrorMsg('')
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

        window.ethereum.on('accountsChanged', async () => {
          const accounts = await web3.eth.getAccounts()
          console.log(accounts[0])
          /* set account 1 to React state */
          setAddress(accounts[0])
        })
      } catch(err) {
        setErrorMsg(err.message)
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
          <Sidebar lotteryBalance={lotteryBalance} enterLotteryHandler={enterLotteryHandler} pickWinnerHandler={pickWinnerHandler} errorMsg={errorMsg} successMsg={successMsg}/>
          <Rightbar lotteryHistory={lotteryHistory} players={lotteryPlayers}/>
        </Stack>
      </Box>
    </Container>
    </>
  );
}

export default App;