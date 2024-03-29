import CommentService from "../serivces/comment-service.js";

const commentService= new CommentService();
export const createComment = async (req,res)=>{
    try {
        
        // console.log(req.body)
        const response = await commentService.create(req.query.modelId,req.query.modelType,req.body.userId,req.body.content)
       

        return res.status(201).json({
            success : true,
            message : 'Successfully created a new comment',
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