import React from 'react';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard.js';
import Checkups from './components/Checkups/Checkups.js';

const theme = createTheme({
    palette: {
        primary: {
            main: `rgb(${1}, ${113}, ${189})`,
        },
        secondary: {
            main: `rgb(${195}, ${195}, ${195})`,
        },
        tertiary: {
            main: `rgb(${123}, ${159}, ${199})`,
        },
    },
});

function App(){

    return (
        <>
         <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/" element= {<Dashboard/>}></Route>
                <Route path="/chekups" element={<Checkups/>}></Route>
            </Routes>
            </ThemeProvider>
        </>
    )
}

export default App;