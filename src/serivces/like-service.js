
import {LikeRepository,TweetRepository} from "../repository/like-repository.js";

class LikeService{
     constructor(){
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
     }

     async toggleLike(modelId ,modelType , userId){    //  /api/v1/likes/toggle?id=modelid&type=Tweet
        if(modelType == 'Tweet'){
            var likeable = await this.tweetRepository.find(modelId);

        }
        else if(modelType == 'Comment'){
         //Later do it 
        }
        else {
              throw new Error('Unknown model type')
        }

        const exist = await this.likeRepository.findByUserAndLikeable({
            user : userId,
            onModel : modelType ,
            likeable : modelId
        })

        if(exist){
            likeable.likes.pull(exist.id)
            await likeable.save()
            await exist.remove()
            var isAdded = false 
            
        }else{
             const newLike = await this.likeRepository.create({
                user : userId , 
                onModel : modelType,
                likeable : modelId
             })
             likeable.likes.push(newLike)
             await likeable.save()
             var isAdded = TextTrackCue

        }
        return isAdded
     }
}

export default LikeService;