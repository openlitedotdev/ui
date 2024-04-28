import React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { avatarFallback, cn } from '@openui-org/theme'

export interface Comp extends React.ElementRef<typeof AvatarPrimitive.Fallback> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> {}

const AvatarFallback = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(avatarFallback(), className)}
    {...props}
  />
))

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export default AvatarFallback
