import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Brain, MessageSquare, Workflow, GraduationCap, Code, Zap, CheckCircle2 } from "lucide-react";

export const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: Brain,
      title: "Разработка AI-решений",
      description: "Создаём умные алгоритмы для анализа данных, прогнозирования и автоматизации решений",
      color: "from-blue-500/20 to-cyan-500/20",
      details: {
        fullDescription: "Мы разрабатываем интеллектуальные AI-решения, которые помогают бизнесу принимать обоснованные решения на основе данных. Наши алгоритмы анализируют большие объемы информации, выявляют закономерности и создают прогнозы.",
        features: [
          "Машинное обучение для анализа данных",
          "Прогнозирование трендов и поведения",
          "Автоматизация принятия решений",
          "Персонализированные рекомендации",
          "Обработка естественного языка (NLP)",
        ],
        caseStudy: {
          title: "Кейс: Система прогнозирования спроса",
          description: "Для крупного ритейлера мы разработали AI-систему, которая прогнозирует спрос на товары с точностью 94%. Это позволило сократить излишки товара на складах на 30% и увеличить продажи на 15%.",
          results: [
            "Точность прогнозов: 94%",
            "Сокращение излишков: 30%",
            "Рост продаж: 15%",
            "Экономия: 2.5 млн руб/год",
          ],
        },
      },
    },
    {
      icon: MessageSquare,
      title: "Чат-боты и AI-ассистенты",
      description: "Telegram, Discord, Slack — разрабатываем ботов, которые экономят ваше время и деньги",
      color: "from-purple-500/20 to-pink-500/20",
      details: {
        fullDescription: "Создаём интеллектуальных чат-ботов для различных платформ, которые автоматизируют общение с клиентами, обрабатывают запросы и предоставляют информацию 24/7.",
        features: [
          "Интеграция с Telegram, Discord, Slack",
          "Обработка естественного языка",
          "Мультиязычная поддержка",
          "Интеграция с CRM-системами",
          "Аналитика и отчетность",
        ],
        caseStudy: {
          title: "Кейс: Чат-бот для поддержки клиентов",
          description: "Разработали AI-ассистента для интернет-магазина, который обрабатывает 80% запросов клиентов автоматически. Бот работает круглосуточно и отвечает на вопросы о товарах, заказах и доставке.",
          results: [
            "Автоматизация: 80% запросов",
            "Время ответа: < 2 секунды",
            "Удовлетворенность: 92%",
            "Экономия: 1.2 млн руб/год",
          ],
        },
      },
    },
    {
      icon: Workflow,
      title: "Автоматизация процессов",
      description: "Оптимизируем рабочие процессы, внедряем AI-инструменты для повышения эффективности",
      color: "from-green-500/20 to-emerald-500/20",
      details: {
        fullDescription: "Автоматизируем рутинные бизнес-процессы с помощью AI, освобождая время сотрудников для более важных задач. Внедряем интеллектуальные системы, которые учатся и улучшаются со временем.",
        features: [
          "Автоматизация документооборота",
          "Умная обработка заявок",
          "Автоматическая категоризация",
          "Интеллектуальная маршрутизация",
          "Мониторинг и аналитика",
        ],
        caseStudy: {
          title: "Кейс: Автоматизация обработки заявок",
          description: "Для логистической компании создали систему автоматической обработки заявок на доставку. AI анализирует заявки, проверяет данные и распределяет их по приоритетам без участия операторов.",
          results: [
            "Скорость обработки: +300%",
            "Ошибки: -85%",
            "Экономия времени: 40 часов/неделю",
            "ROI: 450% за первый год",
          ],
        },
      },
    },
    {
      icon: GraduationCap,
      title: "Обучение и консалтинг",
      description: "Практические курсы по нейросетям, автоматизации и внедрению AI в бизнес",
      color: "from-orange-500/20 to-yellow-500/20",
      details: {
        fullDescription: "Проводим обучение и консультации по внедрению AI в бизнес. Наши курсы включают практические задания и реальные кейсы, помогая командам освоить технологии будущего.",
        features: [
          "Курсы по машинному обучению",
          "Обучение работе с AI-инструментами",
          "Консалтинг по внедрению AI",
          "Воркшопы и тренинги",
          "Сертификация специалистов",
        ],
        caseStudy: {
          title: "Кейс: Обучение команды разработки",
          description: "Провели комплексное обучение команды из 25 разработчиков по работе с нейросетями и AI. После курса команда самостоятельно внедрила 3 AI-решения, которые увеличили эффективность на 40%.",
          results: [
            "Обучено специалистов: 25",
            "Внедрено решений: 3",
            "Рост эффективности: 40%",
            "Удовлетворенность: 96%",
          ],
        },
      },
    },
    {
      icon: Code,
      title: "Разработка веб-приложений",
      description: "Создаём современные веб-решения с интеграцией AI-технологий",
      color: "from-indigo-500/20 to-blue-500/20",
      details: {
        fullDescription: "Разрабатываем современные веб-приложения с интегрированными AI-возможностями. Создаём интуитивные интерфейсы, которые используют искусственный интеллект для улучшения пользовательского опыта.",
        features: [
          "Веб-приложения с AI-функциями",
          "Интеграция AI-моделей",
          "Адаптивный дизайн",
          "Высокая производительность",
          "Масштабируемость",
        ],
        caseStudy: {
          title: "Кейс: Платформа для анализа данных",
          description: "Разработали веб-платформу с AI-аналитикой для финансовой компании. Система обрабатывает миллионы транзакций в реальном времени и выявляет аномалии с точностью 99.7%.",
          results: [
            "Обработка: 1M+ транзакций/день",
            "Точность: 99.7%",
            "Время отклика: < 100ms",
            "Выявлено мошенничества: +250%",
          ],
        },
      },
    },
    {
      icon: Zap,
      title: "AI-интеграции",
      description: "Подключаем передовые AI-модели в ваши существующие системы и продукты",
      color: "from-red-500/20 to-rose-500/20",
      details: {
        fullDescription: "Интегрируем передовые AI-модели (GPT, Claude, Stable Diffusion и др.) в ваши существующие системы. Подключаем API, настраиваем работу и обеспечиваем надежную работу интеграций.",
        features: [
          "Интеграция GPT, Claude, других моделей",
          "API-интеграции",
          "Микросервисная архитектура",
          "Мониторинг и логирование",
          "Техническая поддержка",
        ],
        caseStudy: {
          title: "Кейс: Интеграция GPT в CRM",
          description: "Интегрировали GPT-4 в CRM-систему для автоматического создания ответов клиентам. Система анализирует историю общения и генерирует персонализированные ответы, экономя время менеджеров.",
          results: [
            "Время на ответ: -70%",
            "Качество ответов: +45%",
            "Удовлетворенность клиентов: +38%",
            "Экономия: 3.5 млн руб/год",
          ],
        },
      },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden glass-card p-5 sm:p-6 animate-fade-in-up hover:scale-105 transition-transform cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedService(index)}
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

        {/* Service Details Dialog */}
        {selectedService !== null && (
          <Dialog open={selectedService !== null} onOpenChange={() => setSelectedService(null)}>
            <DialogContent className="glass-card border-border max-w-2xl max-h-[90vh] overflow-y-auto mx-4">
              <DialogHeader>
                <div className="flex items-center gap-4 mb-2">
                  {services[selectedService] && (
                    <>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        {(() => {
                          const Icon = services[selectedService].icon;
                          return <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />;
                        })()}
                      </div>
                      <DialogTitle className="text-2xl sm:text-3xl font-bold">
                        {services[selectedService].title}
                      </DialogTitle>
                    </>
                  )}
                </div>
                <DialogDescription className="text-base text-muted-foreground">
                  {services[selectedService]?.description}
                </DialogDescription>
              </DialogHeader>

              {services[selectedService]?.details && (
                <div className="space-y-6 mt-4">
                  {/* Full Description */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">Описание</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {services[selectedService].details.fullDescription}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">Возможности</h4>
                    <ul className="space-y-2">
                      {services[selectedService].details.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Case Study */}
                  {services[selectedService].details.caseStudy && (
                    <div className="bg-primary/5 rounded-lg p-5 border border-primary/20">
                      <h4 className="text-lg font-semibold mb-3 text-primary">
                        {services[selectedService].details.caseStudy.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {services[selectedService].details.caseStudy.description}
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {services[selectedService].details.caseStudy.results.map((result, idx) => (
                          <div key={idx} className="bg-background/50 rounded p-3 border border-primary/10">
                            <p className="text-sm font-medium text-primary">{result}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
};
