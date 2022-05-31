import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    creator: String,
    name: String,
    price: String,
    category: String,
    selectedFile: String
})

const PostModel = mongoose.model('PostModel', postSchema)

export default PostModel
