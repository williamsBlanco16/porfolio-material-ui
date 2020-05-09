import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import { 
  Box, 
  Grid, 
  CardActionArea, 
  CardMedia, 
  CardContent, 
  Typography, 
  Button,
  CardActions, 
  Card} from '@material-ui/core'
import Navbar from './Navbar';
import project1 from './images/projecto1.jpg'
import project2 from './images/projecto2.png'
import project3 from './images/projecto3.jpg'
import project4 from './images/projecto4.jpg'

const useStyle = makeStyles(theme=>({
  mainContainer:{
    background: "#233",
    height:"100%"
  },
  cardContainer:{
    maxWidth:345,
    margin:"5rem auto"
  }
}))
const Portfolio = () => {
  const classes = useStyle()
  return (
    <Box component='div' className={classes.mainContainer}>
      <Navbar/>
      <Grid container justify="center" alignItems="center">
        
        <Grid 
          item 
          xs={12} 
          sm={8} 
          md={6}
        >
          <Card className={classes.cardContainer}>
          <CardActionArea>
            <CardMedia
              component='img'
              alt="Project 1"
              height="140"
              image={project1}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
              >
                Project 1
              </Typography>

              <Typography 
                variant="body2"
                color="textSecu ndary"
                component="p"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam, blanditiis neque eligendi odit vero, sunt recusandae tempore modi debitis minima dolor omnis labore consequuntur sint dignissimos. Repellat, magni libero.
              </Typography> 

            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
              >
                Share
              </Button>

              <Button
                size="small"
                color="primary"
              >
                Live Demo
              </Button>
            </CardActions>
          </CardActionArea>
          </Card>
        </Grid>
      
        <Grid 
          item 
          xs={12} 
          sm={8} 
          md={6}
        >
          <Card className={classes.cardContainer}>
          <CardActionArea>
            <CardMedia
              component='img'
              alt="Project 2"
              height="140"
              image={project2}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
              >
                Project 1
              </Typography>

              <Typography 
                variant="body2"
                color="textSecu ndary"
                component="p"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam, blanditiis neque eligendi odit vero, sunt recusandae tempore modi debitis minima dolor omnis labore consequuntur sint dignissimos. Repellat, magni libero.
              </Typography> 

            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
              >
                Share
              </Button>

              <Button
                size="small"
                color="primary"
              >
                Live Demo
              </Button>
            </CardActions>
          </CardActionArea>
          </Card>
        </Grid>
        <Grid 
          item 
          xs={12} 
          sm={8} 
          md={6}
        >
          <Card className={classes.cardContainer}>
          <CardActionArea>
            <CardMedia
              component='img'
              alt="Project 3"
              height="140"
              image={project3}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
              >
                Project 1
              </Typography>

              <Typography 
                variant="body2"
                color="textSecu ndary"
                component="p"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam, blanditiis neque eligendi odit vero, sunt recusandae tempore modi debitis minima dolor omnis labore consequuntur sint dignissimos. Repellat, magni libero.
              </Typography> 

            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
              >
                Share
              </Button>

              <Button
                size="small"
                color="primary"
              >
                Live Demo
              </Button>
            </CardActions>
          </CardActionArea>
          </Card>
        </Grid>

        <Grid 
          item 
          xs={12} 
          sm={8} 
          md={6}
        >
          <Card className={classes.cardContainer}>
          <CardActionArea>
            <CardMedia
              component='img'
              alt="Project 4"
              height="140"
              image={project4}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
              >
                Project 4
              </Typography>

              <Typography 
                variant="body2"
                color="textSecu ndary"
                component="p"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam, blanditiis neque eligendi odit vero, sunt recusandae tempore modi debitis minima dolor omnis labore consequuntur sint dignissimos. Repellat, magni libero.
              </Typography> 

            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
              >
                Share
              </Button>

              <Button
                size="small"
                color="primary"
              >
                Live Demo
              </Button>
            </CardActions>
          </CardActionArea>
          </Card>
        </Grid>
      
        
      
        
     
      </Grid>
    </Box>
  );
}

export default Portfolio;
