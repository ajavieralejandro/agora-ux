import Grid from "@material-ui/core/Grid";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { default as RB } from "../registerButton/register-button.component";
import { default as SB } from "../signInModal/sign-in.component";
import DehazeIcon from "@material-ui/icons/Dehaze";

export const StyledIcon = styled(DehazeIcon)`
  color: white;
`;

const OptionsContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  color: azure;
  display: block;
  &:hover {
    color: #009999;
    transform: scale(1.2);
    transition: 0.3s;
  }
  font-family: "Nunito", sans-serif;
`;

export const navbarIcon = styled.i`
  color: white;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 80%;
  width: 80%;
  padding: 25px;
  text-decoration: none;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 12px;
`;

export const OptionLink = styled(Link)`
  ${OptionsContainerStyles}
`;

export const OptionLink2 = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-size: 17px;
  text-decoration: none;
  color: white;
  display: block;
  &:hover {
    transform: scale(1.2);
    transition: 0.3s;
  }
  font-family: "Nunito", sans-serif;
`;

export const OptionLinkDrawner = styled(Link)`
  ${OptionsContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionsContainerStyles}
`;

export const LogoDiv = styled.div``;

export const StyledGrid = styled(Grid)`
  margin-left: 10%;
`;

export const StyledDiv = styled.div`
  width: 75%;
  min-width: 200px;
`;

export const StyledDiv2 = styled.div`
  width: 75%;
  min-width: 200px;
  margin-left: 5%;
`;

export const Drawner = styled.div`
  opacity: 0.99;
  transition: opacity 0.5s;
  background-color: black;
  color: whitesmoke;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 1000;
`;

export const CenterText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const SideButton = styled.a`
  border: none;
  display: inline-block;
  padding: 8px 16px;
  vertical-align: middle;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  background-color: inherit;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  color: #fff !important;
  background-color: #000 !important;
  font-size: 16px !important;
  padding: 8px 16px !important;
  position: absolute;
  right: 0;
  top: 0;
  &:hover {
    transform: scale(1.5);
  }
`;

export const SignButton = styled.a`
  background-color: #009999;
  border: 0.5px solid #009999;
  border-radius: 7px;
  color: white;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 4px 2px;
  cursor: pointer;
  &:hover {
    border: 0.5px solid black;
    color: black;
    transition: 0.4s;
  }
`;

export const RegisterButton = styled(Link)`
  background-color: #005580;
  border: 0.5px solid #005580;
  border-radius: 7px;
  color: white;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 4px 2px;
  cursor: pointer;
  &:hover {
    border: 0.5px solid black;
    color: black;
    transition: 0.4s;
  }
`;
