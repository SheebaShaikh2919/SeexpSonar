import React, { useState, useEffect, useContext } from 'react';
import Axios from "axios";
import { AuthContext } from '../../context/Auth';

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

  // const handleGameClick = () => {
  //   if (objectVisible) {
  //     setScore(score + 1);
  //     setObjectVisible(false);
  //   }
  // };

  function handleGameClick() {
    console.log("thandleGameClickest");
    if (objectVisible) {
      setScore(score + 1);
      setObjectVisible(false);
    }
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.floor(Math.random() * window.innerWidth),
        y: Math.floor(Math.random() * window.innerHeight)
      });
      setObjectVisible(true);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="row justify-content-start">
        <div className="col-lg-8">
          <div className="border shadow p-4">
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