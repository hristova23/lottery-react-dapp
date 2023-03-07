import { Box } from '@mui/material'
import React from 'react'
import LotteryHistory from './LotteryHistory'
import PlayersList from './PlayersList'

function Rightbar({lotteryHistory, players}) {
  return (
    <Box sx={{ width: 'auto' }}> 
      <PlayersList players={players}/>
      <LotteryHistory lotteryHistory={lotteryHistory}/>
    </Box>
  )
}

export default Rightbar