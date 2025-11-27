import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User, Loader2, Sparkles } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
}

interface UserInfo {
  name: string;
  email: string;
  phone: string;
}

export const AIChat = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Привет! Я ваш AI-ассистент. Давайте начнем! Как вас зовут?",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    email: "",
    phone: "",
  });
  const [step, setStep] = useState<"name" | "email" | "phone" | "chat">("name");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [step]);

  const addMessage = (role: "user" | "assistant", content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      role,
      content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage.trim();
    setInputMessage("");
    addMessage("user", userMessage);

    // Сбор информации о пользователе
    if (step === "name") {
      setUserInfo({ ...userInfo, name: userMessage });
      setIsLoading(true);
      setTimeout(() => {
        addMessage(
          "assistant",
          `Приятно познакомиться, ${userMessage}! Теперь укажите ваш email адрес.`
        );
        setStep("email");
        setIsLoading(false);
      }, 800);
      return;
    }

    if (step === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(userMessage)) {
        setIsLoading(true);
        setTimeout(() => {
          addMessage("assistant", "Пожалуйста, введите корректный email адрес.");
          setIsLoading(false);
        }, 500);
        return;
      }
      setUserInfo({ ...userInfo, email: userMessage });
      setIsLoading(true);
      setTimeout(() => {
        addMessage(
          "assistant",
          `Отлично! Ваш email: ${userMessage}. Теперь укажите ваш номер телефона (необязательно, можете написать "пропустить").`
        );
        setStep("phone");
        setIsLoading(false);
      }, 800);
      return;
    }

    if (step === "phone") {
      if (userMessage.toLowerCase() === "пропустить" || userMessage.toLowerCase() === "skip") {
        setIsLoading(true);
        setTimeout(() => {
          addMessage(
            "assistant",
            `Хорошо! Теперь я готов ответить на ваши вопросы о наших услугах. Чем могу помочь?`
          );
          setStep("chat");
          setIsLoading(false);
        }, 800);
        return;
      }
      setUserInfo({ ...userInfo, phone: userMessage });
      setIsLoading(true);
      setTimeout(() => {
        addMessage(
          "assistant",
          `Спасибо за предоставленную информацию! Теперь я готов ответить на ваши вопросы о наших услугах. Чем могу помочь?`
        );
        setStep("chat");
        setIsLoading(false);
      }, 800);
      return;
    }

    // Режим чата с ИИ
    setIsLoading(true);
    
    // Имитация ответа ИИ (здесь будет подключен реальный API)
    setTimeout(() => {
      const responses = [
        "Отличный вопрос! Мы специализируемся на разработке AI-решений для бизнеса. Могу рассказать подробнее о наших услугах.",
        "Мы создаем умные алгоритмы для анализа данных, прогнозирования и автоматизации решений. Также разрабатываем чат-ботов для Telegram, Discord и Slack.",
        "Наши услуги включают: разработку AI-решений, создание чат-ботов, автоматизацию процессов, обучение и консалтинг, разработку веб-приложений с AI-интеграциями.",
        "Для получения более подробной информации, вы можете связаться с нами по email: aipraxispartners@gmail.com или в Telegram: @AiPPinfobot",
        "Мы поможем вам внедрить AI-технологии в ваш бизнес и оптимизировать рабочие процессы. Готовы обсудить ваш проект!",
      ];
      
      // Простая логика ответов на основе ключевых слов
      let response = responses[Math.floor(Math.random() * responses.length)];
      
      if (userMessage.toLowerCase().includes("услуг") || userMessage.toLowerCase().includes("что вы")) {
        response = responses[2];
      } else if (userMessage.toLowerCase().includes("контакт") || userMessage.toLowerCase().includes("связаться")) {
        response = responses[3];
      } else if (userMessage.toLowerCase().includes("бот") || userMessage.toLowerCase().includes("чат")) {
        response = responses[1];
      } else if (userMessage.toLowerCase().includes("проект") || userMessage.toLowerCase().includes("начать")) {
        response = responses[4];
      }
      
      addMessage("assistant", response);
      setIsLoading(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleSendContactInfo = () => {
    if (!userInfo.name || !userInfo.email) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля.",
        variant: "destructive",
      });
      return;
    }

    // Здесь будет отправка данных на сервер
    toast({
      title: "Данные сохранены!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
  };

  return (
    <div className="flex flex-col h-full w-full min-h-[500px] sm:min-h-[600px] glass-card rounded-2xl overflow-hidden relative">
      {/* Header */}
      <div className="bg-primary/10 backdrop-blur-sm border-b border-border p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
          <Bot className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground">AI Ассистент</h3>
          <p className="text-xs text-muted-foreground">Онлайн • Готов помочь</p>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/50 scrollbar-hide">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${
              message.role === "user" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-primary/20 text-primary"
              }`}
            >
              {message.role === "user" ? (
                <User className="w-4 h-4" />
              ) : (
                <Sparkles className="w-4 h-4" />
              )}
            </div>
            <div
              className={`flex-1 max-w-[80%] sm:max-w-[70%] ${
                message.role === "user" ? "items-end" : "items-start"
              } flex flex-col`}
            >
              <div
                className={`rounded-2xl px-4 py-2 ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground rounded-br-sm"
                    : "bg-card border border-border rounded-bl-sm"
                } animate-fade-in`}
              >
                <p className="text-sm whitespace-pre-wrap break-words">
                  {message.content}
                </p>
              </div>
              <span className="text-xs text-muted-foreground mt-1 px-1">
                {message.timestamp.toLocaleTimeString("ru-RU", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="bg-card border border-border rounded-2xl rounded-bl-sm px-4 py-2">
              <Loader2 className="w-4 h-4 animate-spin text-primary" />
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* User Info Summary (when collected) */}
      {step === "chat" && (userInfo.name || userInfo.email) && (
        <div className="px-4 py-2 bg-primary/5 border-t border-border">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>
              {userInfo.name && `👤 ${userInfo.name}`}
              {userInfo.email && ` • ✉️ ${userInfo.email}`}
              {userInfo.phone && ` • 📞 ${userInfo.phone}`}
            </span>
            <Button
              size="sm"
              variant="ghost"
              onClick={handleSendContactInfo}
              className="h-6 text-xs"
            >
              Сохранить контакты
            </Button>
          </div>
        </div>
      )}

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-border bg-background/50">
        <div className="flex gap-2">
          <Input
            ref={inputRef}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder={
              step === "name"
                ? "Введите ваше имя..."
                : step === "email"
                ? "Введите ваш email..."
                : step === "phone"
                ? "Введите телефон или 'пропустить'..."
                : "Напишите ваш вопрос..."
            }
            className="flex-1 glass-input"
            disabled={isLoading}
          />
          <Button
            type="submit"
            size="icon"
            className="glass-button"
            disabled={isLoading || !inputMessage.trim()}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </form>
    </div>
  );
};

