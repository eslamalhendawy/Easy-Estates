import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import image1 from "/assets/propertyImage1.svg";
import image2 from "/assets/propertyImage2.svg";
import image3 from "/assets/propertyImage3.svg";
import image4 from "/assets/propertyImage4.svg";
import image5 from "/assets/propertyImage5.svg";

const PictureCarousel = () => {
  const images = [image1, image2, image3, image4, image5];
  return (
    <div className="mx-auto">
      <Carousel className="w-full mb-8">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 xl:basis-1/5">
              <div className="p-1">
                <img src={image} alt="" className="w-full object-cover rounded-md" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default PictureCarousel;
