import { Paper, Typography, Grid } from '@mui/material';
import React, {  } from 'react';

export const Board = (props) => {
    const { children, id, title } = props;

    const drop = (e) => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');
        const card = document.getElementById(card_id);
        e.target.appendChild(card);
    }

    const dragOver = (e) => {
        e.preventDefault();
    }


    return (
        <Paper
            sx={{ minHeight: 500 }}
            elevation={3}
            id={id}
            onDrop={drop}
            onDragOver={dragOver}
            label='Paper'
        >
            <Typography
                variant='h4'
                align='center'
                sx={{ mb: 2, mt: 2 }}
            >
                {title}
            </Typography>
            <Grid container columns={1} spacing={1}>
                {children}
            </Grid>
        </Paper>
    );
}
