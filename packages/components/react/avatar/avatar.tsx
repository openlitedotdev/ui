import React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { avatar, cn } from '@openui-org/theme'

export interface Comp extends React.ElementRef<typeof AvatarPrimitive.Root> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {}

const Avatar = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(avatar(), className)}
    {...props}
  />
))

Avatar.displayName = AvatarPrimitive.Root.displayName

export default Avatar
