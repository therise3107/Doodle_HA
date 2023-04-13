import { Container } from '../../components'
import { ChatForm } from '../../forms/chatForm'
import { MessageSection } from '../message'

import { getNMinsBeforeDate } from '../../helpers/dateHelper'
import { useApi, useLocalStorage, usePostApi } from '../../hooks'

import { type IMessageType, type IMessageResponse, buildMessage, mapToMessage } from '../../models/message'
import './chat.css'

const defaultParams = {
  limit: '10'
}

export const Chat = () => {
  const [timestamp, setTimestamp] = useLocalStorage<string>({
    key: 'timestamp',
    initialValue: getNMinsBeforeDate()
  })
  const [author] = useLocalStorage<string>({
    key: 'author'
  })
  const { data: messages, loading, error, setData } = useApi<IMessageType, IMessageResponse>({
    params: { ...defaultParams, since: timestamp },
    sanitizeData: mapToMessage
  })
  const { postData } = usePostApi<IMessageType, IMessageResponse>({ sanitizeData: mapToMessage })

  const handleChatFormSubmit = (message: string) => {
    // 1 Update the timeStamp in localStorage, we go back by 10 secs since the API doesn't give latest message
    setTimestamp(String(new Date().getTime() - 10000))

    // 2 Update the messages array with new state
    const builtMessage = buildMessage(message, author)
    setData([...messages, builtMessage])

    if (author.length > 0) {
      void postData({ message, author })
    }
  }

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
        <ChatForm onSubmit={handleChatFormSubmit} />
      </Container>
    </div>
  </div>
  )
}
