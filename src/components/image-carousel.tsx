'use client';

import Image, { StaticImageData } from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";



export default function ImageCarousel({ images }: { images: StaticImageData[] }) {


  return <Carousel className="w-full z-10"
                   opts={{ loop: true}}
                   plugins={[
                     Autoplay({
                       delay: 5000,
                       waitForAction: true,
                     }),
                   ]}>
  <CarouselContent>
  {images.map((image, index) => (
    <CarouselItem key={index}>
      <div className="w-full h-full flex max-w-[400px] mx-auto max-h-auto">
        <Image src={image}
          className="m-auto"
          priority
          width={400}
          height={400}
          alt="first floor exhibition images" />
      </div>
    </CarouselItem>
  ))}
  </CarouselContent>
</Carousel>
}