import { Router } from 'express'

import ShowPostDetailService from '../services/ShowPostDetailService'

const postDetailRouter = Router()

postDetailRouter.get('/:post_id', async (request, response) => {
  try {
    const { post_id } = request.params
    const showPostDetail = new ShowPostDetailService()

    const postDetail = await showPostDetail.execute(Number(post_id))

    return response.json(postDetail[0])
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

export default postDetailRouter
