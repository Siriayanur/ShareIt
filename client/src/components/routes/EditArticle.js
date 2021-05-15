import React from 'react'
import { useState ,useEffect} from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, TextField ,TextareaAutosize, Button, Typography } from '@material-ui/core'
import { createMuiTheme, ThemeProvider,Snackbar } from "@material-ui/core";
import WhatshotOutlinedIcon from '@material-ui/icons/WhatshotOutlined';
import Alert from '@material-ui/lab/Alert';

const theme = createMuiTheme({
  overrides: {
    MuiInputLabel: { 
      root: { // Name of the rule
        color: "#5c969e",
        "&$focused": { // increase the specificity for the pseudo class
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




const EditArticle = (props) => {
    const classes = useStyles();
    const [title, setTitle] = useState("");
    const [article, setArticle] = useState("");
    const [authorname, setAuthorname] = useState("");
    const [message, setMessage] = useState(false);

    const handleSubmit = () => {
        const newPost = {
            title,
            article,
            authorname
        };
        setTitle("")
        setArticle("");
        setAuthorname("");
        axios.put(`/articles/update/${props.match.params.id}`, newPost).then((res) => [
            setMessage(true)
        ]).catch((e) => console.log('Error while editing'))
    }

    const handleClose = (event,reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setMessage(false);
    }

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
        
    },[])
    return (
        <Paper className={classes.paper}>
            <Grid container direction="column" alignItems='center' spacing={3}>
                <Grid item>
                    <Typography variant="h4" className={classes.typographyStyle}>
                        Update Article
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
                    <Snackbar open={message} autoHideDuration={3000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity='success'>
                            Post updated successfully !
                        </Alert>
                    </Snackbar>
                </Grid>

            </Grid>
        </Paper>
    )
}

export default EditArticle;
