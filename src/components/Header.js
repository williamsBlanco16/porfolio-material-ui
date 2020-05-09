import React from 'react';
import { 
  Box, 
  Avatar, 
  Typography,
  Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Typed from 'react-typed'
import avatar from '../avatar.jpg'

//CSS STYLES
const useStyles = makeStyles(theme=>({
  avatar:{
    width:theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1)
  },
  title:{
    color:"tomato"
    
  },

  subtitle:{
    color:"tan",
    marginBottom:"3rem"
  },

  typedContainer:{
    position:'absolute',
    top:"50%",
    left:"50%",
    transform: "translate(-50%,-50%)",
    width:"100vw",
    textAlign:'center',
    zIndex:1
  }
}))

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar 
          className={classes.avatar} 
          src={avatar} 
          alt="Williams Blanco"
        />
      </Grid>
        <Typography className={classes.title} variant="h4">
        <Typed 
          strings={["Williams Blanco"]}
          typeSpeed={40}
        />
        </Typography>
        <br/>
        <Typography className={classes.subtitle}>
          <Typed 
            strings={["web Design","Web Debelopment","MERN Stack"]}
            typeSpeed={40} 
            backSpeed={60} 
            loop
          />
            
        </Typography>
      
    </Box>
  );
}

export default Header;
