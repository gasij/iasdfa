import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowRight, Sparkles, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время для обсуждения проекта.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsFormOpen(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Animated Grid Pattern - Hidden on mobile */}
      <div className="hidden md:block absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNTU1IiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center space-y-6 sm:space-y-8 animate-fade-in-up">
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight animate-scale-in px-2 sm:px-4">
            Искусственный интеллект,
            <br className="hidden sm:block" />
            <span className="text-primary glow-text">который работает</span>
            <br />
            на ваш бизнес
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-2 sm:px-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Создаём умные AI-решения, автоматизируем процессы и обучаем технологиям будущего
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 px-2 sm:px-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              onClick={() => setIsFormOpen(true)}
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

      {/* Contact Form Dialog */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="glass-card border-border max-w-md max-h-[90vh] overflow-y-auto mx-4">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-bold text-center">
              Начните работу с нами
            </DialogTitle>
            <DialogDescription className="text-center text-sm sm:text-base text-muted-foreground px-2">
              Заполните форму, и мы свяжемся с вами в течение 24 часов
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <label htmlFor="hero-name" className="block text-sm font-medium mb-2">
                Имя <span className="text-primary">*</span>
              </label>
              <Input
                id="hero-name"
                type="text"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="glass-input text-foreground"
              />
            </div>

            <div>
              <label htmlFor="hero-email" className="block text-sm font-medium mb-2">
                Email <span className="text-primary">*</span>
              </label>
              <Input
                id="hero-email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="glass-input text-foreground"
              />
            </div>

            <div>
              <label htmlFor="hero-phone" className="block text-sm font-medium mb-2">
                Телефон
              </label>
              <Input
                id="hero-phone"
                type="tel"
                placeholder="+7 (999) 123-45-67"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="glass-input text-foreground"
              />
            </div>

            <div>
              <label htmlFor="hero-message" className="block text-sm font-medium mb-2">
                Сообщение
              </label>
              <Textarea
                id="hero-message"
                placeholder="Расскажите о вашем проекте или задайте вопрос..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="glass-input text-foreground min-h-24"
                rows={4}
              />
            </div>

            <Button
              type="submit"
              className="w-full glass-button text-primary-foreground group text-sm sm:text-base"
              size="lg"
            >
              <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
              Отправить заявку
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};
