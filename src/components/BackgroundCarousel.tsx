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
    "/image1.png",
    "/imagem2.avif",
    "/imagem3.jpg",
    "/imagem4.jpg"
  ];

  return (
    <div className="fixed inset-0 z-[-1]">
      <Carousel className="w-full h-full" opts={{ loop: true }}>
        <CarouselContent className="w-full h-full">
          {images.map((src, index) => (
            <CarouselItem key={index} className="w-full h-full">
              <div className="w-full h-full">
                <Card className="w-full h-full overflow-hidden">
                  <CardContent className="flex items-start md:items-center justify-center p-0 w-full h-full bg-black pt-16">
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
