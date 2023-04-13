import { useEffect, useRef } from 'react'

import { Card, Container } from '../../components'
import { ChatForm } from '../../forms/chatForm/chatForm'
import { Message, MessageSection } from '../message'
import './chat.css'

const messages = [
  {
    _id: '62118e27d846fb001c38316b',
    message: 'Hello world',
    author: 'Tom',
    timestamp: 1645317671350,
    token: 'qSdDhODv3pca'
  },
  {
    _id: '62118e4ed846fb001c38316c',
    message: 'Hello world to you too!',
    author: 'Miguel',
    timestamp: 1645317710309,
    token: 'qSdDhODv3pca'
  },
  {
    _id: '62119022d846fb001c38316d',
    message: 'Te quiero, Miguel',
    author: 'Andrea',
    timestamp: 1645318178196,
    token: 'qSdDhODv3pca'
  },
  {
    _id: '621d15aad846fb001c38319e',
    message: 'Hola Miguel',
    author: 'Andreita',
    timestamp: 1646073258439,
    token: 'qSdDhODv3pca'
  },
  {
    _id: '621dec677b038b001bc7a897',
    message: 'Hola qué tal',
    author: 'Miguel',
    timestamp: 1646128231878,
    token: 'qSdDhODv3pca'
  },
  {
    _id: '621ded077b038b001bc7a898',
    message: 'Hola Juian',
    author: 'Juan',
    timestamp: 1646128391093,
    token: 'qSdDhODv3pca'
  },
  {
    _id: '621deed17b038b001bc7a899',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    author: 'Bryan',
    timestamp: 1646128849563,
    token: 'qSdDhODv3pca'
  },
  {
    _id: '621def117b038b001bc7a89a',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    author: 'Bryan',
    timestamp: 1646128913098,
    token: 'qSdDhODv3pca'
  },
  {
    _id: '621df0197b038b001bc7a89b',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    author: 'Bryan',
    timestamp: 1646129177234,
    token: 'qSdDhODv3pca'
  },
  {
    _id: '621df04d7b038b001bc7a89c',
    message: 'Test refresher',
    author: 'Bryan',
    timestamp: 1646129229945,
    token: 'qSdDhODv3pca'
  }
]

export const Chat = () => {
  const emptyChatSection = useRef<HTMLDivElement>(null)

  // Scroll to the latest message
  useEffect(() => {
    if (emptyChatSection.current !== null) {
      emptyChatSection.current.scrollIntoView()
    }
  }, [])

  return (
    <div className="chatParentWrapper">
    <div className="chatContent">
      <Container>
        {
          messages.map(data => {
            const { _id, message, author, timestamp } = data

            return (
              <MessageSection key={_id}>
                <Card>
                  <Message author={author} message={message} timestamp={String(timestamp)} />
                </Card>
              </MessageSection>
            )
          })
        }
        <div className='emptyScrollToEnd' ref={emptyChatSection} />
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
