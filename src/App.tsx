import { Chat } from './fragments/chat'

import { useLocalStorage } from './hooks'

const defaultAuthor = `${import.meta.env.VITE_DEFAULT_AUTHOR as string}`

const App = () => {
  const [author] = useLocalStorage<string>({
    key: 'author',
    initialValue: defaultAuthor
  })

  console.log(`you are ${author}, to change the author change the author key in localstorage`)

  return (
    <Chat />
  )
}

export default App
