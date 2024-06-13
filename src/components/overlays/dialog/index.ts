import Dialog from './dialog'
import DialogClose from './dialog-close'
import DialogDescription from './dialog-description'
import DialogTitle from './dialog-title'
import DialogTrigger from './dialog-trigger'
import DialogHeader from './dialog-header'
import DialogContent from './dialog-content'
import DialogFooter from './dialog-footer'
import DialogOverlay from './dialog-overlay'
import DialogPortal from './dialog-portal'

export type { Comp as DialogCloseComp, Props as DialogCloseProps } from './dialog-close'
export type { Comp as DialogDescriptionComp, Props as DialogDescriptionProps } from './dialog-description'
export type { Comp as DialogTitleComp, Props as DialogTitleProps } from './dialog-title'
export type { Comp as DialogHeaderComp } from './dialog-header'
export type { Comp as DialogContentComp, Props as DialogContentProps } from './dialog-content'
export type { Comp as DialogFooterComp } from './dialog-footer'
export {
  Dialog,
  DialogOverlay,
  DialogPortal,
  DialogClose,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
  DialogContent,
  DialogFooter,
}
