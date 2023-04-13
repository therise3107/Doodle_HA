import { useState } from 'react'
import { Button, TextInput } from '../../components'

import './chatForm.css'

export const ChatForm = (): JSX.Element => {
  const [message, setMessage] = useState<string>('')

  const handleInputChange = (value: string) => setMessage(value)

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log('submit ', message)
  }

  return (
    <form className="chatForm" onSubmit={handleFormSubmit}>
      <TextInput name="message" placeholder="Message" value={message} onChange={handleInputChange} />
      <Button type="submit" text="Send" />
    </form>
  )
}
