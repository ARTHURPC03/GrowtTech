import React from 'react'

import { Ul } from './styles'

import Button from '../Button'

interface Hotels {
  postsPerPage: number
  totalPosts: number
  paginate(number: number): number
}

const Pagination: any = ({ postsPerPage, totalPosts, paginate }: Hotels) => {
  const pageNumbers = []

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <Ul className="pagination">
        {pageNumbers.map(number => (
          <Button
            type="button"
            key={number}
            onClick={() => paginate(number)}
            className="page-link"
          >
            {number}
          </Button>
        ))}
      </Ul>
    </nav>
  )
}

export default Pagination
