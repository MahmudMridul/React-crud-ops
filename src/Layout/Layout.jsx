import React from 'react'
import { AppBar, Typography, Grid} from '@mui/material'

const appBarSx = {
    borderRadius: 1,
    height: 60
}

const typoSx = {
    alignSelf: 'center',
    mt: 1
}

export const Layout = (props) => {
    return (
        <Grid container columns={12} spacing={1}>
            <Grid item sm={12}>

            </Grid>
            <AppBar position='static' sx={appBarSx}>
                    <Typography variant="h4" component="div" sx={typoSx}>
                        Todos
                    </Typography>
            </AppBar>
            {props.children}
        </Grid>
    )
}
