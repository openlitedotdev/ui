import React from 'react'

export interface SeparatorProps { separator?: React.ReactNode }
export interface Comp extends HTMLElement {}
export interface Props extends React.ComponentPropsWithoutRef<'nav'>, SeparatorProps {}

const Breadcrumb = React.forwardRef<Comp, Props>(({ ...props }, ref) => {
  return (
    <nav ref={ref} aria-label="breadcrumb" {...props} />
  )
})

Breadcrumb.displayName = 'Breadcrumb'

export default Breadcrumb
