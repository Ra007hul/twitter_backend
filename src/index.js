const express = require('express')
const connect = require('./config/database')
const app = express();
const TweetRepository = require('./repository/tweet-repository')
const Tweet = new TweetRepository();
const Comment = require('./Models/comment');
app.listen(3000,async ()=>{
    console.log("server started at port 3000");
    await connect();
     const tweet = await Tweet.create({
        content : "Created a seprate comment schema"
     })
     const comment = await Comment.create({
        content : "First comment with comment schema"
     })
     tweet.comments.push(comment)
     await tweet.save();
     console.log(tweet)

    console.log('MongoDb connected');



})