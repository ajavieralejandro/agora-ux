//Components
import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import SearchButton from "../../components/search/search.component";
import DehazeIcon from "@material-ui/icons/Dehaze";

import SignInModal from "../signInModal/sign-in.component";
import CartButton from "../cartButton/cartButton.component";

import Grid from "@material-ui/core/Grid";

//Styles

import {
  OptionLink,
  LogoDiv,
  Drawner,
  CenterText,
  SideButton,
  OptionLink2,
  SignButton,
  RegisterButton
} from "./navbar.styles.jsx";

const Navbar = ({ title, parallax }) => {
  const [count, setCount] = useState(0);
  const [drawner, setdrawner] = useState(false);
  console.log("El effect es : ", parallax);
  const handleClick = () => {
    setdrawner(true);
    console.log("El valor es de : ", drawner);
  };

  const handleExit = () => {
    setdrawner(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY;
      setCount(show);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="root">
      <Fade in={drawner} timeout={100}>
        <div>
          <Drawner>
            <SideButton>
              <i onClick={handleExit} className="fa fa-remove"></i>
            </SideButton>

            <CenterText>
              <OptionLink2>Cursos</OptionLink2>
              <OptionLink2>Alumnos</OptionLink2>
              <OptionLink2>Webinars</OptionLink2>
              <OptionLink2 onClick={handleExit} to="/team">
                Equipo
              </OptionLink2>
              <OptionLink2 to="/sign">Ingresar</OptionLink2>
            </CenterText>
          </Drawner>
        </div>
      </Fade>

      <CssBaseline />
      <Fade in={!drawner}>
        <AppBar
          position="fixed"
          className="appbar"
          style={
            count < 15 && parallax
              ? {
                  backgroundColor: "white",
                  opacity: "0.75",
                  transition: "0.4s"
                }
              : { backgroundColor: "white", transition: "0.4s" }
          }
        >
          <Toolbar>
            <Hidden mdUp>
              <div onClick={handleClick}>
                <IconButton
                  color="black"
                  aria-label="Open drawer"
                  edge="start"
                  onClick={() => {}}
                  className="menu-button"
                >
                  <DehazeIcon />
                </IconButton>
              </div>
              <LogoDiv>
                <Typography variant="h6" noWrap>
                  <OptionLink to="/">{title}</OptionLink>
                </Typography>
              </LogoDiv>
            </Hidden>

            <Hidden smDown>
              <Grid container>
                <Grid
                  item
                  md={6}
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-end"
                >
                  <OptionLink to="/">{title}</OptionLink>
                  <OptionLink>Proyectos</OptionLink>
                  <OptionLink to="/team">Equipo</OptionLink>
                  <OptionLink>Webinars</OptionLink>
                </Grid>

                <Grid
                  md={2}
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                ></Grid>

                <Grid
                  md={4}
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                >
                  <CartButton />
                  <RegisterButton to="/sign">Crea tu cuenta</RegisterButton>
                  <SignButton>Ingresar</SignButton>
                </Grid>
              </Grid>
            </Hidden>
          </Toolbar>
        </AppBar>
      </Fade>
    </div>
  );
};

export default Navbar;
