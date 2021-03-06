import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { TiDocument } from "react-icons/ti";
import { FaCertificate } from "react-icons/fa";
import { GoGraph } from "react-icons/go";

import {
  StyledPaper,
  Wrap,
  Wrap2,
  StyledUl,
  StyledLi,
  Space,
  Price,
  StyledPrice
} from "./buy-course-card.styles";
import CartButton2 from "../cartButton2/cartButton2.component";

const BuyCourseCard = () => {
  return (
    <Wrap>
      <Container>
        <StyledUl>
          <StyledPrice>
            <Price>$1200</Price>
          </StyledPrice>
          <StyledLi>
            <FaCertificate />
            <Space>Certificado de finalización</Space>
          </StyledLi>

          <StyledLi>
            <TiDocument />
            <Space>Bibliografía exclusiva</Space>
          </StyledLi>
          <StyledLi>
            <GoGraph />
            <Space>Dificultad : Intermedia</Space>
          </StyledLi>
          <StyledLi>
            <TiDocument />
            <Space>17 Documentos</Space>
          </StyledLi>
          <StyledLi>
            <FaCertificate />
            <Space>Certificado de finalización</Space>
          </StyledLi>
          <StyledLi>
            <TiDocument />
            <Space>Bibliografía exclusiva</Space>
          </StyledLi>
          <StyledLi>
            <GoGraph />
            <Space>Dificultad : Intermedia</Space>
          </StyledLi>
        </StyledUl>
        <CartButton2 />
      </Container>
    </Wrap>
  );
};

export default BuyCourseCard;
