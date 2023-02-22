import { Routes, Route } from 'react-router-dom';
import { ColorModeContext,useMode } from './theme';
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from './scenes/dashboard';
import Team from "./scenes/Team";
import Invoices from "./scenes/Invoices";
import Contact from "./scenes/Contact";
import Form from "./scenes/Form";
import Calendar from "./scenes/Calendar"; 
// import Bar from "./scenesBar";
// import Line from "./scenes/Line";
// import Pie from "./scenes/Pie";
// import FAQ from "./scenes/FAQ";
// import Geography from "./scenes/Geography"; 
import './App.css';


function App() {
  const [theme, colorMode] = useMode ();
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <div className="app">
    <Sidebar />
      <main className='content'>
        <Topbar />
       <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/team' element={<Team />}/>
        <Route path='/contacts' element={<Contact />}/>
        <Route path='/invoices' element={<Invoices />}/>
        <Route path='/form' element={<Form />}/>
        <Route path='/calendar' element={<Calendar />}/>
        {/* <Route path='/bar' element={<Bar />}/> */}
        {/* <Route path='/line' element={<Line />}/> */}
        {/* <Route path='/pie' element={<Pie />}/> */}
        {/* <Route path='/faq' element={<FAQ />}/> */}
        {/* <Route path='/geography' element={<Geography />}/> */}
       </Routes>
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
