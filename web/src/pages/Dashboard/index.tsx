import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api'

import { Container, HeaderBottom } from './styles'

import { useAuth } from '../../hooks/auth'

import Button from '../../components/Button'

import Pagination from '../../components/Pagination'
import Posts from '../../components/Posts'

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
const Dashboard: React.FC = () => {
  const { signOut } = useAuth()

  const [posts, setPosts] = useState<Post[]>([])

  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [postsPerPage] = useState<number>(12)

  const history = useHistory()

  useEffect(() => {
    setLoading(true)
    api.get('posts').then(response => {
      setPosts(response.data)
    })

    setLoading(false)
  }, [])

  function handleLogout(): void {
    signOut()

    history.push('/signin')
  }

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const paginate = (pageNumber: React.SetStateAction<number>) =>
    setCurrentPage(pageNumber)

  return (
    <Container>
      <HeaderBottom>
        <Link to="/profile">
          <Button>Perfil</Button>
        </Link>
        <Button onClick={handleLogout}>Logout</Button>
      </HeaderBottom>

      <h1>Posts Populares</h1>

      <Posts posts={currentPosts} loading={loading} />

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </Container>
  )
}

export default Dashboard
