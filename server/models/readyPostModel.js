import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    creatorId: String,
    creatorName: String,
    name: String,
    price: String,
    description: String,
    category: String,
    selectedFile: String,
    phone: String,
    createdAt: Date
})

const ReadyPostModel = mongoose.model('ReadyPostModel', postSchema)

export default ReadyPostModel
