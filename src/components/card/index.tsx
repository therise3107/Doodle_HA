import './card.css'

export interface ICard {
  children: React.ReactNode
}

export const Card = (props: ICard) => {
  const { children } = props

  return (
    <div className="card">
      <div className="cardContent">{children}</div>
    </div>
  )
}
