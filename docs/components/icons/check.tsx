import type { SVGProps } from 'react'

export function Check(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10"></path>
        <path d="M8 12.75s1.6.912 2.4 2.25c0 0 2.4-5.25 5.6-7"></path>
      </g>
    </svg>
  )
}
