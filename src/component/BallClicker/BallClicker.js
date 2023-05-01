import React, { useState, useEffect, useContext } from 'react';
import Axios from "axios";
import { AuthContext } from '../../context/Auth';
import { blue } from '@mui/material/colors';

const BallClicker = () => {

  const { currentUser } = useContext(AuthContext);
  const [postData, setPostData] = useState("");
  const userId = currentUser.uid;

  useEffect(() => {
    getPostData(currentUser.email);
  }, [currentUser]);

  const getPostData = () => {
    Axios
      .get(`https://fun-games-c4f99-default-rtdb.firebaseio.com/Balltest/${userId}.json`)
      .then((response) => {
        setPostData(response.data);
      })
      .catch((error) => console.log(error));
  };


  const [score, setScore] = useState(0);
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  const [objectVisible, setObjectVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!objectVisible) {
    setPosition({
      x: Math.floor(Math.random() * (500 - 300 + 1) + 300),
      y: Math.floor(Math.random() *  (500 - 300 + 1) + 300)
    });
    setObjectVisible(true);
  }

  // function randomIntFromInterval(min, max) { // min and max included 
  //   return Math.floor(Math.random() * (max - min + 1) + min)
  // }
  
  // const rndInt = randomIntFromInterval(0, 100)
  // console.log(rndInt)

  function handleGameClick() {
    // console.log("thandleGameClickest");
    if (objectVisible) {
      setScore(score + 1);
      setObjectVisible(false);
    }
  };

  return (
    <>
      <div className="row justify-content-start">
        <div className="col-lg-8">
          <div className="border shadow p-4">
            <div onClick={handleGameClick}>
              <p>
                Score:
                {score}
              </p>

              {objectVisible && <div style={{
                position: 'absolute',
                left: position.x,
                top: position.y,
                width: '50px',
                height: '50px',
                backgroundColor: 'green',
                borderRadius: '50%'
              }}></div>}
            </div>
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
                        <th scope="row">{index + 1}trail</th>
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

export default BallClicker