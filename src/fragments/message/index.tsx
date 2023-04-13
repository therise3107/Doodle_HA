import { Heading } from '../../components'
import { formatDateToHumanReadableFormat } from '../../helpers/dateHelper'

import './message.css'

export interface IMessageSection {
  children: React.ReactNode
  justify?: 'start' | 'end'
}

export const MessageSection = (props: IMessageSection) => {
  const { children, justify = 'start' } = props
  const className = `messageSection justify-${justify}`

  return (
    <div className={className}>
      {children}
    </div>
  )
}

export interface IMessage {
  author?: string
  message: string
  timestamp?: string
}

export const Message = (props: IMessage) => {
  const { author, message, timestamp } = props

  return (
    <div className="messageWrapper">
      <div className="messageHeader">
        {
          (author != null) && <Heading type="h5">{author}</Heading>
        }
      </div>
      <div className="messageContent"><p>{message}</p></div>
      <div className="messageTimestamp"><span>{formatDateToHumanReadableFormat(timestamp)}</span></div>
    </div>
  )
}
