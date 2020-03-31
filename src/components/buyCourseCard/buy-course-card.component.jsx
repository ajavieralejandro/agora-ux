import React from "react";
import Container from "@material-ui/core/Container";
import { Wrap } from "./buy-course-card.styles";
import CartButton2 from "../cartButton2/cartButton2.component";

const BuyCourseCard = () => {
  return (
    <Wrap elevation={3}>
      <Container>
        <CartButton2 />
      </Container>
    </Wrap>
  );
};

export default BuyCourseCard;
