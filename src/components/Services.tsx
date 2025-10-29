import { Card } from "@/components/ui/card";
import { Brain, MessageSquare, Workflow, GraduationCap, Code, Zap } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Разработка AI-решений",
      description: "Создаём умные алгоритмы для анализа данных, прогнозирования и автоматизации решений",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: MessageSquare,
      title: "Чат-боты и AI-ассистенты",
      description: "Telegram, Discord, Slack — разрабатываем ботов, которые экономят ваше время и деньги",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: Workflow,
      title: "Автоматизация процессов",
      description: "Оптимизируем рабочие процессы, внедряем AI-инструменты для повышения эффективности",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: GraduationCap,
      title: "Обучение и консалтинг",
      description: "Практические курсы по нейросетям, автоматизации и внедрению AI в бизнес",
      color: "from-orange-500/20 to-yellow-500/20",
    },
    {
      icon: Code,
      title: "Разработка веб-приложений",
      description: "Создаём современные веб-решения с интеграцией AI-технологий",
      color: "from-indigo-500/20 to-blue-500/20",
    },
    {
      icon: Zap,
      title: "AI-интеграции",
      description: "Подключаем передовые AI-модели в ваши существующие системы и продукты",
      color: "from-red-500/20 to-rose-500/20",
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Наши <span className="text-primary glow-text">услуги</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Всё что нужно в мире AI и автоматизации
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden glass-card p-6 animate-fade-in-up hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                </div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
