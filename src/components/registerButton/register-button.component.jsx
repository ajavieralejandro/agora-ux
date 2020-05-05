import { ButtonDiv } from "../cartButton/cartButton.styles";
import { OptionLink } from "../navbar/navbar.styles";
import React from "react";
import Button from "@material-ui/core/Button";

//Experimento

export default function RegisterButton() {
  return (
    <React.Fragment>
      <OptionLink to="/sign">
        <ButtonDiv>
          <Button variant="outlined" color="secondary">
            Registrate
          </Button>
        </ButtonDiv>
      </OptionLink>
    </React.Fragment>
  );
}
