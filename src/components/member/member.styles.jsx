import styled, { css } from "styled-components";
import { Typography } from "@material-ui/core";
import { Card, Icon, Image } from 'semantic-ui-react'

export const AvatarImg = styled.img`
width : 200px;
display: block;
margin-left: auto;
margin-right: auto;
margin-top : 5%;
border-style: inset;
border-color: black;
&:hover {
    transform: scale(1.1);
  }

`


export const CardTitle = styled(Typography)`
text-align: center;
`

export const Wrapper = styled.div`
max-width: 130px;
max-height: 150px;
`