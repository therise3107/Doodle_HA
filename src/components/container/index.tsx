import './container.css'

export interface IContainer {
  children: React.ReactNode
}

export const Container = (props: IContainer) => (
  <div className="container">
    { props.children }
  </div>
)
