import { Box } from "@mui/material";
import React from "react";
import Topbar from "../../component/Dashboard/Topbar";
import Sidebar from "../../component/Dashboard/Sidebar";
import Tapping from "../../component/TappingGame/Tapping";

const FingerTapping = () => {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);

  return (
    <div className="app">
    <Sidebar />
      <main className='content'>
        <Topbar />
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Tapping/>
       </Box>
    </Box>
    </main>
    </div>
  );
};

export default FingerTapping;
