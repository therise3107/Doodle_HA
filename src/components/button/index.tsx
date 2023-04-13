import './button.css'

export type TButtonType = 'button' | 'reset' | 'submit'

export interface IButton {
  disabled?: boolean
  type?: TButtonType
  text: string
  onClick?: () => void
}

export const Button = (props: IButton): JSX.Element => {
  const { disabled, type, text, onClick } = props

  return (
    <button disabled={disabled} className="button simple_button" type={type} onClick={onClick}>{text}</button>
  )
}
