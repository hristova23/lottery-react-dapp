import { Link, List, ListItem, ListItemText, Paper, Typography } from '@mui/material'
import React from 'react'

function PlayersList({players=[]}) {
  return (
    <>
    <Typography 
        variant='h2'
        sx={{mt:4}}>
        Players({players.length})
    </Typography>
    <List sx={{
        maxHeight: 300,
        overflow: 'auto',
        borderRadius: 'sm',
        }}>
        {
        players.map((player, index) => (
            <ListItem key={`${player}-${index}`}>
            <Paper elevation={3}>
                <ListItemText
                sx={{p:2}}
                secondary={<Link href={`https://etherscan.io/address/${player}`}>{player}</Link>}
                />
            </Paper>
            </ListItem>
        ))
        }
    </List>
    </>
  )
}

export default PlayersList