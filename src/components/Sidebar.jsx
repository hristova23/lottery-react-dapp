import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function Sidebar({lotteryBalance, enterLotteryHandler, errorMsg, successMsg}) {
  return (
    <Box sx={{mt:4}}>
      <Box sx={{mt:2}}>
        <Typography variant='h5'>Enter the lottery by sending 0.01 Ether: </Typography>
        <Button onClick={enterLotteryHandler} variant="contained">Enter now</Button>
      </Box>
      <Box sx={{mt:2}}>
        <Typography variant='h5'>Admin only: Pick a winner:</Typography>
        <Button variant="contained">Pick winner    </Button>
      </Box>
      <Typography 
        variant='h2'
        sx={{my:4}}>
        Pot: {lotteryBalance} Ether
      </Typography>
      <Typography
        variant='p'
        color='error'>
          {errorMsg}
      </Typography>
      <Typography
        variant='p'
        color="success.main">
          {successMsg}
      </Typography>
    </Box>
  )
}

export default Sidebar