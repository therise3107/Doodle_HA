import { useEffect, useRef } from 'react'
import { Card, Heading } from '../../components'

import { type IMessageType } from '../../models/message'
import { useLocalStorage } from '../../hooks'

import './message.css'

export interface IMessageSection {
  messages: IMessageType[]
}

export const MessageSection = (props: IMessageSection) => {
  const [currentAuthor] = useLocalStorage<string>({
    key: 'author'
  })
  const emptyChatSection = useRef<HTMLDivElement>(null)
  const { messages } = props
  // Scroll to the latest message
  useEffect(() => {
    if (emptyChatSection.current !== null) {
      emptyChatSection.current.scrollIntoView()
    }
  }, [messages])

  return (<>
    {
      messages.map(data => {
        const { id, message, author, timestamp } = data
        const userIsAuthor = author === currentAuthor
        const className = `messageSection ${userIsAuthor ? 'highlightedMessage' : ''}`

        return (
          <div className={className} key={id}>
            <Card>
              <Message userIsAuthor={userIsAuthor} author={userIsAuthor ? undefined : author} message={message} timestamp={timestamp} />
            </Card>
          </div>
        )
      })
    }
    <div className='emptyScrollToEnd' ref={emptyChatSection} />
  </>)
}

export interface IMessage {
  userIsAuthor: boolean
  author?: string
  message: string
  timestamp?: string
}

export const Message = (props: IMessage) => {
  const { author, message, timestamp, userIsAuthor } = props

  return (
    <div className="messageWrapper">
      <div className="messageHeader">
        {
          (author != null) && <Heading type="h5">{author}</Heading>
        }
      </div>
      <div className="messageContent"><p>{message}</p></div>
      <div className={`messageTimestamp ${userIsAuthor ? 'text-end' : ''}`}><span>{timestamp}</span></div>
    </div>
  )
}
