import { Box } from '@mui/material'
import React from 'react'
import LotteryHistory from './LotteryHistory'
import PlayersList from './PlayersList'

function Rightbar({players}) {
  return (
    <Box sx={{ width: 'auto' }}> 
      <PlayersList players={players}/>
    </Box>
  )
}

export default Rightbar