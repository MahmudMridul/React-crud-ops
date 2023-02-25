import { Paper, Typography, Grid } from '@mui/material';
import React, { useMemo, useState } from 'react';

export const Board = (props) => {
    const { children, id, title } = props;
    // const [minHeight, setMinHeight] = useState(); 

    const childrenCount = useMemo(() => React.Children.count(children), [children]);

    const drop = (e) => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');
        const card = document.getElementById(card_id);
        e.target.appendChild(card);
    }

    const dragOver = (e) => {
        e.preventDefault();
    }

    const minHeight = useMemo(() => `${200 + childrenCount * 20}px`, [childrenCount]);

    return (
        <Paper
            sx={{ minHeight: minHeight }}
            elevation={3}
            id={id}
            onDrop={drop}
            onDragOver={dragOver}
        >
            <Typography
                variant='h4'
                align='center'
                sx={{ mb: 4 }}
            >
                {title}
            </Typography>
            <Grid container columns={1} rowSpacing={1}>
                {children}
            </Grid>
        </Paper>
    );
}
