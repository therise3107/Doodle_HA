import { formatDateToHumanReadableFormat } from '../helpers/dateHelper'

export interface IMessageType {
  id: string
  author: string
  message: string
  timestamp: string
}

export interface IMessageResponse {
  _id: string
  author: string
  message: string
  timestamp: number
  token: string
}

export const mapToMessage = (response: IMessageResponse): IMessageType => {
  const message: IMessageType = {
    id: response._id,
    author: response.author,
    message: response.message,
    timestamp: formatDateToHumanReadableFormat(response.timestamp)
  }

  return message
}

export const buildMessage = (message: string, author: string) => {
  const timestamp = String(Date.now())

  return {
    id: timestamp,
    author,
    message,
    timestamp
  } satisfies IMessageType
}
