import { Mail, MessageCircle, Phone } from "lucide-react";
import { AIChat } from "./AIChat";

export const Contact = () => {

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration - Hidden on mobile */}
      <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Свяжитесь <span className="text-primary glow-text">с нами</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Готовы начать проект? Напишите нам!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          {/* AI Chat */}
          <div className="animate-fade-in-up flex h-full">
            <AIChat />
          </div>

          {/* Contact Info */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 animate-fade-in-up relative overflow-hidden flex flex-col h-full min-h-[500px] sm:min-h-[600px]">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-shimmer"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">
                Наши <span className="text-primary glow-text">контакты</span>
              </h3>
              
              <div className="space-y-4 flex-1 flex flex-col justify-center">
                <a
                  href="mailto:aipraxispartners@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      aipraxispartners@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://t.me/AiPPinfobot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Telegram</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      @AiPPinfobot
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+79207803300"
                  className="flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Телефон</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      +7 (920) 780 33 00
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
