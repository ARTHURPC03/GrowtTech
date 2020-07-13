import { Router } from 'express'

import ShowPostsService from '../services/ShowPostsService'

const postsRouter = Router()

postsRouter.get('/', async (request, response) => {
  try {
    const showPosts = new ShowPostsService()

    const posts = await showPosts.execute()

    return response.json(posts)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})
export default postsRouter
