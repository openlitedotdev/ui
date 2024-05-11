import { cn } from '@openui-org/theme'

interface DocsPageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string
  text?: string
}

export function DocsPageHeader({
  heading,
  text,
  className,
  ...props
}: DocsPageHeaderProps) {
  return (
    <>
      <div className={cn('space-y-4', className)} {...props}>
        <h1 className="inline-block font-heading text-4xl lg:text-5xl font-bold">
          {heading}
        </h1>
        {text && <p className="text-large">{text}</p>}
      </div>
      <hr className="my-4" />
    </>
  )
}
