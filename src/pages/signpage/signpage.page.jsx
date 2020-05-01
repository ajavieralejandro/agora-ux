import React, { useEffect } from "react";
import Register from "../../components/Register/register.component";
import Grid from "@material-ui/core/Grid";
import SignIn from "../../components/SignIn/sign.component";
import { PageWrapper, RegisterButton } from "./signpage.styles";

const SignPage = () => {
  return (
    <PageWrapper>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} md={7}>
          <Register />
        </Grid>
        <Grid item xs={12} md={5}>
          <SignIn />
        </Grid>
      </Grid>
    </PageWrapper>
  );
};

export default SignPage;
