import TweetService from "../serivces/tweet-service.js";

const tweetService= new TweetService();
export const createTweet = async (req,res)=>{
    try {
        
        console.log(req.body)
        const response = await tweetService.create(req.body)
       

        return res.status(201).json({
            success : true,
            message : 'Successfully created a new tweet',
            data : response,
            err : {}
        })

    } catch (error) {
        
        return res.status(500).json({
            success : false , 
            message : "Failed to create tweet",
            data : {},
            err : error
        })
    }
}