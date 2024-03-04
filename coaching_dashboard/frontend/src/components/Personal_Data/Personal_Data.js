import React from 'react';
import {useTheme} from '@mui/material/styles';

function Personal_Data (){

    const theme = useTheme();

    
    return (
        <div>
            <h1 style={{ color: theme.palette.primary.main }}>
                Data 
            </h1>
            <h1 style={{ color: theme.palette.secondary.main }}>
                Data 
            </h1>
            <h1 style={{ color: theme.palette.tertiary.main }}>
                Data
            </h1>
        </div>
    );
}

export default Personal_Data