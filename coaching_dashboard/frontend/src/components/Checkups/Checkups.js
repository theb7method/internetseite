import React from 'react';
import {useTheme} from '@mui/material/styles';

function Checkups (){

    const theme = useTheme();

    
    return (
        <div>
            <h1 style={{ color: theme.palette.primary.main }}>
                Checkups 
            </h1>
            <h1 style={{ color: theme.palette.secondary.main }}>
                Checkups
            </h1>
            <h1 style={{ color: theme.palette.tertiary.main }}>
                Checkups
            </h1>
        </div>
    );
}

export default Checkups