import { cn } from 'lib/cn'

export default function Preview({ children, className, classContainer }) {
  return (
    <div className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border">
      <div className="theme-zinc w-full h-full">
        <div
          className={cn(
            'flex min-h-[350px] w-full justify-center p-20 items-center',
            classContainer,
          )}
        >
          <div
            className={cn(
              'w-full flex items-center justify-center gap-4',
              className,
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
