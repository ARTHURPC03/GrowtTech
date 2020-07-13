/* eslint-disable @typescript-eslint/camelcase */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

// import api from '../../services/api'

import { Container, DetailBox, ColumnLeft, ColumnRight } from './styles'

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

const PostDetail: React.FC = ({ match }: any) => {
  const { postObject } = match.params

  const [post, setPost] = useState<Post>({} as Post)

  // useEffect(() => {
  //   api.get(`postDetail/${post_id}`).then(response => {
  //     setPost(response.data)
  //   })
  // }, [post_id])

  return (
    <Container>
      <span>
        <Link to="/">
          <FaArrowLeft color="#ff9000" />
        </Link>
      </span>

      <DetailBox>
        <ColumnLeft>
          {/* {post !== undefined && <span>{post.post.body}</span>} */}
        </ColumnLeft>

        <ColumnRight>
          <div>{postObject}</div>
          {/* <div>{post}</div> */}
        </ColumnRight>
      </DetailBox>
    </Container>
  )
}

export default PostDetail
