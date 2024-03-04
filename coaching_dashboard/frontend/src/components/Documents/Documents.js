import React from 'react';
import {useTheme} from '@mui/material/styles';

function Documents (){

    const theme = useTheme();

    
    return (
        <div>
            <h1 style={{ color: theme.palette.primary.main }}>
                Documents
            </h1>
            <h1 style={{ color: theme.palette.secondary.main }}>
                Documents
            </h1>
            <h1 style={{ color: theme.palette.tertiary.main }}>
                Documents
            </h1>
        </div>
    );
}

export default Documents