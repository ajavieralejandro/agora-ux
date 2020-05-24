import React from "react";
import Grid from "@material-ui/core/Grid";
import AvatarDocente from "../avatarDocente/avatar-docente.component";
import StarIcon from "@material-ui/icons/Star";
import { Wrap, StyledIcon } from "./course-review-card.styles";

const CourseReviewCard = () => {
  return (
    <Wrap>
      <Grid container>
        <Grid
          container
          xs={3}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <AvatarDocente />
          Juan pedro Torrez
        </Grid>
        <Grid
          container
          xs={9}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <StarIcon fontSize="large" />
          <StarIcon fontSize="large" />
          <StarIcon fontSize="large" />
          <StarIcon fontSize="large" />
          <StarIcon fontSize="large" />
          <p>
            Hola soy una super review del cursito este Hola soy una super review
            del cursito este Hola soy una super review del cursito este Hola soy
            una super review del cursito este
          </p>
        </Grid>
      </Grid>
    </Wrap>
  );
};

export default CourseReviewCard;
