import React, { useEffect } from 'react'
import SignIn from '../../components/signIn/signIn.component';
import Grid from '@material-ui/core/Grid';
import {PageWrapper,RegisterButton} from './signpage.styles';

const SignPage = () => {

    return(
        <PageWrapper>
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        >
   
            <Grid item xs={12} md={12}>
                <SignIn />
            </Grid>
        </Grid>

        </PageWrapper>
    )
}

export default SignPage;