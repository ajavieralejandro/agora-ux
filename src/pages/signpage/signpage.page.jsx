import React, { useEffect } from 'react'
import SignIn from '../../components/signIn/signIn.component';
import Grid from '@material-ui/core/Grid';
import {PageWrapper} from './signpage.styles';

const SignPage = () => {

    return(
        <PageWrapper>
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        >
            <Grid item xs={12} md={6}>
                <SignIn />
            </Grid>
            <Grid item xs={12} md={6}>
                <SignIn />
            </Grid>
        </Grid>
        </PageWrapper>
    )
}

export default SignPage;