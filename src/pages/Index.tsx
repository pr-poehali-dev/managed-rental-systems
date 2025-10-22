import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Icon from '@/components/ui/icon'
import { useToast } from '@/hooks/use-toast'

export default function Index() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    phone: '',
    email: '',
    objectsCount: '',
    format: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение 24 часов",
    })
  }

  const stats = [
    { value: '15+', label: 'Резидентов в ассоциации' },
    { value: '50+', label: 'Объектов под управлением' },
    { value: '8', label: 'Застройщиков-партнеров' },
    { value: '85%', label: 'Средняя загрузка объектов' }
  ]

  const benefits = [
    { icon: 'Building2', title: 'Эксклюзивные объекты', description: 'Прямой доступ к объектам от застройщиков без конкуренции' },
    { icon: 'Cpu', title: 'IT-платформа', description: 'Автоматизация процессов на системе стоимостью 15 млн ₽' },
    { icon: 'TrendingUp', title: 'Совместные закупки', description: 'Экономия до 35% на клининге, белье и хозтоварах' },
    { icon: 'GraduationCap', title: 'Образовательный центр', description: 'Повышение квалификации по стандартам 5* отелей' },
    { icon: 'Award', title: 'Контроль качества', description: 'Система аудитов, повышающая доверие инвесторов' },
    { icon: 'Users', title: 'Сообщество', description: 'Закрытый клуб лидеров рынка без внутренней конкуренции' }
  ]

  const membershipOptions = [
    {
      title: 'Резидент в коворкинге',
      icon: 'Building',
      price: '300 000 ₽',
      monthly: '35 000 ₽/мес',
      commission: '15% от выручки',
      features: [
        'Размещение в премиальном офисе',
        'Личные встречи с инвесторами',
        'Приоритетный доступ к объектам',
        'Полный доступ к IT-платформе'
      ],
      isPremium: true
    },
    {
      title: 'Резидент онлайн',
      icon: 'Laptop',
      price: '30 000 ₽',
      monthly: '5 000 ₽/мес',
      commission: '15% от выручки',
      features: [
        'Удаленное подключение',
        'Онлайн-участие в мероприятиях',
        'Полный доступ к IT-платформе',
        'Оплата за 4 месяца'
      ],
      isPremium: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Award" className="text-primary" size={32} />
              <span className="text-xl font-bold text-navy">АДУ КО</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О нас</a>
              <a href="#membership" className="text-gray-700 hover:text-primary transition-colors">Резидентство</a>
              <a href="#benefits" className="text-gray-700 hover:text-primary transition-colors">Преимущества</a>
              <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-gold/10 rounded-full mb-6">
              <Icon name="Sparkles" size={16} className="text-gold mr-2" />
              <span className="text-sm font-medium text-navy">Создаем новые стандарты рынка</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-navy mb-6 leading-tight">
              Платформа управляемой аренды
              <span className="block text-primary mt-2">Калининградской области</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Объединяем лучших управляющих, застройщиков и инвесторов для формирования цивилизованного рынка недвижимости
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                <Icon name="UserPlus" size={20} className="mr-2" />
                Стать резидентом
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white">
                <Icon name="PlayCircle" size={20} className="mr-2" />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy mb-4">О нас</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы создаем первую в регионе экосистему профессиональных управляющих недвижимостью, 
              объединяя лучшие практики, технологии и стандарты качества
            </p>
          </div>
        </div>
      </section>

      <section id="membership" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy mb-4">Условия резидентства</h2>
            <p className="text-xl text-gray-600">Выберите формат участия в ассоциации</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {membershipOptions.map((option, index) => (
              <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${option.isPremium ? 'border-2 border-gold' : ''}`}>
                {option.isPremium && (
                  <div className="absolute top-0 right-0 bg-gold text-white px-4 py-1 text-sm font-semibold">
                    ПРЕМИУМ
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={option.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{option.title}</CardTitle>
                  <CardDescription className="space-y-2">
                    <div className="text-3xl font-bold text-primary">{option.price}</div>
                    <div className="text-lg text-gray-600">{option.monthly}</div>
                    <div className="text-sm text-gold font-semibold">{option.commission}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {option.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <Icon name="CheckCircle2" size={20} className="text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${option.isPremium ? 'bg-gold hover:bg-gold/90' : 'bg-primary hover:bg-primary/90'}`}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy mb-4">Что получают наши резиденты</h2>
            <p className="text-xl text-gray-600">Эксклюзивные возможности для роста вашего бизнеса</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={benefit.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-primary to-navy text-white">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Оставить заявку на резидентство</h2>
            <p className="text-xl text-white/90">Заполните форму, и мы свяжемся с вами в течение 24 часов</p>
          </div>
          
          <Card className="bg-white/95 backdrop-blur">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Название компании *</Label>
                  <Input
                    id="company"
                    placeholder="ООО «Название»"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="name">ФИО руководителя *</Label>
                  <Input
                    id="name"
                    placeholder="Иванов Иван Иванович"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (900) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="objectsCount">Количество объектов под управлением</Label>
                  <Input
                    id="objectsCount"
                    type="number"
                    placeholder="0"
                    value={formData.objectsCount}
                    onChange={(e) => setFormData({...formData, objectsCount: e.target.value})}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="format">Интересующий формат резидентства *</Label>
                  <Select value={formData.format} onValueChange={(value) => setFormData({...formData, format: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите формат" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="coworking">Резидент в коворкинге</SelectItem>
                      <SelectItem value="online">Резидент онлайн</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600">Мы всегда на связи</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="MapPin" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Адрес</h3>
                <p className="text-gray-600 text-sm">г. Калининград</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="Phone" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-gray-600 text-sm">+7 (4012) 123-45-67</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="Mail" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600 text-sm">info@adu-ko.ru</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="Globe" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Сайт</h3>
                <p className="text-gray-600 text-sm">adu-ko.ru</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Telegram
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Icon name="Share2" size={20} className="mr-2" />
              VK
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-navy text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Award" size={28} />
                <span className="text-xl font-bold">АДУ КО</span>
              </div>
              <p className="text-white/70">
                АНО «Ассоциация доверительного управления Калининградской области»
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#membership" className="hover:text-white transition-colors">Резидентство</a></li>
                <li><a href="#benefits" className="hover:text-white transition-colors">Преимущества</a></li>
                <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Документы</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Устав ассоциации</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Кодекс стандартов</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Договор резидентства</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-white/70">
            <p>© 2024 АНО «Ассоциация доверительного управления Калининградской области». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}