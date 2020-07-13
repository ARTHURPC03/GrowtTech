import React, { useCallback, useRef, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { ThemeContext } from 'styled-components'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'

import * as Yup from 'yup'
import { useToast } from '../../hooks/toast'
import getValidationErrors from '../../utils/getValidationErrors'

import api from '../../services/api'

import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Content, AnimationContainer, Background } from './styles'

interface UpdateFormData {
  email: string
  password: string
  name: string
}

const Update: React.FC = () => {
  const { logo } = useContext(ThemeContext)
  const formRef = useRef<FormHandles>(null)
  const { addToast } = useToast()
  const history = useHistory()

  const handleUpdate = useCallback(
    async (data: UpdateFormData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        await api.put('/forgot', data)

        history.push('/signin')

        addToast({
          type: 'success',
          title: 'Atualização realizada!',
          description: 'Você já pode fazer seu logon no SleePets!',
        })
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)

          formRef.current?.setErrors(errors)

          return
        }

        addToast({
          type: 'error',
          title: 'Erro na atualização',
          description: 'Ocorreu um erro, tente novamente!',
        })
      }
    },
    [addToast, history],
  )

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logo} alt="SleePets" />

          <Form ref={formRef} onSubmit={handleUpdate}>
            <h1>Recupere seus dados</h1>

            <Input name="name" placeholder="Nome" />
            <Input name="email" placeholder="E-mail" />
            <Input name="password" type="password" placeholder="Senha" />

            <Button type="submit">Salvar</Button>
          </Form>

          <Link to="/">Voltar para logon</Link>
        </AnimationContainer>
      </Content>
    </Container>
  )
}

export default Update
