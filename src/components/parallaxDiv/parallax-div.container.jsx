import React from 'react';
import Grid from '@material-ui/core/Grid';
import Search from '../search/search.component';
import CourseImages from '../courseImages/course-images.component';
import Container from '@material-ui/core/Container';


const ParallaxText = () => {
    return(
            <Grid container spacing={1}>
                <Grid container item sm={12} md={2}>
               
                
                    <Search />
                </Grid>
                <Grid container item sm={12} md={10}>
                <Container maxWidth="sm">

                <CourseImages />
                </Container>

                </Grid>


            </Grid>
    )

}

export default ParallaxText;