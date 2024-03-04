import React from 'react';
import {useTheme} from '@mui/material/styles';

function Diet (){

    const theme = useTheme();

    
    return (
        <div>
            <h1 style={{ color: theme.palette.primary.main }}>
                Diet 
            </h1>
            <h1 style={{ color: theme.palette.secondary.main }}>
                Diet
            </h1>
            <h1 style={{ color: theme.palette.tertiary.main }}>
                Diet
            </h1>
        </div>
    );
}

export default Diet