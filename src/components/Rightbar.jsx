import { Box, List, ListItem, ListItemText, Paper, Typography } from '@mui/material'
import React from 'react'

const playersList = [
  "0x17F6AD8Ef982297579C203069C1DbfFE4348c372",
  "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
  "0x0A098Eda01Ce92ff4A4CCb7A4fFFb5A43EBC70DC",
  "0x0A098Eda01Ce92ff4A4CCb7A4fFFb5A43EBC70DC",
  "0x0A098Eda01Ce92ff4A4CCb7A4fFFb5A43EBC70DC",
  "0x0A098Eda01Ce92ff4A4CCb7A4fFFb5A43EBC70DC",
  "0x0A098Eda01Ce92ff4A4CCb7A4fFFb5A43EBC70DC",
  "0x0A098Eda01Ce92ff4A4CCb7A4fFFb5A43EBC70DC",
  "0x0A098Eda01Ce92ff4A4CCb7A4fFFb5A43EBC70DC",
  "0x0A098Eda01Ce92ff4A4CCb7A4fFFb5A43EBC70DC",
  "0x0A098Eda01Ce92ff4A4CCb7A4fFFb5A43EBC70DC",
  "0x0A098Eda01Ce92ff4A4CCb7A4fFFb5A43EBC70DC",
  "0x0A098Eda01Ce92ff4A4CCb7A4fFFb5A43EBC70DC",
  "0x0A098Eda01Ce92ff4A4CCb7A4fFFb5A43EBC70DC",
  "0x0A098Eda01Ce92ff4A4CCb7A4fFFb5A43EBC70DC",
  "0x0A098Eda01Ce92ff4A4CCb7A4fFFb5A43EBC70DC",
  "0x0A098Eda01Ce92ff4A4CCb7A4fFFb5A43EBC70DC",
  "0x0A098Eda01Ce92ff4A4CCb7A4fFFb5A43EBC70DC",
  "0x0A098Eda01Ce92ff4A4CCb7A4fFFb5A43EBC70DC",
  "0x0A098Eda01Ce92ff4A4CCb7A4fFFb5A43EBC70DC",
  "0x0A098Eda01Ce92ff4A4CCb7A4fFFb5A43EBC70DC",
  "0x0A098Eda01Ce92ff4A4CCb7A4fFFb5A43EBC70DC",
  "0x0A098Eda01Ce92ff4A4CCb7A4fFFb5A43EBC70DC",
  "0x0A098Eda01Ce92ff4A4CCb7A4fFFb5A43EBC70DC",
  "0x0A098Eda01Ce92ff4A4CCb7A4fFFb5A43EBC70DC"
]

function Rightbar() {
  return (
    <Box sx={{ width: 'auto' }}>
      <Typography 
        variant='h2'
        sx={{my:4}}>
        Players
      </Typography>
      <List sx={{
        maxHeight: 300,
        overflow: 'auto',
        borderRadius: 'sm',
        }}>
        {
          playersList.map((player) => (
            <ListItem>
              <Paper elevation={3}>
                <ListItemText
                sx={{p:2}}
                primary={player}
                secondary="Secondary text"
                />
              </Paper>
            </ListItem>
          ))
        }
      </List>
      <Typography 
        variant='h2'
        sx={{my:4}}>
        Pot: 
      </Typography>
    </Box>
  )
}

export default Rightbar