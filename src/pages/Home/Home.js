import { Box } from "@mui/material";
import React from "react";
import Header from "../../component/Header"
import Topbar from "../../component/Dashboard/Topbar";
import Sidebar from "../../component/Dashboard/Sidebar";
import Tapping from "../../component/TappingGame/Tapping";
import Container from '@mui/material/Container';

const Home = () => {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);

  return (
    <div className="app">
    <Sidebar />
      <main className='content'>
        <Topbar />
    <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            // alignItems: 'center',
          }}>
      {/* HEADER */}
      {/* <Box display="flex" justifyContent="space-between" alignItems="center"> */}
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        {/* <Container maxWidth="xl" sx={{ mt: 2, mb: 2 }}>
                      <Tapping/>
            </Container> */}
       </Box>
    {/* </Box> */}
    </main>
    </div>
  );
};

export default Home;
