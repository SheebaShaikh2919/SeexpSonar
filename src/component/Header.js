import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
// import React, { useState, useEffect, useContext } from "react";
// import Axios from "axios";
// import { AuthContext } from '../../context/Auth';

const Header = ({ title, subtitle }) => {
  // const { currentUser } = useContext(AuthContext);

  // const [aqData, setAQData] = useState("");
  // const [ftData, setFTData] = useState("");
  // const [ejData, setEJData] = useState("");
  // const [bfData, setBFData] = useState("");
  // const [mtData, setMTData] = useState("");
  // const [bcData, setBCData] = useState("");


  // useEffect(() => {
  //   getAqData(currentUser.email);
  //   getFTData(currentUser.email);
  //   getEJata(currentUser.email);
  //   getBFData(currentUser.email);
  //   getMTData(currentUser.email);
  //   getBCData(currentUser.email);
  // }, [currentUser]);


  // const getAqData = () => {
  //   Axios
  //   .get(`https://fun-games-c4f99-default-rtdb.firebaseio.com/aqtest/${userId}.json`)
  //   .then((response) => {
  //     setAQData(response.data);
  //   })
  //   .catch((error) => console.log(error));
  // };

  // const getFTData = () => {
  //   Axios
  //   .get(`https://fun-games-c4f99-default-rtdb.firebaseio.com/aqtest/${userId}.json`)
  //   .then((response) => {
  //     setFTData(response.data);
  //   })
  //   .catch((error) => console.log(error));
  // };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;