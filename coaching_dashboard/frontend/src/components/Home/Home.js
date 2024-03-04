import React from 'react';
import {useTheme} from '@mui/material/styles';
import Sidebar from '../Sidebar/Sidebar';



function Home (){

    const theme = useTheme();

    
    return (
        <div>
            <Sidebar/>
            <h1 style={{ color: theme.palette.primary.main }}>
                Okay test test 
            </h1>
            <h1 style={{ color: theme.palette.secondary.main }}>
                Okay test test 
            </h1>
            <h1 style={{ color: theme.palette.tertiary.main }}>
                Okay test test 
            </h1>
        </div>
    );
}

export default Home