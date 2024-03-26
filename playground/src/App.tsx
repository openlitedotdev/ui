import { Alert, AlertDescription, AlertTitle, Button, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@design-system/react'
import { ArrowLeft, ArrowRight, CircleAlert, MailCheck, TriangleAlert } from 'lucide-react'

function App() {
  return (
    <>
      <main className="container mx-auto bg-purple-400/80 text-white h-screen flex justify-center items-center gap-6 mt-10 rounded flex-col">
        <Button variant="success" size="lg">
          Examples UI
        </Button>
        <Button variant="primary" size="lg">
          Examples UI
        </Button>
        <Button variant="secondary" size="lg">
          Examples UI
        </Button>
        <Button variant="error" size="lg">
          Examples UI
        </Button>
        <Button>
          Examples UI
        </Button>
        <Button variant="warn">
          Examples UI
        </Button>
        <Button>
          <TriangleAlert className="size-6" />
          Examples UI
        </Button>
        <Alert variant="error">
          <TriangleAlert className="size-6" />
          <AlertTitle>
            Hi Teams Open Land
          </AlertTitle>
          <AlertDescription>
            This example component alert by Open Land
          </AlertDescription>
        </Alert>
        <Alert variant="success">
          <MailCheck className="size-6" />
          <AlertTitle>
            Hi Teams Open Land
          </AlertTitle>
          <AlertDescription>
            This example component alert by Open Land
          </AlertDescription>
        </Alert>
        <Alert variant="warn">
          <CircleAlert className="size-6" />
          <AlertTitle>
            Hi Teams Open Land
          </AlertTitle>
          <AlertDescription>
            This example component alert by Open Land
          </AlertDescription>
        </Alert>

        <Carousel opts={{ align: 'start' }} className="w-full max-w-sm">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious>
            <ArrowLeft className="size-6" />
          </CarouselPrevious>
          <CarouselNext>
            <ArrowRight className="size-6" />
          </CarouselNext>
        </Carousel>

      </main>
    </>
  )
}

export default App
