import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/90 backdrop-blur-md ${
        isScrolled ? "shadow-soft" : ""
      }`}    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Mente Sã
          </button>
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <button
                onClick={() => scrollToSection("hero")}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                Início
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                Serviços
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                Sobre Nós
              </button>
            </li>
            <li>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary/90"
              >
                Contato
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
