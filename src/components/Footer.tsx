import { Sparkles, Mail, MessageCircle, Phone } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const telegramBotUrl = "https://t.me/AiPPinfobot";
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(telegramBotUrl)}`;

  return (
    <footer className="border-t border-border py-8 sm:py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 group mb-4">
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <span className="text-lg font-bold group-hover:text-primary transition-colors">NeuroTech</span>
            </div>
            <p className="text-muted-foreground text-sm text-center md:text-left">
              Делаем искусственный интеллект частью вашей команды
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="text-sm font-semibold text-foreground mb-2">Контакты</h3>
            <a
              href="mailto:aipraxispartners@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>aipraxispartners@gmail.com</span>
            </a>
            <a
              href={telegramBotUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>@AiPPinfobot</span>
            </a>
            <a
              href="tel:+79207803300"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>+7 (920) 780 33 00</span>
            </a>
          </div>

          {/* QR Code for Telegram Bot */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-sm font-semibold text-foreground mb-3">Telegram бот</h3>
            <a
              href={telegramBotUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white p-3 rounded-xl border-2 border-border hover:border-primary transition-colors shadow-lg">
                <img
                  src={qrCodeUrl}
                  alt="QR код для Telegram бота"
                  className="w-32 h-32 group-hover:scale-105 transition-transform"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center group-hover:text-primary transition-colors">
                Отсканируйте для перехода
              </p>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-muted-foreground text-sm text-center sm:text-left">
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
      </div>
    </footer>
  );
};
