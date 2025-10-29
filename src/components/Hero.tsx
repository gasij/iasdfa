import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Glow Effects - Simplified on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hidden md:block absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="hidden md:block absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-primary/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/2 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-primary/5 rounded-full blur-2xl animate-rotate"></div>
      </div>
      
      {/* Animated Grid Pattern - Hidden on mobile */}
      <div className="hidden md:block absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNTU1IiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 animate-fade-in-up">
          {/* Logo/Icon */}
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-2xl blur-xl"></div>
              <div className="relative w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center border border-primary/30 animate-float">
                <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-primary" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight animate-scale-in px-4">
            Искусственный интеллект,
            <br className="hidden sm:block" />
            <span className="text-primary glow-text">который работает</span>
            <br />
            на ваш бизнес
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Создаём умные AI-решения, автоматизируем процессы и обучаем технологиям будущего
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 px-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="glass-button text-primary-foreground group w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                Начать сейчас
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 animate-shimmer"></span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass-button text-primary w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Positioned outside content container */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center bg-background/20 backdrop-blur-sm">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
