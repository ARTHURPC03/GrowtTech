import { Router } from 'express'
import usersRouter from './users.routes'
import sessionsRouter from './sessions.routes'
import postsRouter from './posts.routes'
import postDetailRouter from './postDetail.routes'

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/sessions', sessionsRouter)
routes.use('/posts', postsRouter)
routes.use('/postDetail', postDetailRouter)

export default routes
