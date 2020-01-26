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
import Link from '@material-ui/core/Link';







//Styles

import {OptionsContainer,OptionLink,StyledGrid,LogoDiv,Drawner,CenterText, SideButton} from './navbar.styles.jsx';




 const Navbar = ({title,effect}) => {
  const [count, setCount] = useState(0);
  const [drawner, setdrawner] = useState(false);
  console.log("El effect es : ",effect);
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

    <Fade in={drawner}>
    <div>
   
    <Drawner>
    <SideButton >
    <i onClick={handleExit}  className="fa fa-remove"></i>
  </SideButton>
    
    <CenterText>


    <OptionLink>Cursos</OptionLink>
    <OptionLink>Alumnos</OptionLink>
    <OptionLink>Webinars</OptionLink>
    <Link to="team">
    <OptionLink >Equipo</OptionLink>
    </Link>
    <OptionLink >Ingresar</OptionLink>

    </CenterText>
    </Drawner>
    </div>   
    </Fade>
  

   
      <CssBaseline />
      <Fade in={!drawner}>
      <AppBar position="fixed" className="appbar"
      
    style={
      (count<15) ? {'background':'transparent','transition':'0.4s'}:{'backgroundColor':'black','transition':'0.4s'}
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
          </Hidden>
          <LogoDiv>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
          </LogoDiv>
          <Hidden smDown>
          <StyledGrid container
          direction="row"
          justify="flex-end"
          alignItems="center">
          <OptionsContainer>
          <OptionLink to="/team" >Cursos</OptionLink>
          <OptionLink>Alumnos</OptionLink>
          <OptionLink>Webinars</OptionLink>
          <OptionLink >Equipo</OptionLink>
          <OptionLink >Ingresar</OptionLink>
          

        </OptionsContainer>
        </StyledGrid>
        </Hidden>
        
         
        </Toolbar>
      
      </AppBar>
      </Fade>

    
   
     
    </div>
  );
}

export default Navbar;