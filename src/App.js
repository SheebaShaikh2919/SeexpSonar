import { ColorModeContext,useMode } from './theme';
import { CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from './scenes/dashboard';
import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
// import Post from "./pages/Posts/Post";
import LoginRegister from "./pages/LoginRegister/LoginRegister";
import { AuthProvider } from './context/Auth';
import PrivateRoute from './common/guards/PrivateRoute';
import './App.css';


function App() {
  const [theme, colorMode] = useMode ();
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <AuthProvider>
    
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          {/* <PrivateRoute path='/Post' component={Post} /> */}
          <Route path="/LoginRegister" component={LoginRegister} />
          <Route exact path="*" component={Dashboard} />
        </Switch>
      </Router>
     
    </AuthProvider>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
