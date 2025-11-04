import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const BackgroundCarousel = () => {
  const images = [
    "/public/image1.png",
    "/public/imagem2.png",
    "/public/imagem3.png",
    "/public/imagem4.png"
  ];

  return (
    <div className="fixed inset-0 z-[-1]">
      <Carousel className="w-full h-full" opts={{ loop: true }}>
        <CarouselContent className="w-full h-full">
          {images.map((src, index) => (
            <CarouselItem key={index} className="w-full h-full">
              <div className="p-1 w-full h-full">
                <Card className="w-full h-full overflow-hidden">
                  <CardContent className="flex items-center justify-center p-0 w-full h-full">
                    <img src={src} alt={`Placeholder Image ${index + 1}`} className="w-full h-full object-cover" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default BackgroundCarousel;
