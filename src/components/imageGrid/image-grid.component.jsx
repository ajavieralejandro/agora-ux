import React from 'react';
import Grid from '@material-ui/core/Grid';
import {ImageDiv} from './image-grid.styles';


const ImageGrid = () => {
    return(
        <Grid container spacing={0}>
            <Grid item md={3} xs={12}>
            <ImageDiv src="https://codetheweb.blog/assets/img/posts/css-advanced-background-images/mountains.jpg" alt="Italian Trulli" />
            </Grid>
            <Grid item md={3} xs={12}>
            <ImageDiv src="https://codetheweb.blog/assets/img/posts/css-advanced-background-images/mountains.jpg" alt="Italian Trulli" />

            </Grid>
            <Grid item md={3} xs={12}>
            <ImageDiv src="https://codetheweb.blog/assets/img/posts/css-advanced-background-images/mountains.jpg" alt="Italian Trulli" />
            </Grid>
            <Grid item md={3} xs={12}>
            <ImageDiv src="https://codetheweb.blog/assets/img/posts/css-advanced-background-images/mountains.jpg" alt="Italian Trulli" />
            </Grid>
            
        </Grid>

    )    
}

export default ImageGrid;