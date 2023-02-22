import { Link } from '@mui/icons-material'
import { AppBar, Button, styled, Toolbar, Typography } from '@mui/material'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  height: "64px"
})

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6">
            Lottery
        </Typography>
        <Button variant="contained" color="success" endIcon={<Link />}>
            Connect Wallet    
        </Button>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar