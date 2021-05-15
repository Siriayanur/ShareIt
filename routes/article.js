const express = require('express');
const router = express.Router();
const Articles = require('../models/articles.js');
const multer = require('multer')

// const storage = multer.diskStorage({
//     destination: (req, file, callback) => {
//         callback(null,'./client/public/uploads')
//     },
//     filename: (req, file, callback) => {
//         callback(null, file.originalname);
//     }
// })

// const upload = multer({storage : storage})

// GET ARTICLE 
router.get('/', async (req, res) => {
    const articles = await Articles.find();
    try {   
        res.status(200).json(articles);
    } catch (e) {
        res.status(400).json(`${e}`)
    }
        
})

// POST ARTICLE 

router.post('/add', async (req, res) => {
    try {
        const newArticle = new Articles({
            title: req.body.title,
            article: req.body.article,
            authorname: req.body.authorname,
            //Added the below line while adding image to db
            // articleImage : req.file.originalname
        })
        await newArticle.save()
        res.status(200).send(newArticle)
    } catch (e) {
        res.status(400).send(e);
    }
})


// FIND ARTICLE BY ID 
router.get('/:id', async (req, res) => {
    try {
        const article = await Articles.findById(req.params.id)
        res.status(200).send(article)
    } catch (e) {
        res.status(400).send(e);
    }
})

//FIND ARTICLE BY ID AND UPDATE
router.put('/update/:id',  async (req, res) => {
    const article = await Articles.findById(req.params.id);
    article.title = req.body.title;
    article.article = req.body.article;
    article.authorname = req.body.authorname;
    //Added the below line while adding image to db
    // article.articleImage = req.file.originalname
    try {
        
        await article.save();
        res.status(200).send(article);
    } catch (e) {
        res.status(400).send(e);
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const article = await Articles.findByIdAndDelete(req.params.id)
        res.status(200).send(article)
    }
    catch (e) {
        res.status(400).send(e);
    }
})

module.exports = router;