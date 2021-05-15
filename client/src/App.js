import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Route } from 'react-router-dom';
import './App.css';

import { Paper,Grid } from '@material-ui/core';
import Navbar from './components/layouts/Navbar'
import Articles from './components/routes/Articles'
import DisplayArticle from './components/routes/DisplayArticle'
import AddArticle from './components/routes/AddArticle';
import EditArticle from './components/routes/EditArticle';



function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {

    async function fetchPosts() {
      try {
        const result = await axios.get('http://localhost:5000/articles');
        setPosts(result.data);
        console.log('Post added!')
      } catch (e) {
        console.log(e);
      }
    }
    fetchPosts();
  }, []);

  return (


    <Grid container direction="column">
      <Grid item>
        <Navbar/>
      </Grid>

      <Grid item container>
        <Grid item xs={0} sm={2}>
          {/* Left Gap */}
        </Grid>
        <Grid item xs={12} sm={8}> 
          <Route exact path="/" render={() => <Articles posts={posts} />} />
          <Route path="/add-article" render={() => <AddArticle />} />
          <Route path="/article/:id" render={(props) => <DisplayArticle {...props} posts={posts} />} />
          <Route path="/update/:id" render={(props) => <EditArticle {...props} posts={posts} />} />
        </Grid>
        <Grid item xs={0} sm={2}>
          {/* Right Gap */}
        </Grid>
      </Grid>
    </Grid>
   
  );
}

export default App;


{/**
       * The id that is entered by the user is saved in :id 
       * Then this id is passed as url params through props
       * this props contains the match,history,location properties
       * Out of these the match => params : Give  id : {<id_entered_by_user_in_the_search_bar>}
*/}
