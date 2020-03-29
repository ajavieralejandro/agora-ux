import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CartButton from "../cartButton/cartButton.component";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
});

function CourseCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Biomodelos
          </Typography>
          <Typography gutterBottom component="p">
            Docente : Esteban Barreiro
          </Typography>
          <Typography color="textSecondary" component="p">
            $700
          </Typography>
          <Typography color="textSecondary" component="p">
            Conversión de imagenes medicas para impresión 3d.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Button size="small" color="primary">
            Ver más
          </Button>
        </Grid>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <CartButton />
        </Grid>
      </CardActions>
    </Card>
  );
}

export default CourseCard;
