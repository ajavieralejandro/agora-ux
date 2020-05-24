import React from "react";
import Grid from "@material-ui/core/Grid";
import CourseReviewCard from "../courseReviewCard/course-review-card.component";
import { Wrap } from "./review.styles";

const Reviews = () => {
  return (
    <Wrap>
      <Grid container direction="row">
        <Grid item md={4} xs={12}>
          <CourseReviewCard />
        </Grid>
        <Grid item md={4} xs={12}>
          <CourseReviewCard />
        </Grid>
        <Grid item md={4} xs={12}>
          <CourseReviewCard />
        </Grid>
      </Grid>
    </Wrap>
  );
};

export default Reviews;
