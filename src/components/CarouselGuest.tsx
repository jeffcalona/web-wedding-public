'use client'

import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"

interface CarouselImagesProps {
  id: number,
  image: string
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

const CarouselGuest = () => {

  return (
    <Carousel className="h-[230px] flex">
      <CarouselContent className="h-full">
        {carouselImages.map((data, index) => (
          <CarouselItem key={index} className="basis-[180px] h-full">
            <img src={data.image} alt="Camila y Camilo" className="w-full h-full object-cover" />
          </CarouselItem >
        ))}
      </CarouselContent >
    </Carousel>
  )
}

export default CarouselGuest