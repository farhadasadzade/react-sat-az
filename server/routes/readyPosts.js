import express from 'express'

import { getPosts, createPost, getPost, deletePost } from '../controllers/readyPosts.js'

import auth from '../middleware/auth.js'

const router = express.Router()

router.get('/', getPosts)
router.post('/', auth, createPost)
router.get('/:id', getPost)
router.delete('/:id', deletePost);

export default router;