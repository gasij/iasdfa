import { CheckCircle2 } from "lucide-react";

export const About = () => {
  const features = [
    "Разрабатываем умные AI-решения",
    "Создаём чат-ботов для бизнеса",
    "Автоматизируем бизнес-процессы",
    "Обучаем технологиям будущего",
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              О <span className="text-primary glow-text">нас</span>
            </h2>
          </div>

          <div className="space-y-8">
            <div className="glass-card rounded-2xl p-8 md:p-12 animate-fade-in-up relative overflow-hidden" style={{ animationDelay: "0.2s" }}>
              {/* Decorative gradient overlay */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
              
              <div className="relative z-10">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                  <span className="text-foreground font-semibold glow-text">NeuroTech</span> — ваш партнёр в мире искусственного интеллекта и автоматизации.
                </p>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                  Мы превращаем сложные технологии в простые и рабочие инструменты для вашего бизнеса.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 group hover:bg-primary/5 p-3 rounded-lg transition-colors"
                    >
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                      <span className="text-foreground group-hover:text-primary transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
