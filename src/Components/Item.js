import React from 'react';
import { 
    Card, CardContent, Grid,
    Typography, CardHeader 
} from '@mui/material';

export const Item = (props) => {

    const dragStart = (e) => {
        const target = e.target;
        e.dataTransfer.setData('card_id', target.id); 
        
    }

    const dragOver = (e) => {
        e.stopPropagation();
    }

    return (
        <Grid item lg={1} md={1} sm={1} xs={1}>
            <Card 
                sx={{ minWidth: 200, height: 1, my: 1 }} 
                elevation={5} 
                key={props.id}
                id={props.id}
                draggable='true'
                onDragStart={dragStart}
                onDragOver={dragOver}
            >
                <CardHeader title={props.title}/>
                
                <CardContent>
                    <Typography variant="body1">
                        {props.shortDesc}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        
    );
}
