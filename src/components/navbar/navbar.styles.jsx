import Grid from '@material-ui/core/Grid';
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";


const OptionsContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
  font-size : 20px;
  text-decoration: none;
  color : whitesmoke;
  display: block;
  &:hover {
    transform: scale(1.5);
  }
  font-family: 'Bangers', cursive;

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
`;

export const OptionLink = styled(Link)`
  ${OptionsContainerStyles}
`;

export const OptionLinkDrawner = styled(Link)`
${OptionsContainerStyles}
`;

export const OptionDiv = styled.div`
${OptionsContainerStyles}
`;


export const LogoDiv =  styled.div`
margin: 2%;


`

export const StyledGrid = styled(Grid)`
    margin-left : 10%
`

export const Drawner = styled.div`
opacity:0.9;
background-color:black;
color: whitesmoke;
position:fixed;
width:100%;
height:100%;
top:0px;
left:0px;
z-index:1000;`


export const CenterText = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);


`

export const SideButton = styled.a`
  border:none;display:inline-block;padding:8px 16px;
  vertical-align:middle;overflow:hidden;text-decoration:none;
  color:inherit;background-color:inherit;text-align:center;cursor:pointer;
  white-space:nowrap;
  color:#fff!important;background-color:#000!important;
  font-size:36px!important;
  padding:8px 16px!important;
  position:absolute;right:0;
  top:0;
  &:hover {
    transform: scale(1.5);
  }
`


