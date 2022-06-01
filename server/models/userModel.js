import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    firstName: String,
    secondName: String,
    email: String,
    password: String,
    id: String
})

export default mongoose.model('User', userSchema)