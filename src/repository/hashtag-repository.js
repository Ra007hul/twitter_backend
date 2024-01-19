import hashtag from '../Models/hashtags.js'

class HashtagRepository{
    async create(data){
        try {
            const tag = await hashtag.create(data);
            return tag;
        } catch (error) {
            console.log(error)
        }
    }

    async get(id){
        try {
            const tag= await hashtag.findById(id);
            return tag;
        } catch (error) {
            console.log(error)
        }
    }

   async bulkCreate(data){
    try {
        const tags = await hashtag.insertMany(data);
        return tags;
    } catch (error) {
        console.log(error)
    }
   }

    async destroy(id){
        try {
            const tag = await hashtag.findByIdAndDelete(id)
            return tag;
        } catch (error) {
            console.log(error)
        }
    }


    async findByName(titleList){
        try{
           const tags = await hashtag.find({
            title : titleList
           })

           return tags;
        }
        catch(error){
           console.log(error)
        }
    }
    
}

export default HashtagRepository