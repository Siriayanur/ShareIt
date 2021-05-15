const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    article: {
        type: String,
        required : true,
    },
    authorname: {
        type: String,
        required: true
    },
    bgColor: {
        type: String,
        default: '#fff'
    }
    // articleImage: {
    //     type: String,
    //     required : false
    // }
})
const Articles = mongoose.model("Articles", articleSchema);

module.exports = Articles;