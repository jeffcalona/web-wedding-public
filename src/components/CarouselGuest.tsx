'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { DialogTrigger } from "./ui/dialog"

interface CarouselImagesProps {
  id: number,
  image: string
}

interface CarouselGuestProps {
  imageSelected: (image: string) => void
}

const carouselImages: CarouselImagesProps[] = [
  { id: 1, image: '/images/carouselGuest/IMG_3366.jpg' },
  { id: 2, image: '/images/carouselGuest/IMG_3372.jpg' },
  { id: 3, image: '/images/carouselGuest/IMG_3373.jpg' },
  { id: 4, image: '/images/carouselGuest/IMG_3383.jpg' },
  { id: 5, image: '/images/carouselGuest/IMG_3402.jpg' },
  { id: 6, image: '/images/carouselGuest/IMG_3405.jpg' },
  { id: 7, image: '/images/carouselGuest/IMG_3415.jpg' },
  { id: 8, image: '/images/carouselGuest/IMG_3416.jpg' }
]

const CarouselGuest: React.FC<CarouselGuestProps> = ({ imageSelected }) => {

  return (
    <Carousel className="h-[230px] px-9 flex overflow-y-hidden" opts={{
      dragFree: true
    }}>
      <CarouselContent className="h-full">
        {carouselImages.map((data, index) => (
          <CarouselItem key={index} onClick={() => imageSelected(data.image)} className="basis-[180px] h-full">
            <DialogTrigger asChild className="cursor-pointer">
              <img src={data.image} alt="Camila y Camilo" className="w-full h-full object-cover" />
            </DialogTrigger>
          </CarouselItem >
        ))}
      </CarouselContent >
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  )
}

export default CarouselGuest