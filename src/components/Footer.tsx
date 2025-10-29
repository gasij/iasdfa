import { Sparkles } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 sm:py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6">
          {/* Logo */}
          <div className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <span className="text-lg font-bold group-hover:text-primary transition-colors">NeuroTech</span>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {currentYear} NeuroTech. Все права защищены.
          </p>

          {/* Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-all hover:scale-105 text-center">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-all hover:scale-105 text-center">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
