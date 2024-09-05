import type { SVGProps } from 'react'

export function Arrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 12H4m11 5s5-3.682 5-5s-5-5-5-5" color="currentColor"></path></svg>
  )
}
