import { Link } from '@mui/icons-material'
import { AppBar, Button, styled, Toolbar, Typography } from '@mui/material'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  height: "64px"
})

export default function Navbar({connectWalletHandler}) {
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