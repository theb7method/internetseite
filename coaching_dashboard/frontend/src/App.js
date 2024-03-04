
import './App.css';

import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Sites 
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import Checkups from "./components/Checkups/Checkups";
import Diet from "./components/Diet/Diet";
import Videos from "./components/Videos/Videos";
import Documents from "./components/Documents/Documents";
import Personal_Data from "./components/Personal_Data/Personal_Data";
import Testing from "./components/Testing/Testing";

const theme = createTheme({
  palette: {
    primary: {
      main: `rgb(${1}, ${113}, ${255})`,
    },
    secondary: {
      main: `rgb(${199}, ${199}, ${199})`,
    },
    tertiary: {
      main: `rgb(${31}, ${31}, ${31})`,
    }
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Router>
    <Sidebar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Checkups" element={<Checkups/>}></Route>
      <Route path="/Diet" element={<Diet/>}></Route>
      <Route path="/Videos" element={<Videos/>}></Route>
      <Route path="/Documents" element={<Documents/>}></Route>
      <Route path="/Personal_Data" element={<Personal_Data/>}></Route>
    </Routes>
    </Router>
      <Routes>
        <Route path="/Testing" element={<Testing/>}></Route>
      </Routes>
    </ThemeProvider>
    </>
  );
}

export default App;
