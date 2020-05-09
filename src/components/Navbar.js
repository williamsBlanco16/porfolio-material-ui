import React, {useState} from 'react';
import { 
  Box, 
  AppBar, 
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText} from '@material-ui/core'

import MobileRightMenuSlider from '@material-ui/core/Drawer'
import {Link} from 'react-router-dom'
import { 
  ArrowBack, 
  AssignmentInd,
  Apps,
  Home,
  ContactMail } from '@material-ui/icons'
import {makeStyles} from '@material-ui/core/styles'
import avatar from '../avatar.jpg'
import Footer from './Footer';

const useStyle = makeStyles(theme =>({
  menuSliderContainer:{
    width:250,
    background:"#511",
    height:"100%",
  },
  avatar:{
    display:"block",
    background:"#511",
    margin: "0.5rem auto",
    width:theme.spacing(13),
    height:theme.spacing(13)
  },
  listItem:{
    color:"tan"
  }

}));

const menuItems = [
  {
    listIcon: <Home/>,
    listText:"Home",
    listPath:"/"
  },
  {
    listIcon: <AssignmentInd/>,
    listText:"Resume",
    listPath:"/resume"
  },
  {
    listIcon: <Apps/>,
    listText:"Portfolio",
    listPath:"/portfolio"
  },
  {
    listIcon: <ContactMail/>,
    listText:"Contacts",
    listPath:"/contacts"
  },
];

const Navbar = () => {
  const [state, setState] = useState({right:false})
  const toggleSlider = (slider,open) => {
    setState({...state,[slider]:open})
  }
  const classes = useStyle();
  const sideList = slider => (
    <Box  
      className={classes.menuSliderContainer} 
      component='div'
      onClick={()=>toggleSlider("right",false)}> 
        <Avatar className={classes.avatar} src={avatar} alt='Williams Blanco'/>
        <Divider/>
        <List>
          {
            menuItems.map((lsItem,key)=>(
              <ListItem button key={key} component={Link} to={lsItem.listPath}>
                <ListItemIcon className={classes.listItem}>
                  {lsItem.listIcon}
                </ListItemIcon>
                <ListItemText  className={classes.listItem} primary={lsItem.listText}/>
              </ListItem>
            ))
          }
        </List>
      </Box>
  );
  return (
    <>
    <Box component='nav'>
      <AppBar position="static" style={{background:"#222"}}>
        <Toolbar>
          <IconButton onClick={()=>toggleSlider("right",true)}>
            <ArrowBack style={{color:'tomato'}}/>
          </IconButton>
          <Typography variant='h5' style={{color:'tan'}}>
            Portafolio
          </Typography>
          <MobileRightMenuSlider 
            open={state.right}
            onClose={()=>toggleSlider("right",false)}

          >
            {sideList('right')}
            <Footer/>
          </MobileRightMenuSlider>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}

export default Navbar;
  