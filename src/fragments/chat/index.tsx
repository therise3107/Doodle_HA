import { Container } from '../../components'
import { ChatForm } from '../../forms/chatForm/chatForm'

import './chat.css'

export const Chat = () => {
  return (
    <div className="chatParentWrapper">
    <div className="chatContent">
      <Container>
        <div />
      </Container>
    </div>
    <div className="chatFooter">
      <Container>
        <ChatForm />
      </Container>
    </div>
  </div>
  )
}
