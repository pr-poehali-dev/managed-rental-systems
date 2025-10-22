import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
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
    setFormData({
      company: '',
      name: '',
      phone: '',
      email: '',
      objectsCount: '',
      format: ''
    })
  }

  const heroStats = [
    { value: '42%', label: 'Средний рост доходности резидентов' },
    { value: '85%', label: 'Загрузка объектов против 65% по рынку' },
    { value: '15', label: 'Эксклюзивных мест для резидентов' }
  ]

  const benefits = [
    { icon: 'Building2', title: 'Эксклюзивные объекты', description: 'Прямой доступ к объектам от застройщиков без конкуренции' },
    { icon: 'Cpu', title: 'IT-платформа', description: 'Автоматизация на системе стоимостью 15 млн ₽' },
    { icon: 'TrendingUp', title: 'Совместные закупки', description: 'Экономия до 35% на клининге, белье и хозтоварах' },
    { icon: 'GraduationCap', title: 'Образовательный центр', description: 'Повышение квалификации по стандартам 5* отелей' },
    { icon: 'Award', title: 'Контроль качества', description: 'Система аудитов, повышающая доверие инвесторов' },
    { icon: 'Users', title: 'Сообщество', description: 'Закрытый клуб лидеров рынка без конкуренции' }
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
        'Участие в 4 форумах бесплатно',
        'Персональный менеджер'
      ],
      roi: 'Окупаемость: 2-3 месяца',
      income: 'Доп. доход: от 400 000 ₽/мес',
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
        'Оплата за 4 месяца',
        'База инвесторов'
      ],
      roi: 'Окупаемость: 1 месяц',
      income: 'Доп. доход: от 200 000 ₽/мес',
      isPremium: false
    }
  ]

  const environmentCards = [
    {
      icon: '🌊',
      title: 'Уникальное расположение',
      description: 'Единственный регион России с прямым доступом к европейским рынкам',
      stats: ['+25% рост туризма в 2024', '2,5 млн туристов ежегодно', 'Прямые рейсы из 15 стран']
    },
    {
      icon: '💰',
      title: 'Льготные условия',
      description: 'Специальный экономический режим для бизнеса',
      stats: ['Сниженные налоговые ставки', 'Гранты до 5 млн ₽', 'Упрощенное лицензирование']
    },
    {
      icon: '📈',
      title: 'Растущий рынок',
      description: 'Самый динамично развивающийся рынок управляемой аренды',
      stats: ['+18% рост стоимости аренды', '5000+ новых апартаментов', 'Дефицит качественного управления']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-gold rounded-lg flex items-center justify-center">
                <Icon name="Award" className="text-white" size={24} />
              </div>
              <div>
                <div className="text-sm font-bold text-navy leading-tight">Ассоциация доверительного</div>
                <div className="text-sm font-bold text-navy leading-tight">управления КО</div>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors font-medium">О нас</a>
              <a href="#membership" className="text-gray-700 hover:text-primary transition-colors font-medium">Резидентство</a>
              <a href="#collective" className="text-gray-700 hover:text-primary transition-colors font-medium">Клуб</a>
              <a href="#benefits" className="text-gray-700 hover:text-primary transition-colors font-medium">Преимущества</a>
              <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors font-medium">Контакты</a>
            </div>
            <Button className="bg-gradient-to-r from-primary to-gold hover:opacity-90 text-white">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-navy via-primary to-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-gold/20 text-gold border-gold hover:bg-gold/30">
              <Icon name="Sparkles" size={14} className="mr-2" />
              Стандарты будущего уже здесь
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Создаем новые стандарты рынка
              <span className="block bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent mt-3">
                управляемой аренды
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Объединяем лучших управляющих, застройщиков и инвесторов Калининградской области для формирования цивилизованного рынка
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {heroStats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 animate-fade-in hover:scale-105 transition-transform" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="text-4xl md:text-5xl font-bold text-gold mb-2">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold hover:bg-gold/90 text-navy text-lg px-10 py-7 shadow-2xl shadow-gold/30">
                <Icon name="UserPlus" size={22} className="mr-2" />
                Стать резидентом
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-2 border-white text-white hover:bg-white hover:text-navy">
                <Icon name="PlayCircle" size={22} className="mr-2" />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary">
              <Icon name="MapPin" size={14} className="mr-2" />
              Калининградская область
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Идеальная среда для роста вашего бизнеса
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Уникальные возможности региона для развития рынка недвижимости
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {environmentCards.map((card, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-gold/5 rounded-bl-[100px]"></div>
                <CardHeader>
                  <div className="text-6xl mb-4">{card.icon}</div>
                  <CardTitle className="text-2xl mb-2">{card.title}</CardTitle>
                  <CardDescription className="text-base">{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {card.stats.map((stat, sIndex) => (
                      <li key={sIndex} className="flex items-start">
                        <Icon name="CheckCircle2" size={20} className="text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{stat}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="collective" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gold/10 text-gold border-gold">
              <Icon name="Users" size={14} className="mr-2" />
              Сила коллектива
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Клуб первопроходцев
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Не просто резиденты — соучредители новой экосистемы рынка
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { number: '30%', label: 'Экономия с первого месяца' },
              { number: '5-7', label: 'Единомышленников в альянсе' },
              { number: '25-40%', label: 'Рост доходности объектов' },
              { number: '150+', label: 'Объектов под управлением' }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-primary to-navy text-white border-none shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-8 text-center">Механизмы внутреннего роста</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { icon: 'Repeat', title: 'Перекрестные продажи', desc: 'Нет мест у вас → клиент уходит к коллеге. 15% остается в системе' },
                  { icon: 'TrendingDown', title: 'Совместные закупки', desc: 'Объединяем заказы → скидки 30-50% уже в первый месяц' },
                  { icon: 'BookOpen', title: 'Обмен опытом', desc: 'Еженедельные разборы кейсов и успешных методик' },
                  { icon: 'BarChart3', title: 'Общая аналитика', desc: 'Видим рыночные тренды и принимаем точные решения' }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border-2 border-gold">
                      <Icon name={item.icon as any} size={28} className="text-gold" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-white/80 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-navy mb-6 text-center">Почему не резиденты, а соучредители?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" className="text-primary" size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Равное право голоса</h4>
                    <p className="text-gray-600 text-sm">Совместно разрабатываете стандарты и принимаете решения о развитии</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" className="text-primary" size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Пожизненная скидка 50%</h4>
                    <p className="text-gray-600 text-sm">Как создатель экосистемы получаете особые условия навсегда</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" className="text-primary" size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Инвестиция, а не расход</h4>
                    <p className="text-gray-600 text-sm">Создаете правила игры для всего рынка, а не просто покупаете доступ</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Target" className="text-gold" size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Коллективный бренд</h4>
                    <p className="text-gray-600 text-sm">Вместе формируете "Альянс профессионалов" с силой для выхода на застройщиков</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Target" className="text-gold" size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Доказанные результаты</h4>
                    <p className="text-gray-600 text-sm">Сначала растем внутри, затем выходим к застройщикам с портфелем 150+ объектов</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Target" className="text-gold" size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Без конкуренции внутри</h4>
                    <p className="text-gray-600 text-sm">Ограниченное число мест — только 15 резидентов максимум</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="membership" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary">
              <Icon name="Star" size={14} className="mr-2" />
              Выберите свой путь
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Условия резидентства</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Два формата участия в элите рынка недвижимости
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {membershipOptions.map((option, index) => (
              <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${option.isPremium ? 'border-4 border-gold shadow-xl' : 'border-2'}`}>
                {option.isPremium && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-gold to-yellow-500 text-white px-6 py-2 text-sm font-bold shadow-lg">
                    ⭐ ПРЕМИУМ
                  </div>
                )}
                <CardHeader className="text-center pb-4 pt-8">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center ${option.isPremium ? 'bg-gradient-to-br from-gold to-yellow-500' : 'bg-gradient-to-br from-primary to-blue-600'}`}>
                    <Icon name={option.icon as any} size={40} className="text-white" />
                  </div>
                  <CardTitle className="text-3xl mb-4">{option.title}</CardTitle>
                  <CardDescription className="space-y-3">
                    <div className="text-5xl font-bold bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">{option.price}</div>
                    <div className="text-2xl text-gray-700 font-semibold">{option.monthly}</div>
                    <div className={`text-lg font-semibold ${option.isPremium ? 'text-gold' : 'text-primary'}`}>{option.commission}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <Separator className="mb-6" />
                  <ul className="space-y-4 mb-6">
                    {option.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <Icon name="CheckCircle2" size={22} className={option.isPremium ? 'text-gold' : 'text-primary'} />
                        <span className="text-gray-700 ml-3 text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={`p-4 rounded-xl mb-6 ${option.isPremium ? 'bg-gold/10' : 'bg-primary/10'}`}>
                    <div className="font-bold text-navy mb-1">{option.roi}</div>
                    <div className="text-gray-700">{option.income}</div>
                  </div>
                  <Button className={`w-full py-6 text-lg ${option.isPremium ? 'bg-gradient-to-r from-gold to-yellow-500 hover:opacity-90' : 'bg-gradient-to-r from-primary to-blue-600 hover:opacity-90'} text-white shadow-lg`}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gold/10 text-gold border-gold">
              <Icon name="Gift" size={14} className="mr-2" />
              Эксклюзивные возможности
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Что получают наши резиденты</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Преимущества, которые выведут ваш бизнес на новый уровень
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={benefit.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-primary via-navy to-primary text-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gold/20 text-gold border-gold">
              <Icon name="Rocket" size={14} className="mr-2" />
              Начните прямо сейчас
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Оставить заявку на резидентство</h2>
            <p className="text-xl text-white/90">
              Заполните форму, и мы свяжемся с вами в течение 24 часов
            </p>
          </div>
          
          <Card className="bg-white/98 backdrop-blur shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-base">Название компании *</Label>
                  <Input
                    id="company"
                    placeholder="ООО «Название»"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    required
                    className="h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base">ФИО руководителя *</Label>
                  <Input
                    id="name"
                    placeholder="Иванов Иван Иванович"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="h-12"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (900) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="objectsCount" className="text-base">Количество объектов под управлением</Label>
                  <Input
                    id="objectsCount"
                    type="number"
                    placeholder="0"
                    value={formData.objectsCount}
                    onChange={(e) => setFormData({...formData, objectsCount: e.target.value})}
                    className="h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="format" className="text-base">Интересующий формат резидентства *</Label>
                  <Select value={formData.format} onValueChange={(value) => setFormData({...formData, format: value})}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Выберите формат" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="coworking">Резидент в коворкинге (300 000 ₽)</SelectItem>
                      <SelectItem value="online">Резидент онлайн (30 000 ₽)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button type="submit" className="w-full bg-gradient-to-r from-gold to-yellow-500 hover:opacity-90 text-navy text-lg py-7 shadow-xl">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary">
              <Icon name="MessageCircle" size={14} className="mr-2" />
              Мы всегда на связи
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600">Готовы ответить на все ваши вопросы</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'MapPin', title: 'Адрес', text: 'г. Калининград' },
              { icon: 'Phone', title: 'Телефон', text: '+7 (4012) 123-45-67' },
              { icon: 'Mail', title: 'Email', text: 'info@adu-ko.ru' },
              { icon: 'Globe', title: 'Сайт', text: 'adu-ko.ru' }
            ].map((contact, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={contact.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-navy">{contact.title}</h3>
                  <p className="text-gray-600">{contact.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center gap-4 mt-12">
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Telegram
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
              <Icon name="Share2" size={20} className="mr-2" />
              VK
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-navy via-primary to-navy text-white py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gold to-yellow-500 rounded-xl flex items-center justify-center">
                  <Icon name="Award" size={28} className="text-navy" />
                </div>
                <div>
                  <div className="text-lg font-bold leading-tight">Ассоциация доверительного</div>
                  <div className="text-lg font-bold leading-tight">управления КО</div>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">
                АНО «Ассоциация доверительного управления Калининградской области» — создаем новые стандарты рынка управляемой аренды
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Разделы</h4>
              <ul className="space-y-3 text-white/70">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#membership" className="hover:text-white transition-colors">Резидентство</a></li>
                <li><a href="#collective" className="hover:text-white transition-colors">Клуб первопроходцев</a></li>
                <li><a href="#benefits" className="hover:text-white transition-colors">Преимущества</a></li>
                <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Документы</h4>
              <ul className="space-y-3 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Устав ассоциации</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Кодекс стандартов</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Договор резидентства</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="bg-white/20 mb-8" />
          
          <div className="text-center text-white/70">
            <p>© 2024 АНО «Ассоциация доверительного управления Калининградской области». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}