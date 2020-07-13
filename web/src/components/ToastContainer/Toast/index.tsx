import React, { useEffect } from 'react'
import { FiXCircle } from 'react-icons/fi'

import { ToastMessage, useToast } from '../../../hooks/toast'

import { Container } from './styles'

import success from '../../../assets/success.png'
import info from '../../../assets/info.png'
import error from '../../../assets/error.png'

interface ToastProps {
  message: ToastMessage
  style: object
}

const icons = {
  info: <img src={info} alt="info" />,
  error: <img src={error} alt="error" />,
  success: <img src={success} alt="success" />,
}

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast()

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [removeToast, message.id])

  return (
    <Container
      type={message.type}
      hasDescription={!!message.description}
      style={style}
    >
      {icons[message.type || 'info']}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  )
}

export default Toast
