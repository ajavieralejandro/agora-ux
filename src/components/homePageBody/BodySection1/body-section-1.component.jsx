import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { FaDelicious, FaDollarSign } from "react-icons/fa";
import { StyledUl, StyledLi, StyledP, StyledH3 } from "./body-section-1.styles";

const BodySection1 = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={4}>
          <StyledUl>
            <StyledLi>
              <FaDelicious size={38} />
              <StyledH3>Estudia a tu ritmo</StyledH3>
              <StyledP>
                Aprende de manera personalizada,accediendo a contenido
                multimedia y clases personalizada.
              </StyledP>
            </StyledLi>

            <StyledLi>
              <FaDollarSign size={38} />
              <StyledH3>Facilidades de pago</StyledH3>
              <StyledP>
                Paga en pesos argentinos a través de la plataforma que previeras
              </StyledP>
            </StyledLi>

            <StyledLi>
              <FaDelicious size={38} />
              <StyledH3>Estudia a tu ritmo</StyledH3>
              <StyledP>
                Aprende de manera personalizada,accediendo a contenido
                multimedia y clases personalizada.
              </StyledP>
            </StyledLi>

            <StyledLi>
              <FaDollarSign size={38} />
              <StyledH3>Facilidades de pago</StyledH3>
              <StyledP>
                Paga en pesos argentinos a través de la plataforma que previeras
              </StyledP>
            </StyledLi>
          </StyledUl>

          <p></p>
        </Grid>

        <Grid item xs={12} md={4}>
          <StyledUl>
            <StyledLi>
              <FaDelicious size={38} />
              <StyledH3>Estudia a tu ritmo</StyledH3>
              <StyledP>
                Aprende de manera personalizada,accediendo a contenido
                multimedia y clases personalizada.
              </StyledP>
            </StyledLi>

            <StyledLi>
              <FaDollarSign size={38} />
              <StyledH3>Facilidades de pago</StyledH3>
              <StyledP>
                Paga en pesos argentinos a través de la plataforma que previeras
              </StyledP>
            </StyledLi>

            <StyledLi>
              <FaDelicious size={38} />
              <StyledH3>Estudia a tu ritmo</StyledH3>
              <StyledP>
                Aprende de manera personalizada,accediendo a contenido
                multimedia y clases personalizada.
              </StyledP>
            </StyledLi>

            <StyledLi>
              <FaDollarSign size={38} />
              <StyledH3>Facilidades de pago</StyledH3>
              <StyledP>
                Paga en pesos argentinos a través de la plataforma que previeras
              </StyledP>
            </StyledLi>
          </StyledUl>
        </Grid>

        <Grid item xs={12} md={4}>
          <StyledUl>
            <StyledLi>
              <FaDelicious size={38} />
              <StyledH3>Estudia a tu ritmo</StyledH3>
              <StyledP>
                Aprende de manera personalizada,accediendo a contenido
                multimedia y clases personalizada.
              </StyledP>
            </StyledLi>

            <StyledLi>
              <FaDollarSign size={38} />
              <StyledH3>Facilidades de pago</StyledH3>
              <StyledP>
                Paga en pesos argentinos a través de la plataforma que previeras
              </StyledP>
            </StyledLi>

            <StyledLi>
              <FaDelicious size={38} />
              <StyledH3>Estudia a tu ritmo</StyledH3>
              <StyledP>
                Aprende de manera personalizada,accediendo a contenido
                multimedia y clases personalizada.
              </StyledP>
            </StyledLi>

            <StyledLi>
              <FaDollarSign size={38} />
              <StyledH3>Facilidades de pago</StyledH3>
              <StyledP>
                Paga en pesos argentinos a través de la plataforma que previeras
              </StyledP>
            </StyledLi>
          </StyledUl>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BodySection1;
