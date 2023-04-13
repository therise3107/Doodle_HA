export type THeading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface IHeading {
  type?: THeading
  children?: React.ReactNode
  className?: string
}

export const Heading = (props: IHeading) => {
  const { children, className = 'heading', type } = props
  const Component = type ?? 'h1'

  return (
    <Component className={className}>{children}</Component>
  )
}
