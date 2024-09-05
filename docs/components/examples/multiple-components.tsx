import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Input,

  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Skeleton,
  Slider,

  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@openlite/ui'
import Image from 'next/image'
import { ArrowLeft } from '../icons/arrow-left'
import { ArrowRight } from '../icons/arrow-right'

import { Search } from '../icons/search'
import { DialogDemo } from './dialog'
import { ProgressDemo } from './progress'

const items = [
  'https://picsum.photos/100/100?random=1',
  'https://picsum.photos/100/100?random=2',
  'https://picsum.photos/100/100?random=3',
  'https://picsum.photos/100/100?random=4',
  'https://picsum.photos/100/100?random=5',
  'https://picsum.photos/100/100?random=6',
]

export function MultipleComponentDemo() {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-5 items-center py-5 flex-wrap lg:flex-nowrap">
          <Select>
            <SelectTrigger className="w-max">
              <SelectValue placeholder="Select a value" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex -space-x-2">
            <Avatar>
              <AvatarImage src="/example-sebastian.jpeg" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="/example-gerzon.jpeg" />
              <AvatarFallback>BC</AvatarFallback>
            </Avatar>
          </div>

          <Badge>Badge</Badge>
          <div className="w-full relative border border-default-300 rounded-medium">
            <Input type="search" placeholder="Search..." border="none" />
            <Search className="absolute top-2.5 right-4" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 space-y-3 py-5 flex-wrap lg:flex-nowrap">
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button outline="default">What is the music?</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Like a prayer - Maddona</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <DialogDemo />
          <Button className="">Read more</Button>
        </div>
        <header className="py-5 flex flex-col gap-4">
          <Slider defaultValue={[50]} max={100} step={1} />
          <ProgressDemo />
        </header>
        <div className="pt-5 md:flex items-center justify-center hidden">
          <Carousel
            opts={{
              align: 'start',
            }}
            className="w-full max-w-sm"
          >
            <CarouselContent>
              {items.map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Image src={_} width={100} height={100} alt="Isla bonitas" className="rounded-full" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious>
              <ArrowLeft />
            </CarouselPrevious>
            <CarouselNext>
              <ArrowRight />
            </CarouselNext>
          </Carousel>
        </div>
      </CardContent>
    </Card>
  )
}
