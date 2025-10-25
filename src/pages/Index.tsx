import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1A1F2C] to-[#2A2F3C] text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/20 rounded-full text-sm font-medium">
              Для мастеров и владельцев салонов
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">AI-администратор для салонов красоты</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Ты — мастер или владелец небольшого салона.<br/>
              Каждый день одно и то же:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                <Icon name="MessageSquare" className="mb-4 text-primary" size={32} />
                <p className="text-gray-200">Сообщения, звонки, отмены, "ой, забыл прийти"…</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                <Icon name="Clock" className="mb-4 text-primary" size={32} />
                <p className="text-gray-200">Вместо клиентов — сплошные переписки и напоминания</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                <Icon name="TrendingDown" className="mb-4 text-primary" size={32} />
                <p className="text-gray-200">Ощущение, что времени на саму работу остаётся всё меньше</p>
              </div>
            </div>

            <div className="bg-primary/20 backdrop-blur-sm p-8 rounded-2xl border border-primary/30 mb-8">
              <p className="text-2xl md:text-3xl font-heading font-semibold mb-4">
                А если бы всё это происходило само?
              </p>
              <p className="text-lg text-gray-200">
                Клиенты записывались, получали напоминания, возвращались — без твоего участия.
              </p>
            </div>

            <a href="#participate">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-full">
                Принять участие
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                Откуда это всё
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Мы — команда, которая делает AI-ассистента для мастеров и небольших салонов
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
              <p className="text-xl font-medium text-center mb-12 text-primary">
                Он берёт на себя всё, что отвлекает тебя от дела:
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4 animate-fade-in">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Smartphone" className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-2">Принимает записи</h3>
                    <p className="text-muted-foreground">
                      Сам принимает записи прямо в Telegram или WhatsApp
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 animate-fade-in">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Calendar" className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-2">Проверяет время</h3>
                    <p className="text-muted-foreground">
                      Проверяет доступное время через YClients или календарь
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 animate-fade-in-delayed">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Bell" className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-2">Отправляет напоминания</h3>
                    <p className="text-muted-foreground">
                      Отправляет напоминания клиентам автоматически
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 animate-fade-in-delayed">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="UserCheck" className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-2">Возвращает клиентов</h3>
                    <p className="text-muted-foreground">
                      Вежливо возвращает тех, кто отменил, через месяц сам пишет "давно не виделись"
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 animate-fade-in-delayed">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="BarChart3" className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-2">Ведёт аналитику</h3>
                    <p className="text-muted-foreground">
                      Простая аналитика — кто был, кто не пришёл, какой прирост клиентов и выручки
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-primary/5 rounded-2xl border-2 border-primary/20">
                <p className="text-xl md:text-2xl font-heading font-semibold text-center text-primary">
                  «Это как администратор, только без зарплаты и отпусков.»
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg mb-6">
                Сейчас мы ищем <span className="font-bold text-primary">25 мастеров и владельцев салонов</span>,<br/>
                чтобы сделать продукт вместе с вами.
              </p>
              <a href="#participate">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-full">
                  Принять участие →
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="participate" className="py-20 md:py-32 bg-gradient-to-b from-white to-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                Что вы получаете, если пообщаемся
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Нам важно услышать, как всё устроено у вас — что реально мешает, что бесит,
                и что помогло бы освободить время для клиентов и себя.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
              <h3 className="text-2xl font-heading font-semibold mb-8 text-center">
                Если вы готовы пообщаться — вы:
              </h3>

              <div className="space-y-6 mb-12">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <p className="text-lg pt-1">
                    Расскажете, как у вас всё работает, и напрямую повлияете на продукт
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <p className="text-lg pt-1">
                    Получите ранний бесплатный доступ к AI-ассистенту
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <p className="text-lg pt-1">
                    Мы подключим и настроим ассистента под ваш салон (Telegram или WhatsApp)
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <p className="text-lg pt-1">
                    Сможете первыми увидеть, как AI помогает вернуть клиентов и экономить время каждый день
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 text-lg"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Номер телефона"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12 text-lg"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Расскажите немного о вашем салоне (необязательно)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-32 text-lg"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-semibold rounded-full"
                >
                  Хотите узнать, как это работает? — Спросите у меня 👋
                </Button>
              </form>

              <p className="text-center text-muted-foreground mt-6">
                Всего 10 минут, чтобы вместе понять, как сделать вашу работу проще
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1A1F2C] text-white py-8">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-gray-400">© 2024 AI-ассистент для салонов красоты</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;