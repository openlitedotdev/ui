import type { SVGProps } from 'react'

export function Terminal(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor">
        <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12m0-3h19M7 6h.009M11 6h.009"></path>
        <path d="m16 13l1.227 1.057c.515.445.773.667.773.943s-.258.498-.773.943L16 17m-8-4l-1.227 1.057C6.258 14.502 6 14.724 6 15s.258.498.773.943L8 17m5-5l-2 6"></path>
      </g>
    </svg>
  )
}
