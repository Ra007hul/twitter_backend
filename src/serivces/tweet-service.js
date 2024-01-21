import {TweetRepository,HashtagRepository} from '../repository/index.js'


class TweetService{
    constructor(){
      this.tweetRepository = new TweetRepository();
      this.hashtagRepository = new HashtagRepository();
    }

   async create(data){
          try {
           
            const content = data.content
            let tags = content.match(/#[a-zA-Z0-9_]+/g);
            tags=tags.map(tag => tag.substring(1).toLowerCase())
            console.log(tags)
            const tweet = await this.tweetRepository.create(data)
            let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
            let titleOfPresentTags = alreadyPresentTags.map(tag => tag.title)
            let newTags = tags.filter( tag => !titleOfPresentTags.includes(tag))
            newTags = newTags.map((tag)=>{
              return { title : tag , tweets : [tweet.id]}
            })

            const response = await this.hashtagRepository.bulkCreate(newTags)
            console.log(response)
            alreadyPresentTags.forEach((tag)=>{
              tag.tweets.push(tweet.id)
              tag.save();
            })
            

            return tweet

          }
           catch (error) {
            console.log('Servic layer', error)
          }
    }

    async get(tweetId){
      try {
          const tweet = await this.tweetRepository.getWithComments(tweetId)
          return tweet
      } catch (error) {
        throw error
      }
    }
}

export default TweetService

