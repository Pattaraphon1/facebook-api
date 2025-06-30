import express from 'express'
const postRoute = express.Router()
import * as postController from '../controllers/post.controller.js'
import upload from '../middlewares/upload.middleware.js'

postRoute.get('/', postController.getAllPosts)
postRoute.post('/', upload.single('image'), postController.createPost)
postRoute.put('/:id', postController.updatePost)
postRoute.delete('/:id', postController.deletePost)

export default postRoute