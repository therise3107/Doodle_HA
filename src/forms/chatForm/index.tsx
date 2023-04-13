import { useState } from 'react'
import { Button, TextInput } from '../../components'

import './chatForm.css'

export interface IChatForm {
  onSubmit?: (body: string) => void
}

const validateMessage = (message: string) => message.trim()

export const ChatForm = (props: IChatForm) => {
  const { onSubmit } = props
  const [message, setMessage] = useState<string>('')

  const handleInputChange = (value: string) => setMessage(value)

  const isFromValid = () => validateMessage(message).length > 0

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isFromValid()) {
      onSubmit?.(message)
      setMessage('') // Reset the form
    }
  }

  return (
    <form className="chatForm" onSubmit={handleFormSubmit}>
      <TextInput name="message" placeholder="Message" value={message} onChange={handleInputChange} />
      <Button disabled={!isFromValid()} type="submit" text="Send" />
    </form>
  )
}
