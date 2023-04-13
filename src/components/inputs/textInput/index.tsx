import './textInput.css'

export type TInput = 'text'

export interface ITextInput {
  name: string
  id?: string
  placeholder?: string
  type?: TInput
  value?: string
  onChange?: (value: string) => void
}

export const TextInput = (props: ITextInput) => {
  const { name, id, placeholder, type = 'text', value, onChange } = props

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    onChange?.(event.currentTarget.value)
  }

  return (
    <input
      className='textInput'
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleInputChange}
    />
  )
}
