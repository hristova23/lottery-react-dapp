import { Link, List, ListItem, ListItemText, Paper, Typography } from '@mui/material'
import React from 'react'

function LotteryHistory({lotteryHistory}) {
  return (
    <>
        <Typography 
            variant='h2'
            sx={{mt:4}}>
            Lottery History
        </Typography>
        <List sx={{
            maxHeight: 300,
            overflow: 'auto',
            borderRadius: 'sm',}}>
            {(lotteryHistory && lotteryHistory.length > 0) && lotteryHistory.map(lottery => {
                if(lottery.id != lotteryHistory.length)
                return <ListItem key={lottery.id}>
                <Paper elevation={3}>
                    <ListItemText
                    sx={{p:2}}
                    primary={`Lottery #${lottery.id} winner`}
                    secondary={<Link href={`https://etherscan.io/address/${lottery.address}`}>{lottery.address}</Link>}
                    />
                </Paper>
                </ListItem>
            })
            }
        </List>
    </>
  )
}

export default LotteryHistory