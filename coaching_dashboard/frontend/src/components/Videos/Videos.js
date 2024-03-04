import React from 'react';
import {useTheme} from '@mui/material/styles';

function Videos (){

    const theme = useTheme();

    
    return (
        <div>
            <h1 style={{ color: theme.palette.primary.main }}>
                Videos 
            </h1>
            <h1 style={{ color: theme.palette.secondary.main }}>
                Videos
            </h1>
            <h1 style={{ color: theme.palette.tertiary.main }}>
                Videos 
            </h1>
        </div>
    );
}

export default Videos