import React, { useState, useEffect, useContext } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Axios from "axios";
import { AuthContext } from '../../context/Auth';

function Tapping() {
    const { currentUser } = useContext(AuthContext);

    const [count, setCount] = useState(0);
    const [score, setScore] = useState(0);

    const [isPostAdded, setIsPostAdded] = useState(false);

    const [timer, setTimer] = useState(0);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [refresh, setRefresh] = useState(false);

    const [postData, setPostData] = useState("");

    const [average, setAverage] = useState(0);
    const [timerStarted, settimerStarted] = useState(0);

    const [submitDisabled, setSubmitDisabled] = useState(false);




  const userId = currentUser.uid;
 
    // to Hide past date
    var today = new Date();
    var month,
      day = null;
    if (today.getMonth() < 10 || today.getDate() < 10) {
      month = "0" + (today.getMonth() + 1);
      day = "0" + today.getDate();
    }
    var date = today.getFullYear() + "-" + month + "-" + day;

    useEffect(() => {
      setIsPostAdded(false);
      getPostData(currentUser.email);
    }, [isPostAdded, currentUser]);

    const startTimmer = () => {
      const interval = setInterval(() => {
        setTimer(timer => timer + 1);
      }, 1000);
  
      setTimeout(() => {
        clearInterval(interval);
        setTimer(0);
        setButtonDisabled(true);
      }, 10000);
  
      return () => clearInterval(interval);
    }

    const getPostData = (email) => {
      Axios
      .get(`https://fun-games-c4f99-default-rtdb.firebaseio.com/fingertapping/${userId}.json`)
      .then((response) => {
        setPostData(response.data);
        // console.log(Object.entries(response.data).length);
        // settrailCount(Object.entries(response.data).length);
        var grandTotal = 0;
        Object.entries(response.data).map((item) => {
          grandTotal += item[1].score;
        })
        setAverage(grandTotal/Object.entries(response.data).length);
        // console.log(response);
        if(Object.entries(response.data).length >= 3){
          setSubmitDisabled(true);
        }
      })
      .catch((error) => console.log(error));
  };

// to Add and Edit cardData in DB
  const handleAddPostData = () => {
  //   check if all input is taken
    //  if user wants to add a new card
      Axios
      .post(`https://fun-games-c4f99-default-rtdb.firebaseio.com/fingertapping/${userId}.json`,
        {
          score: count,
          status: count > 50 ? 1 : 0,
          user: currentUser.email,
          Timestamp: new Date().toUTCString(),
        }
      )
        .then((response) => {
          alert("score added succesfully");
          window.location.reload();
          setIsPostAdded(true);
        })
        .catch((error) => console.log("Error" + error));
  };


    const handleButtonClick = () => {
      if(timerStarted == 0){
        startTimmer();
        settimerStarted(1)
      }
      setCount(count => count + 1);
      
    };

    const handleRefreshClick = () => {
        setCount(0);
        window.location.reload();
      };


  
    return (
      <>
      <Card>
      <CardContent>
      <Typography variant="h5" sx={{ fontSize: 80 }} component="div">
        Timer: {timer}s
        </Typography>
        <Typography sx={{ fontSize: 120 }} color="text.secondary" gutterBottom>
        Counter: {count}
        </Typography>
      </CardContent>
      <CardActions>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" sx={{ fontSize: 30 }} color="success" onClick={handleButtonClick} disabled={buttonDisabled}>
          Tap me
        </Button>
        <Button variant="contained" sx={{ fontSize: 30 }} color="success" onClick={handleRefreshClick}>Reset</Button>
        <Button variant="contained" sx={{ fontSize: 30 }} color="success" onClick={handleAddPostData} disabled={submitDisabled}>Submit Score</Button>
        </Stack>
      </CardActions>
    </Card>

    <Card>
    <Typography variant="h5" sx={{ fontSize:40 }} component="div">
             {/* total : {average} */}
              Total : {(average).toFixed(0)}
            </Typography>
      <CardContent>
      {postData ?
        Object.entries(postData).map((item) => {
        //  {console.log(item[1].score)}
          // const average = (item[1].score);
          return (
          <>      
            <Typography variant="h5" sx={{ fontSize:40 }} component="div">
             {/* total : {average} */}
              Score : {item[1].score}
            </Typography>
            <Typography sx={{ fontSize: 40 }} color="text.secondary" gutterBottom>
              status: {item[1].status == 1 ? "authestic" : "non authestic"}
            </Typography>
          </>
         )} ) : <span className="noTaskAdded p-5">To View Score Play the game</span>}
      </CardContent>
    </Card>
    </>
    );  
}

export default Tapping;