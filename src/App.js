import { 
    Box, Card, CardContent, 
    Typography, Grid, CardHeader 
} from '@mui/material';
import React from 'react';
import { Layout } from './Layout/Layout';

import { todos } from './DummyData';
import { Board } from './Components/Board';
import { Item } from './Components/Item';


export const App = () => {
    return (

        <Layout>
            <Grid item lg={4} md={4} sm={4} xs={12}>
                <Board id='b1' title={'Pending'}>
                    {
                        todos.map(item => {
                            return(
                                <Item
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    shortDesc={item.shortDesc}
                                ></Item>
                            )
                        })
                    }
                </Board>
            </Grid>

            <Grid item lg={4} md={4} sm={4} xs={12}>
                <Board id='b2' title={'In Progress'}>
                    
                </Board>
            </Grid>

            <Grid item lg={4} md={4} sm={4} xs={12}>
                <Board id='b3' title={'Done'}>
                    
                </Board>
            </Grid>

        </Layout>

    )
}
