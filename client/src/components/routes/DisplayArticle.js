import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../../themes/Spinner';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Button, Paper,Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Image from '../../images/wallpaper.jpg'
/**
 * 
 * This Component displays a particular article
 * And we need to take that article by ID and then send the GET request
 * So how can we get this id ?  ... It is by passing the props from parent
 */


const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Coming Soon',
      'cursive',
    ].join(','),
  },});

const useStyles = makeStyles({
    wallpaper: {
        backgroundImage: `url(${Image})`,
        height: '100vh',
        paddingTop: '60px'
    },
    typographyStylesTitle: {
        fontSize: '4rem',
        fontWeight: 'bold',
        color: '#060930',
        fontStyle: 'oblique'

    },
    typographyStylesAuthor: {
        color: '#ea86b6',
        fontSize: '2.5rem',
        textAlign: 'right'
    },
    typographyStylesContent: {
        color: '#595b83',
        fontSize: '2rem'
    }
})


const  Article = (props) => {
    const classes = useStyles();
    const [title, setTitle] = useState("");
    const [article, setArticle] = useState("");
    const [authorname, setAuthorname] = useState("");

    useEffect(() => {
        /**
         * Now the props.match.params.id contains the id entered in the url
         * Now we just grab that and send GET request to get the article data by this ID and display 
         */
        axios.get(`/articles/${props.match.params.id}`)
            .then((res) =>
                [
                    setTitle(res.data.title),
                    setArticle(res.data.article),
                    setAuthorname(res.data.authorname)
                ]
            ).catch(e => { console.log('You have entered the wrong ID') })
        
    },[props])



    return (
        <Grid container alignItems="center" className={classes.wallpaper}>
            <Grid container direction="column" alignItems="center" spacing={5}>
                <Grid item xs={12} sm={8}>
                    <ThemeProvider theme={theme}>
                        <Typography className={classes.typographyStylesTitle}>
                            {title}
                        </Typography>

                        <Typography className={classes.typographyStylesAuthor} >
                            - {authorname}
                        </Typography>
                    </ThemeProvider>

                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography className={classes.typographyStylesContent}>

                        {article}
                    </Typography>
                </Grid>
                
            </Grid>
        </Grid>
           
        
    )
}

export default Article
