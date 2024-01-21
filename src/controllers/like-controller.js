import LikeService from '../serivces/like-service.js'

const likeService = new LikeService();
export const toggleLike = async  (req,res)=>{
    try {
        const response = await likeService.toggleLike(req.params.modelId,req.params.modelType,req.body.userId)
        return res.status(201).json({
            success : true,
            data : response ,
            err :{},
            message : 'Successfully toggled like'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success : false ,
            data : {},
            message : 'Something went wrong',
            err : error
        })
    }
}