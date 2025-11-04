
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const MobileMenu = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="animate-slide-down-fade">
        <div className="flex flex-col gap-4 p-4">
          <SheetClose asChild>
            <button
              onClick={() => scrollToSection("hero")}
              className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Início
            </button>
          </SheetClose>
          <SheetClose asChild>
            <button
              onClick={() => scrollToSection("services")}
              className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Serviços
            </button>
          </SheetClose>
          <SheetClose asChild>
            <button
              onClick={() => scrollToSection("about")}
              className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Sobre Nós
            </button>
          </SheetClose>
          <SheetClose asChild>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full"
            >
              Contato
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
