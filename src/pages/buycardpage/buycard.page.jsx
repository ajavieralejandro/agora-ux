import React from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

import "./buyCard.styles";
import Grid from "@material-ui/core/Grid";
import { CartIcon, Wrap } from "./buyCard.styles";
const BuyCardPage = () => {
  return (
    <React.Fragment>
      <Wrap>
        <Grid container direction="column" justify="center" alignItems="center">
          <Paper elevation={2}>
            <Wrap>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <CartIcon size="99px" />
                <Container>
                  <h2>
                    Todavía no agregaste a nada, Explora nuestros productos!
                  </h2>
                </Container>
                <Wrap>
                  <Button color="secondary">Ver Cursos</Button>
                </Wrap>
              </Grid>
            </Wrap>
          </Paper>
        </Grid>
      </Wrap>
    </React.Fragment>
  );
};

export default BuyCardPage;
