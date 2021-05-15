import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, TextField ,TextareaAutosize, Button, Typography } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import WhatshotOutlinedIcon from '@material-ui/icons/WhatshotOutlined';


const theme = createMuiTheme({
  overrides: {
    MuiInputLabel: { 
      root: { 
        color: "#5c969e",
        "&$focused": { 
          color: "#5c969e"
        }
      }
    }
  }
});

const useStyles = makeStyles({
    typographyStyle: {
        textAlign: 'center',
        fontFamily: 'sans-serif',
        color:'#b67162'
    },
    addArticleContainerStyle: {
        margin: '5px',
        borderRadius: '5px',
        backgroundColor : '#fff'
    },
    paper: {
        padding: '10px',
        backgroundColor:'#f0e4d7'
    },
    textField: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',            
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500,
        color:'#350b40'
    },
    input: {
        color: '#350b40'
    },
    buttonStyle: {
        backgroundColor: '#b34180',
        fontFamily: 'Roboto',
        color: '#f8a1d1',
        '&:hover': {
            backgroundColor: '#790c5a',
            color: '#f8a1d1'
        },
        fontSize:'1.2rem'
    }
});


const AddArticle = () => {
    const classes = useStyles();
    const [title, setTitle] = useState("");
    const [article, setArticle] = useState("");
    const [authorname, setAuthorname] = useState("");

    const handleSubmit = () => {
        const newPost = {
            title,
            article,
            authorname
        };
        setTitle("")
        setArticle("");
        setAuthorname("");


        axios.post('/articles/add',newPost).then((response) => console.log(response)).catch((e) => console.log(e))
        
    }
    return (
        // <Grid container direction="column" style={{backgroundColor : '#f0e4d7'}}>
        <Paper className={classes.paper}>
            <Grid container direction="column" alignItems='center' spacing={3}>
                <Grid item>
                    <Typography variant="h4" className={classes.typographyStyle}>
                        Add Article
                    </Typography>
                </Grid>
                <Grid item>
                <ThemeProvider theme={theme}>
                    <TextField
                        label="Title of Article.."
                        type="text"
                        value={title}
                        onChange={ (e) => setTitle( e.target.value)}
                        placeholder="title of your article"
                        InputProps={{
                            className: classes.input,
                        }}
                        className={classes.textField}
                        />
                </ThemeProvider>
                </Grid>
                <Grid item>
                   <TextareaAutosize
                        label="article"
                        value={article}
                        onChange={(e) => setArticle(e.target.value)}
                        aria-label="empty textarea"
                        placeholder="Your thoughts.."
                        className={classes.textField}
                    />
                </Grid>
                <Grid item>
                    <ThemeProvider theme={theme}>
                    <TextField
                        label="Author's Name"
                        type="text"
                        value={authorname}
                        onChange={(e) => setAuthorname(e.target.value) }
                        InputProps={{
                            className: classes.input,
                        }}
                        className={classes.textField}
                    />
                    </ThemeProvider>
                </Grid>
                <Grid item>
                    <Button className={classes.buttonStyle} size="large" endIcon={<WhatshotOutlinedIcon/>} onClick={handleSubmit}>Post</Button>
                   
                </Grid>

            </Grid>
        </Paper>
    );
}

export default AddArticle
