import { Box, Typography } from '@mui/material'
import React from 'react'
import LotteryHistory from './LotteryHistory'
import PlayersList from './PlayersList'

function Rightbar() {
  return (
    <Box sx={{ width: 'auto' }}>
      <LotteryHistory />
      <PlayersList />
    </Box>
  )
}

export default Rightbar