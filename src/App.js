import { Box, Card, CardContent, Typography, CardActions, Button, Grid } from '@mui/material'
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
                            <Grid item lg={2} md={3} sm={4} xs={12}>
                                <Card sx={{ minWidth: 200 }} key={item.id}>
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            {item.title}
                                        </Typography>

                                        <Typography variant="body2">
                                            {item.shortDesc}
                                        </Typography>
                                    </CardContent>

                                    <CardActions>
                                        <Button size='small' variant='contained'>Edit</Button>
                                        <Button size='small' variant='contained' color='error'>Delete</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Layout>
        </Box>
    )
}
