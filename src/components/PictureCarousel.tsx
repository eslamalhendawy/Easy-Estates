// @ts-nocheck

import { useTranslation } from "react-i18next";

import PropertyImageDialog from "./ui/PropertyImageDialog";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const PictureCarousel = (props) => {
  return (
    <div dir="ltr" className="mx-auto">
      <Carousel className="w-full mb-8">
        <CarouselContent>
          {props.list.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 xl:basis-1/5 ">
              <PropertyImageDialog image={image} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default PictureCarousel;
