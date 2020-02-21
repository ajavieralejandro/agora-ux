//Components
import React,{ useState ,useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Fade from '@material-ui/core/Fade';
import SearchButton from '../search/search.component';
import Container from '@material-ui/core/Container';


import Grid from '@material-ui/core/Grid';





//Styles

import {OptionsContainer,OptionLink,StyledGrid,LogoDiv,Drawner,CenterText, SideButton, StyledDiv,StyledDiv2} from './navbar.styles.jsx';




 const Navbar = ({title,parallax}) => {
  const [count, setCount] = useState(0);
  const [drawner, setdrawner] = useState(false);
  console.log("El effect es : ",parallax);
  const handleClick = () => {
    setdrawner(true);
    console.log("El valor es de : ",drawner);
  }

  const handleExit = () => {
    setdrawner(false);
  }
  
  
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY;
      setCount(show)
      
    
        }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  })
 

return (
    <div className="root">

    <Fade in={drawner} timeout={100}>
    <div>
   
    <Drawner>
    <SideButton >
    <i onClick={handleExit}  className="fa fa-remove"></i>
  </SideButton>
    
    <CenterText>


    <OptionLink>Cursos</OptionLink>
    <OptionLink>Alumnos</OptionLink>
    <OptionLink>Webinars</OptionLink>
    <OptionLink>Equipo</OptionLink>
    <OptionLink >Ingresar</OptionLink>

    </CenterText>
    </Drawner>
    </div>   
    </Fade>
  

   
      <CssBaseline />
      <Fade in={!drawner}>
      <AppBar position="fixed" className="appbar"
      
    style={
      ((count<15)&& parallax) ? {'backgroundColor':'black','opacity':'0.7','transition':'0.4s'}:{'backgroundColor':'black','transition':'0.4s'}
    } 

        >
        <Toolbar>
          <Hidden mdUp>
          
          
          <div onClick={handleClick}>
          <IconButton
          
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={()=>{}}
            className="menu-button"
          >
          
            <MenuIcon />
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
          md={4}
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-end"
        >
          <LogoDiv>
          <Typography variant="h6" noWrap>
            <OptionLink to="/">{title}</OptionLink>
          </Typography>
          </LogoDiv>
          </Grid>

         
          <Grid md={4}
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
        <StyledDiv>
          <SearchButton />
          </StyledDiv>

          </Grid>
        

          <Grid md={4}
  container
  direction="row"
  justify="flex-end"
  alignItems="flex-end"
>

          <OptionLink >Ingresar</OptionLink>
          <OptionLink >Crear Cuenta</OptionLink>

      </Grid>
      </Grid>
        </Hidden>
        
         
        </Toolbar>
      
      </AppBar>
      </Fade>

    
   
     
    </div>
  );
}

export default Navbar;