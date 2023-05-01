import { Box, Typography } from "@mui/material";
import React from "react";
import GameBoard from "../../component/MemoryGame/GameBoard/GameBoard";
import Navbar from "../../component/MemoryGame/Navbar/Navbar";
import ScoreBoard from "../../component/MemoryGame/ScoreBoard/ScoreBoard";
import StartButton from "../../component/MemoryGame/StartButton/StartButton";
import ModalMessage from "../../component/MemoryGame/ModalMessage/ModalMessage";
import { DataProvider } from "../../GameContext";
import InstructionsModal from "../../component/MemoryGame/ModalMessage/Instructions";
import Topbar from "../../component/Dashboard/Topbar";
import Sidebar from "../../component/Dashboard/Sidebar";
import Container from "@mui/material/Container";


const AQTest = () => {
    // const theme = useTheme();
    // const colors = tokens(theme.palette.mode);

    return (
        <div className="app">
            <Sidebar />
            <main className='content'>
                <Topbar />
                {/* <Box sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    // alignItems: 'center',
                }}> */}
                <Container maxWidth="xl" sx={{ mt: 2, mb: 2 }}>
                    <DataProvider>
                        {/* <Navbar /> */}
                        <ScoreBoard />
                        <GameBoard />
                        <StartButton />
                        <ModalMessage />
                        <InstructionsModal />
                    </DataProvider>
                </Container>
                {/* </Box> */}
            </main>
        </div>
    );
};

export default AQTest;
