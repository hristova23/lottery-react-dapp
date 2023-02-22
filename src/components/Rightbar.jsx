import { Box, Typography } from '@mui/material'
import React from 'react'
import LotteryHistory from './LotteryHistory'
import PlayersList from './PlayersList'

function Rightbar() {
  return (
    <Box sx={{ width: 'auto' }}>
      <LotteryHistory />
      <PlayersList />
      <Typography 
        variant='h2'
        sx={{my:4}}>
        Pot: 0.28 Ether
      </Typography>
    </Box>
  )
}

export default Rightbar