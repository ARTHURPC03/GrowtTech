// import AppError from '../errors/AppError'

import api from '../config/api'

interface Posts {
  id: number
  userId: number
  title: string
  body: string
}

interface User {
  id: number
  name: string
  username: string
  email: string
}

interface UserPosts {
  author: User
  post: Posts
}

class ShowPostsService {
  public async execute(): Promise<any[]> {
    const users = (await api.get<User[]>('/users')).data
    const posts = (await api.get<Posts[]>('/posts')).data

    const postsMap = posts.map(post => {
      const author = users.filter(user => user.id === post.userId)

      return { post: { ...post }, author: { ...author } }
    })

    return postsMap
  }
}

export default ShowPostsService
