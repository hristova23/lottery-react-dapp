import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import { Box, Container, Stack } from "@mui/material";

function App() {
  return (
    <>
    <Navbar/>
    <Container maxWidth="sm">
      <Box>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar/>
          <Rightbar/>
        </Stack>
      </Box>
    </Container>
    </>
  );
}

export default App;