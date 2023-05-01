import React, { useState, useEffect, useContext } from 'react';
import Axios from "axios";
import { AuthContext } from '../../context/Auth';
import GameBoard from "../../component/MemoryGame/GameBoard/GameBoard";
import Navbar from "../../component/MemoryGame/Navbar/Navbar";
import ScoreBoard from "../../component/MemoryGame/ScoreBoard/ScoreBoard";
import StartButton from "../../component/MemoryGame/StartButton/StartButton";
import ModalMessage from "../../component/MemoryGame/ModalMessage/ModalMessage";
import { DataProvider } from "../../GameContext";
import DataContext from "../../GameContext";
import InstructionsModal from "../../component/MemoryGame/ModalMessage/Instructions";


const MGame = () => {

    const {gameLevel} = useContext(DataContext)


    const { currentUser } = useContext(AuthContext);
    const [postData, setPostData] = useState("");
    const userId = currentUser.uid;

    useEffect(() => {
        getPostData(currentUser.email);
    }, [currentUser]);

    const getPostData = () => {
        Axios
            .get(`https://fun-games-c4f99-default-rtdb.firebaseio.com/memorytest/${userId}.json`)
            .then((response) => {
                setPostData(response.data);
            })
            .catch((error) => console.log(error));
    };


    return (
        <>
            <div className="row justify-content-start">
                <div className="col-lg-8">
                    <div className="border shadow p-4">
                        <DataProvider>
                            {/* <Navbar /> */}
                            <ScoreBoard />
                            <GameBoard />
                            <StartButton />
                            <ModalMessage />
                            <InstructionsModal />
                        </DataProvider>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="border p-4 shadow">
                        <h4 className="">Score</h4>
                        {postData ?
                            <table class="table table-striped table-hover table-bordered border-primary">
                                <thead>
                                    <tr>
                                        <th scope="col"><h6>No of Trails</h6></th>
                                        <th scope="col"><h6>Total Score</h6></th>
                                        <th scope="col"><h6>Your Score</h6></th>
                                        <th scope="col"><h6>Status</h6></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(postData).map((item, index) => {
                                        return (
                                            <tr key={item[1]}>
                                                <th scope="row">{gameLevel}trail</th>
                                                <td>10</td>
                                                <td>{item[1].score}</td>
                                                <td>{item[1].status == 1 ? <span className="text-success">Non Autistic</span> : <span className="text-danger">Autistic</span>}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                          : <span className="noTaskAdded p-5">To View Score Play the game</span>}

                    </div>
                </div>
            </div>
        </>
    )
}

export default MGame