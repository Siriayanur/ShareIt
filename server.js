const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const articleRoutes = require('./routes/article.js')
const URI = require('./keys.js');
const app = express();
const port = process.env.port || 5000;


app.use(cors());
app.use(express.json())

app.use('/articles',articleRoutes)
const CONNECTION_URL = URI.url;

mongoose.connect(CONNECTION_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then((m) => app.listen(port, () => console.log(`SERVER on PORT : ${port}`)))
    .catch((e) => console.log(e.message))


    

mongoose.set('useFindAndModify', false);