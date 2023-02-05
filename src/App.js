import { Box, Card, CardContent, Typography, CardActions, Button, Grid, CardHeader } from '@mui/material'
import React from 'react'
import { Layout } from './Layout/Layout'

import { todos } from './DummyData'


export const App = () => {
    return (
        <Box>
            <Layout>
                {
                    todos.map(item => {
                        return(
                            <Grid item lg={2} md={3} sm={6} xs={12}>
                                <Card sx={{ minWidth: 200, height: 1 }} elevation={5} key={item.id}>
                                    <CardHeader title={item.title}/>
                                    <CardContent>
                                        <Typography variant="body1">
                                            {item.shortDesc}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Layout>
        </Box>
    )
}
