import { Box } from "@mui/material";
import React from "react";
import { styled, useTheme } from '@mui/material/styles';
import Topbar from "../../component/Dashboard/Topbar";
import Sidebar from "../../component/Dashboard/Sidebar";
import Tapping from "../../component/TappingGame/Tapping";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const FingerTapping = () => {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);

  return (
    <div className="app">
    <Sidebar />
      <main className='content'>
        <Topbar />
        {/* <Box m="20px">
        <Box  sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          }}>
              <Tapping/>
        </Box>
    </Box> */}
        <Box  sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          {/* <Box component="main"> */}
            <Container maxWidth="xl" sx={{ mt: 2, mb: 2 }}>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                      <Tapping/>
                </Grid>
            </Container>
          {/* </Box> */}
        </Box>
    </main>
    </div>
  );
};

export default FingerTapping;
