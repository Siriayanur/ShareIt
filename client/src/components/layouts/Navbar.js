import React from 'react'
import { AppBar, Toolbar, IconButton, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

const useStyles = makeStyles({
  appBarStyle: {
    backgroundColor: '#94d0cc',
    color: 'black',
    marginBottom: '10px'
  },
  buttonStyles: {
    fontSize: '1.5em',
    color: '#21094e',
    fontFamily: 'Ubuntu Mono',
  },
  typographyStyle: {
    flex: 1,
    fontSize: '2rem',
    fontFamily: 'Ubuntu Mono',
    color: '#114e60',

  }
})

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBarStyle}>
      <Toolbar>
        <Typography className={classes.typographyStyle}>LET'S SHARE <LibraryBooksIcon /></Typography>
        
        <Link to="/" style={{textDecoration:'none'}}>
            <Button className={classes.buttonStyles}>Home</Button>
        </Link>
        <Link to="/add-article" style={{textDecoration:'none'}}>
            <Button className={classes.buttonStyles}>ADD Article</Button>
        </Link>
      </Toolbar>
    </AppBar>
  )
} 


export default Navbar;





/*
const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
 },
  
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" color="secondary">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    News
                </Typography>
                <Link to="/">
                  <Button color="primary">Home</Button>
                </Link>
                <Link to="/add-article">
                  <Button color="inherit">Add Article</Button>
                </Link>
                
                
            </Toolbar>
        </AppBar>
    )
}
*/


