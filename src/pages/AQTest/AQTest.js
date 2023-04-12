import { Box } from "@mui/material";
import React from "react";
import QuizGame from "../../component/QuizGame/Quiz"
import Topbar from "../../component/Dashboard/Topbar";
import Sidebar from "../../component/Dashboard/Sidebar";

const AQTest = () => {
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
        <QuizGame/>
       </Box>
    </Box>
    </main>
    </div>
  );
};

export default AQTest;
