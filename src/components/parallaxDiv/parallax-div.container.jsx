import React from 'react';
import Grid from '@material-ui/core/Grid';
import Search from '../search/search.component';

const ParallaxText = () => {
    return(
            <Grid container spacing={1}>
                <Grid container item xs={12}  spacing={3}>
                <h1>Queres aprender impresion 3d?</h1>
                    <Search />
                </Grid>
                <Grid container item xs={12}  spacing={3}>
                </Grid>
            </Grid>
    )

}

export default ParallaxText;