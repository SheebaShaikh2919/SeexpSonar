// import React from 'react'
// import { Box } from "@mui/material";
// import React from "react";
// import Header from "../../component/Header"
// import Topbar from "../global/Topbar";
// import Sidebar from "../global/Sidebar";

// const index = () => {
    // getInitialState() {
//         return { elapsed: 0, settingSeconds: this.props.settingSeconds, running: false, completed: 100.0 };
//       },
//       PropTypes: {
//         settingSeconds: React.PropTypes.number.isRequired
//       },
//       startTimer() {
//         this.setState({running: true});
//         start = Date.now();
//         this.timer = setInterval(this.tick, 10);
//       },
//       componentWiilUnmount() {
//         clearInterval(this.timer);
//       },
//       tick() {
//         this.setState({elapsed: new Date() - start});
//       },
     
//   return (
    
//     <div className="app">
//     <Sidebar />
//       <main className='content'>
//         <Topbar />
//     <Box m="20px">
//       {/* HEADER */}
//       <Box display="flex" justifyContent="space-between" alignItems="center">
//         <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
//        </Box>
//     </Box>
//     <Box>
//     <div id="content">
//       <Button seconds={[10.0]} />
//     </div>
//     </Box>
//     </main>
//     </div>
//   )
// }

// export default index


// var Timer = React.createClass({
//   getInitialState() {
//     return { elapsed: 0, settingSeconds: this.props.settingSeconds, running: false, completed: 100.0 };
//   },
//   PropTypes: {
//     settingSeconds: React.PropTypes.number.isRequired
//   },
//   startTimer() {
//     this.setState({running: true});
//     start = Date.now();
//     this.timer = setInterval(this.tick, 10);
//   },
//   componentWiilUnmount() {
//     clearInterval(this.timer);
//   },
//   tick() {
//     this.setState({elapsed: new Date() - start});
//   },
//   render() {
//     var completed = this.state.completed;
//     if (completed < 0) {completed = 0}
//     if (completed > 100) {completed = 100}

//     var buttonClass = 'btn btn-success btn-block';
//     if(this.state.running) {
//       buttonClass = 'btn btn-primary btn-block'
//     }

//     var settingSeconds = this.props.settingSeconds;
//     var elapsed = Math.round(this.state.elapsed / 100);

//     var seconds = (elapsed / 10).toFixed(1);
//     var leftSeconds = (settingSeconds - seconds).toFixed(1);
//     completed = (leftSeconds / settingSeconds) * 100;

//     var barStyle = {
//       backgroundColor: this.props.color || '#0BD318',
//       width: completed + '%',
//       height: 5
//     };

//     if(leftSeconds <= 0.0) {
//       clearInterval(this.timer);
//       buttonClass = 'btn btn-danger btn-block disabled';
//     }
//     return (
//       <div>
//         <div style={barStyle}></div>
//         <p className="timer-message"><b>{leftSeconds}</b> seconds left</p>
//         <Clicker class={buttonClass} startTimer={this.startTimer} />
//       </div>
//     );
//   }
// });

// var Clicker = React.createClass({
//   getInitialState() {
//     return {count: 0, func: this.props.startTimer, buttonTxt: 'Start'};
//   },
//   propTypes: {
//     class: React.PropTypes.string.isRequired,
//     startTimer: React.PropTypes.func.isRequired
//   },
//   onFirstClick() {
//     var stylesheet = document.styleSheets.item(1);
//     stylesheet.insertRule(".table-ul { pointer-events: none; }");
//     this.state.func();
//     this.setState({func: this.countClick});
//     this.setState({buttonTxt: 'Click'});
//   },
//   countClick() {
//     this.setState({count: this.state.count + 1});
//   },
//   render() {
//     return (
//     <div>
//       <div className="row message">
//         <div>
//           <h3>You have clicked <b>{this.state.count}</b> times</h3>
//         </div>
//       </div>
//       <div className="row">
//         <div>
//           <button onClick={this.onFirstClick} className={this.props.class}>{this.state.buttonTxt}</button>
//         </div>
//       </div>
//     </div>
//     );
//   }
// });

// React.render(<App />, document.body);

