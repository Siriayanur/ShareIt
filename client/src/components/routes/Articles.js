import React,{useState} from 'react'
import Spinner from '../../themes/Spinner'
import axios from 'axios'
import ArticleCard from '../layouts/ArticleCard';
import {  Grid} from '@material-ui/core';


const Articles = ({ posts }) => {
    const [article, setArticle] = useState([])
    
    const deleteArticleByID = (id) => {
        axios.delete(`/articles/${id}`)
            .then((res) => alert('Article got deleted'))
            .catch(e => { console.log(e) })
        setArticle(article.filter(post => id !== post.id))
    }
  return (
      <Grid container spacing={2}>
        
          {
            posts.length !== 0 ?
          (posts.map((post, i) =>
              <Grid item xs={12} sm={6} >
                  <ArticleCard key={i} post={post} deleteArticleByID={deleteArticleByID} />
              </Grid>
                ) ) : (<Spinner/>)
          }
     </Grid>
        
       
    )
}

export default Articles;
