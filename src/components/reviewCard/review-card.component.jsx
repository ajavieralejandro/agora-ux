import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import AvatarDocente from "../../components/avatarDocente/avatar-docente.component";
import Container from "@material-ui/core/Container";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import { Wrap, Response, RightButton } from "./review-card.styles";
import { FiMessageSquare } from "react-icons/fi";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const ReviewCard2 = () => {
  const [Comments, setComments] = useState(false);
  const [Content, setContent] = useState(false);

  const handleComments = () => {
    setComments(!Comments);
  };

  const handleClick = () => {
    setContent(!Content);
  };

  return (
    <Wrap>
      <Card>
        <CardContent>
          <Grid container spacing={1}>
            <Grid container item xs={10}>
              <Container>
                <h3>Hola soy una carta</h3>
                <p>
                  Esto es un ejemplo de las dudas que puedan llegar a dejar en
                  la página los distintos usuarios que visiten y tengan una
                  sesión iniciada
                </p>

                {Content ? (
                  <div>
                    <h4>Admin</h4>
                    <p>Hola yo se supone que estoy escondido viste</p>
                  </div>
                ) : null}
                {Comments ? (
                  <Response>
                    <h3>Admin</h3>
                    <p>Hola soy una respuesta</p>
                  </Response>
                ) : null}
              </Container>
            </Grid>
            <Grid container item xs={2}>
              <AvatarDocente />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Container>
            <Grid container>
              <Grid item xs={10}>
                <Button onClick={handleClick} size="small">
                  {" "}
                  <ExpandMoreIcon />
                </Button>
                <RightButton onClick={handleComments}>
                  <FiMessageSquare size="22" />
                </RightButton>
              </Grid>
              <Grid item xs={2}>
                {" "}
              </Grid>
            </Grid>
          </Container>
        </CardActions>
      </Card>
    </Wrap>
  );
};

export default ReviewCard2;
