import React, { useCallback, ChangeEvent } from 'react'

import { Link } from 'react-router-dom'

import { Container, DropArea } from './styles'
import Button from '../../components/Button'

import { useToast } from '../../hooks/toast'

import api from '../../services/api'

const Profile: React.FC = () => {
  const { addToast } = useToast()

  const handleAvatarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const hotelToken = localStorage.getItem('@SleePets:token')
        const data = new FormData()

        data.append('avatar', e.target.files[0])

        api
          .patch('/hotels/avatar', data, {
            headers: { Authorization: `Bearer ${hotelToken}` },
          })
          .then(() => {
            addToast({
              type: 'success',
              title: 'Avatar atualizado',
            })
          })
      }
    },
    [addToast],
  )
  return (
    <Container>
      <h1>Escolha uma foto de Perfil</h1>
      <h3> Ou atualize a atual </h3>
      <DropArea>
        <label htmlFor="avatar">
          {/* <FiCamera size={20} /> */}
          <input
            data-testid="input-file"
            type="file"
            id="avatar"
            onChange={handleAvatarChange}
          />
        </label>
      </DropArea>

      <Link to="/">
        <Button type="button">Voltar para o dashboard</Button>
      </Link>
    </Container>
  )
}

export default Profile
