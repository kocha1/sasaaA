import { motion } from 'framer-motion';
import { BookOpen, Clock, CheckCircle } from 'lucide-react';

const modules = [
  {
    num: '01',
    title: 'Основы веб-дизайна',
    duration: '2 недели',
    lessons: 12,
    topics: ['Принципы дизайна', 'Композиция и сетки', 'Теория цвета', 'Типографика'],
  },
  {
    num: '02',
    title: 'Работа с Figma',
    duration: '3 недели',
    lessons: 18,
    topics: ['Интерфейс Figma', 'Компоненты и стили', 'Auto Layout', 'Прототипирование'],
  },
  {
    num: '03',
    title: 'UI Дизайн',
    duration: '3 недели',
    lessons: 16,
    topics: ['Дизайн-системы', 'Кнопки и формы', 'Навигация', 'Карточки и списки'],
  },
  {
    num: '04',
    title: 'UX Исследования',
    duration: '2 недели',
    lessons: 10,
    topics: ['User Research', 'Персоны', 'User Flow', 'Юзабилити-тестирование'],
  },
  {
    num: '05',
    title: 'Адаптивный дизайн',
    duration: '2 недели',
    lessons: 14,
    topics: ['Mobile-first подход', 'Брейкпоинты', 'Адаптивная типографика', 'Тестирование'],
  },
  {
    num: '06',
    title: 'Анимации и микроинтеракции',
    duration: '2 недели',
    lessons: 12,
    topics: ['CSS анимации', 'Figma Smart Animate', 'Lottie', 'Принципы анимации'],
  },
  {
    num: '07',
    title: 'Adobe Photoshop & Illustrator',
    duration: '3 недели',
    lessons: 20,
    topics: ['Обработка изображений', 'Создание иллюстраций', 'Иконки', 'Мокапы'],
  },
  {
    num: '08',
    title: 'Портфолио и карьера',
    duration: '3 недели',
    lessons: 18,
    topics: ['Создание портфолио', 'Behance и Dribbble', 'Поиск клиентов', 'Фриланс'],
  },
];

export default function ProgramPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Программа <span className="gradient-text">курса</span>
          </h1>
          <p className="text-lg text-gray-400">
            8 модулей, 120+ уроков, 6 месяцев интенсивного обучения с практикой
          </p>
        </motion.div>
      </section>

      {/* Modules */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((module, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold gradient-text">{module.num}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{module.title}</h3>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Clock className="w-3 h-3" />
                        {module.duration}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <BookOpen className="w-3 h-3" />
                        {module.lessons} уроков
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-2 mt-4">
                {module.topics.map((topic, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span className="text-sm text-gray-300">{topic}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold mb-4">
            Обзор <span className="gradient-text">программы</span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden glow"
        >
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Обзор программы"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
