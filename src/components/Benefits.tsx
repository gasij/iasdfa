import { TrendingUp, Clock, Shield, Rocket } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Рост эффективности",
      description: "Увеличение производительности до 300% с помощью автоматизации",
      metric: "+300%",
    },
    {
      icon: Clock,
      title: "Экономия времени",
      description: "Автоматизируем рутинные задачи и высвобождаем ваше время",
      metric: "80%",
    },
    {
      icon: Shield,
      title: "Надёжность",
      description: "Проверенные технологии и качественная поддержка 24/7",
      metric: "99.9%",
    },
    {
      icon: Rocket,
      title: "Быстрый запуск",
      description: "От идеи до рабочего решения за минимальные сроки",
      metric: "14 дней",
    },
  ];

  return (
    <section id="benefits" className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration - Hidden on mobile */}
      <div className="hidden md:block absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Почему <span className="text-primary glow-text">выбирают нас</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Результаты, которые говорят сами за себя
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="glass-card rounded-2xl p-5 sm:p-6 pt-10 sm:pt-12 transition-all duration-300 h-full relative">
                  {/* Animated background gradient on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/5 to-transparent transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Metric Badge */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-primary text-primary-foreground px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-lg hover:scale-110 transition-transform cursor-default whitespace-nowrap z-20">
                    {benefit.metric}
                  </div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 transform hover:animate-float">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
