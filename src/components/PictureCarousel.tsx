// @ts-nocheck

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useTranslation } from "react-i18next";

const PictureCarousel = (props) => {
  const { i18n } = useTranslation();
  return (
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"} className="mx-auto">
      <Carousel className="w-full mb-8">
        <CarouselContent>
          {props.list.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 xl:basis-1/5 ">
              <div className="p-1">
                <img src={image} alt="" className="w-full object-cover rounded-md h-[350px] md:h-[450px]" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default PictureCarousel;
