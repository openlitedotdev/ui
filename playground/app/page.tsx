import { Button, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from '@openlabs/ui'

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-center w-screen h-screen gap-y-4 p-24">
      {/** Add your example, before remove */}
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <h2>Header dialog</h2>
          </DialogHeader>
          <div>
            <DialogDescription>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum porro sint libero at. Eius illo harum dolorem quae explicabo sapiente pariatur, vitae accusamus aperiam sit, non officiis magni impedit deleniti, veniam commodi illum natus? Quos non fugit molestiae tempore? Voluptatem vel porro totam suscipit eveniet in omnis eius unde debitis veniam. Repudiandae ut quia voluptatem accusamus aut, nostrum explicabo tenetur neque deserunt voluptates nisi laudantium exercitationem provident quas delectus odio, velit accusantium consectetur beatae, quibusdam incidunt molestias inventore. Minus repudiandae quos voluptatum sed veritatis ut vero consequatur commodi architecto. Impedit quaerat distinctio iste quae aliquid ab molestiae dolorum deleniti eos!
            </DialogDescription>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  )
}
