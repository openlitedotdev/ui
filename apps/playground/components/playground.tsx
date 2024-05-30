export default function Playground({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-44 flex flex-col gap-3 items-center">
      {children}
    </div>
  )
}
