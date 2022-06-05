import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'

import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'
import readyPostRoutes from './routes/readyPosts.js'

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/admin-elanlar', postRoutes)
app.use('/istifadeciler', userRoutes)
app.use('/elanlar', readyPostRoutes)

const DB_URL = 'mongodb+srv://farhadasadzade:0e2Ys00cs7rI2Df8@react-sat-az.kvvxt.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on ${PORT}`)))
    .catch((error) => console.log(error.message))
