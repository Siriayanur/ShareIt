import { Card, Grid,Typography ,CardActions,CardContent,Button, Avatar, IconButton} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import BookIcon from '@material-ui/icons/Book';
import { Link } from 'react-router-dom';
/**
 * Title --> Link
 * author
 * post 
 * EditButton-->Link | deleteButton
 * 
 */
const useStyles = makeStyles({
    root: {
        minWidth: 275,
        border: 'red'
    },
    typographyStyle: {
        color: '#325288',
        fontSize: '1.6rem',
        fontFamily: 'Railway',
        fontStyle: 'oblique'
    },
    buttonStyles: {
        backgroundColor: '#eec4c4',
        color: '#4ca1a3',
        '&:hover': {
            backgroundColor: '#e2bcb7',
            color: '#4ca1a3'
        }
    },
    iconStyles: {
        color: '#d1d9d9',    
    }
});

const StyleGrid = (props) => {
    const avatars = ['https://www.easylinedrawing.com/wp-content/uploads/2019/08/watermelon_slice_drawing_tutorial.png',
        'https://www.easylinedrawing.com/wp-content/uploads/2019/04/strawberry_drawing_tutorial.png'
    ]
    const classes = useStyles();
    const randomNumber = Math.floor(Math.random() * 2) ;
    console.log(randomNumber);
    
    const { deleteArticleByID,post,key} = props;
    //,avatarSrc,bgColor
    const borderColor = '#679b9b'
    return (
        <Card id={key} className={classes.root} style={{ border: `1px solid ${borderColor}` }}>
            
            <CardHeader
                className={classes.cardHeaderStyle}
                avatar={
                    <Avatar src={avatars[randomNumber]} />
                        
                }
                action={
                    <IconButton aria-label="settings">
                    </IconButton>
                }
                titleTypographyProps={{className : classes.typographyStyle}}
                    title={post.title}
                    subheaderTypographyProps={{}}
                    subheader={post.authorname}
                />
            <CardContent style={{margin : '10px'}}>
                <Typography variant="body2" component="p">
                    {post.article}
                </Typography>
            </CardContent>

            <Grid container
                xs={12}
                justify='flex-start'
                spacing={3}
                style={{ margin: '10px' }}>
                        <Grid item>
                            <Link to={`/update/${post._id}` } style={{textDecoration : 'none'}}>
                                <Button
                                    size="small"
                                    className={classes.buttonStyles}
                                    startIcon={<EditIcon />}
                                    
                                >
                                    Edit
                                </Button>
                            </Link>
                        </Grid>
                            
                        <Grid item>
                            <Link to="/" style={ {textDecoration : 'none'}} > 
                                <Button size="small" className={classes.buttonStyles} startIcon={<DeleteIcon/> } onClick={() => deleteArticleByID(post._id)}>
                                    Delete
                                </Button>
                            </Link>
                        </Grid>
    
                        <Grid item>
                            <Link to={{pathname: `/article/${post._id}`}} style={ {textDecoration : 'none'}} >
                                <Button  size="small" className={classes.buttonStyles} startIcon={ <BookIcon/>}>
                                    Read
                                </Button>
                            </Link>
                        </Grid>
                </Grid>
        </Card>);
}


export default StyleGrid;
