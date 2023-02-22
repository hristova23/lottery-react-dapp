import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function Sidebar() {
  return (
    <Box sx={{mt:4}}>
      <Box sx={{mt:2}}>
        <Typography variant='h5'>Enter the lottery by sending 0.01 Ether: </Typography>
        <Button variant="contained">Enter now</Button>
      </Box>
      <Box sx={{mt:2}}>
        <Typography variant='h5'>Admin only: Pick a winner:</Typography>
        <Button variant="contained">Pick winner    </Button>
      </Box>
    </Box>
  )
}

export default Sidebar