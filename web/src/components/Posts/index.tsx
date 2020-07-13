/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'

import { useHistory } from 'react-router-dom'
import { Ul, ImageHighlights } from './styles'
import Dog from '../../assets/background6.jpg'
import Button from '../Button'

interface Post {
  post: {
    id: number
    userId: number
    title: string
    body: string
  }
  author: {
    0: {
      id: number
      name: string
      username: string
    }
  }
}

interface Props {
  posts: Post[]
  loading: boolean
}

const Posts: any = ({ posts, loading }: Props) => {
  // const history = useHistory()

  if (loading) {
    return <h2>Loading...</h2>
  }

  // function handleNavigateToDetail(post_id: number, post: any): void {
  //   history.push(`/detail/${post_id}`, { postObject: post })
  // }

  return (
    <Ul>
      {posts.map(post => (
        <li
          key={post.post.id}
          // onClick={() => handleNavigateToDetail(post.post.id, post)}
        >
          <strong>{post.author[0].name}</strong>
          <div>
            <h3>
              <strong>{post.post.title}</strong>
            </h3>
          </div>
          <p>{post.post.body}</p>
        </li>
      ))}
    </Ul>
  )
}

export default Posts
