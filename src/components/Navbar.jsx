import { Link } from '@mui/icons-material'
import { useState } from 'react'
import Web3 from 'web3'
import { AppBar, Button, styled, Toolbar, Typography } from '@mui/material'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  height: "64px"
})

export default function Navbar() {
  const [web3, setWeb3] = useState()
  const [address, setAddress] = useState()

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
      } catch(err) {
        console.log(err.message)
      }
    }else{
      console.log("Please install MetaMask!")
    }
  }

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6">
            Lottery
        </Typography>
        <Button onClick={connectWalletHandler} variant="contained" color="success" endIcon={<Link />}>
            Connect Wallet    
        </Button>
      </StyledToolbar>
    </AppBar>
  )
}