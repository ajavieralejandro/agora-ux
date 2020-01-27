import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import  {AvatarImg,CardTitle,Wrapper} from './member.styles';
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  }
});

const Member = () => {
  const classes = useStyles();

  return (
    <Wrapper>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
        />
        <AvatarImg src="https://www.w3schools.com/howto/img_avatar.png" />

        <CardContent>
          <CardTitle gutterBottom variant="h5" component="h2">
            Lizard
          </CardTitle>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
  
    </Card>
    </Wrapper>
  );
}

export default Member;