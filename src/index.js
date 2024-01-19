import express from 'express'
import {connect} from './config/database.js'
import apiRoutes from './routes/index.js'
import bodyParser from 'body-parser';
const app = express();
const router = express.Router();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.use('/api',apiRoutes)

app.listen(3000,async ()=>{
    console.log("server started at port 3000");
    await connect();
   //   const tweet = await Tweet.create({
   //      content : "Created a seprate comment schema"
   //   })
   //   const comment = await Comment.create({
   //      content : "First comment with comment schema"
   //   })
   //   tweet.comments.push(comment)
   //   await tweet.save();
   //   console.log(tweet)

    // const hashtagrepo = new HashtagRepository();
    //  hashtagrepo.bulkCreate([
    //    {
    //       title : "Trend",
    //       tweet : []
    //    },
    //    {
    //       title : "cool",
    //       tweet : []
    //    },
    //    {
    //       title : "First",
    //       tweet : []
    //    },
    //    {
    //       title :  "Fake",
    //       tweet : []
    //    }
    //  ])
    // const obj = new TweetService();
    // obj.create({content : "#Learning Web dev"})
  
    // console.log('MongoDb connected');



})