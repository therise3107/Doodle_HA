import { Container } from '../../components'
import { ChatForm } from '../../forms/chatForm/chatForm'
import { MessageSection } from '../message'

import { useApi } from '../../hooks/useApi'

import { type IMessageType, type IMessageResponse, mapToMessage } from '../../models/message'
import './chat.css'

const defaultParams = {
  since: '1521096352339',
  limit: '10'
}

export const Chat = () => {
  const { data: messages, loading, error } = useApi<IMessageType, IMessageResponse>({
    params: defaultParams,
    sanitizeData: mapToMessage
  })

  if (error != null) {
    return <p>{error}</p>
  }

  return (
    <div className="chatParentWrapper">
    <div className="chatContent">
      <Container>
        { loading ? '...' : <MessageSection messages={messages} /> }
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
