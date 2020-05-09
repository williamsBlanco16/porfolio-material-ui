import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import {
  Facebook,
  Twitter,
  Instagram
} from '@material-ui/icons'

const useStyle = makeStyles(theme=>({
  root:{
    "& .MuiBottomNavigation-root":{
      minWidth:0,
      maxWidth:250
    }
  }
}))
const Footer = () => {
  const classes = useStyle();

  return (
    <BottomNavigation
      width="auto"
      style={{background:"#222"}}
      
    >
    
      <BottomNavigationAction
        style={{padding:0}}
        icon={<Facebook/>}
        className={classes.root}
      />

      <BottomNavigationAction
        style={{padding:0}}
        icon={<Twitter/>}
        className={classes.root}
      />

      <BottomNavigationAction
        style={{padding:0}}
        icon={<Instagram/>}
        className={classes.root}
      />

     

    </BottomNavigation>
    
  );
}

export default Footer;
