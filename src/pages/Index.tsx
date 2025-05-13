
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

// Типы данных для карт
interface GiftCard {
  id: number;
  amount: number;
  image: string;
  description: string;
}

const Index = () => {
  // Данные о доступных картах
  const giftCards: GiftCard[] = [
    {
      id: 1,
      amount: 1000,
      image: "https://images.unsplash.com/photo-1592512399470-65ba36d1df92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      description: "Идеально для небольших покупок в App Store или iTunes"
    },
    {
      id: 2,
      amount: 2500,
      image: "https://images.unsplash.com/photo-1584553279313-7ba74b330356?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      description: "Отличный выбор для приложений, игр и подписок"
    },
    {
      id: 3,
      amount: 5000,
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      description: "Премиальная карта для всех цифровых продуктов Apple"
    }
  ];

  // Состояние для выбранной карты
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  // Шаги для инструкции
  const instructionSteps = [
    {
      title: "Выберите номинал",
      description: "Выберите подходящий номинал Apple Gift Card из доступных вариантов.",
      icon: "CreditCard"
    },
    {
      title: "Оплатите заказ",
      description: "Выполните безопасную оплату с использованием предпочитаемого метода.",
      icon: "Wallet"
    },
    {
      title: "Получите код",
      description: "Мгновенно получите код активации на ваш e-mail.",
      icon: "Mail"
    },
    {
      title: "Активируйте карту",
      description: "Войдите в свой Apple ID и активируйте подарочную карту в App Store.",
      icon: "Gift"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      {/* Header */}
      <header className="py-4 px-6 md:px-8 sticky top-0 bg-white/80 backdrop-blur-md z-10 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Apple" className="h-6 w-6" />
            <span className="font-medium text-xl">Gift Card</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#cards" className="hover:text-blue-600 transition-colors">Карты</a>
            <a href="#howto" className="hover:text-blue-600 transition-colors">Как использовать</a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">Apple Gift Card</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Один подарок. Миллионы возможностей.
            </p>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full"
              onClick={() => document.getElementById('cards')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Выбрать карту
            </Button>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section id="cards" className="py-16 px-6 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Выберите номинал</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {giftCards.map((card) => (
              <Card 
                key={card.id} 
                className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${
                  selectedCard === card.id ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setSelectedCard(card.id)}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={`Apple Gift Card ${card.amount} ₽`} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-medium mb-2">{card.amount} ₽</h3>
                  <p className="text-gray-600 mb-4">{card.description}</p>
                  <Button 
                    className="w-full bg-gray-900 hover:bg-black text-white"
                  >
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section id="howto" className="py-16 px-6 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Как использовать</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {instructionSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={step.icon} className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-6 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-semibold text-center mb-12">Часто задаваемые вопросы</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-medium mb-2">Как долго действует карта?</h3>
              <p className="text-gray-600">Apple Gift Cards не имеют срока действия и могут быть использованы в любое время.</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-medium mb-2">Где можно использовать Apple Gift Card?</h3>
              <p className="text-gray-600">В App Store, iTunes Store, для покупки Apple Music, Apple TV+, Apple Arcade, iCloud и других сервисов Apple.</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-medium mb-2">Как быстро я получу код активации?</h3>
              <p className="text-gray-600">Код активации отправляется на ваш email сразу после подтверждения оплаты.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-8 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Готовы сделать подарок?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Подарите возможность выбора из миллионов приложений, игр, песен, фильмов и многого другого.
          </p>
          <Button 
            className="bg-white text-gray-900 hover:bg-gray-100 font-medium py-2 px-6 rounded-full"
            onClick={() => document.getElementById('cards')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Выбрать карту
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-8 bg-gray-100 text-sm">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Apple" className="h-5 w-5" />
                <span className="font-medium">Apple Gift Card</span>
              </div>
              <p className="text-gray-600 max-w-xs">
                Apple Gift Card может быть использована в App Store, iTunes Store, для Apple Music и других сервисов Apple.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-medium mb-4">Продукты</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Apple Gift Cards</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">App Store</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">iTunes</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-4">Поддержка</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-blue-600 transition-colors">FAQ</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Поддержка</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Контакты</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-4">Правовая информация</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Условия использования</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Конфиденциальность</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Правовая информация</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-gray-600">
            <p>© {new Date().getFullYear()} Apple Gift Card. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
