import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Анна К.',
    role: 'Junior Designer в Тинькофф',
    text: 'Курс полностью изменил мою карьеру. Через 3 месяца после окончания я получила оффер в крупную компанию. Менторы — настоящие профессионалы!',
    rating: 5,
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    name: 'Игорь М.',
    role: 'Фрилансер',
    text: 'Отличная структура курса. Каждый модуль логически вытекает из предыдущего. Особенно понравился блок по Figma и дизайн-системам.',
    rating: 5,
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'Ольга С.',
    role: 'UI Designer в Ozon',
    text: 'Благодаря курсу я смогла перейти из графического дизайна в веб. Программа очень актуальная, все инструменты — самые современные.',
    rating: 5,
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'Павел Д.',
    role: 'Студент',
    text: 'Учусь на 3 модуле и уже вижу огромный прогресс. Домашние задания реально сложные, но менторы всегда помогают разобраться.',
    rating: 5,
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    name: 'Екатерина В.',
    role: 'Product Designer в VK',
    text: 'Лучший курс по веб-дизайну, который я встречала. Соотношение цены и качества — идеальное. Рекомендую всем, кто хочет войти в IT.',
    rating: 5,
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    name: 'Максим Л.',
    role: 'Веб-дизайнер',
    text: 'Портфолио, которое я собрал на курсе, помогло мне получить первые заказы на фрилансе. Уже окупил стоимость обучения за первый месяц.',
    rating: 4,
    gradient: 'from-indigo-500 to-violet-600',
  },
];

export default function ReviewsPage() {
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
            Отзывы <span className="gradient-text">студентов</span>
          </h1>
          <p className="text-lg text-gray-400">
            Узнайте, что говорят наши выпускники о курсе и результатах обучения
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 p-6 rounded-2xl bg-white/5 border border-white/10"
        >
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">4.9</div>
            <div className="text-sm text-gray-400">Средний рейтинг</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">5000+</div>
            <div className="text-sm text-gray-400">Выпускников</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">98%</div>
            <div className="text-sm text-gray-400">Рекомендуют</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">87%</div>
            <div className="text-sm text-gray-400">Трудоустроены</div>
          </div>
        </motion.div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${review.gradient} flex items-center justify-center`}>
                  <span className="text-lg font-bold text-white">{review.name[0]}</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{review.name}</h3>
                  <p className="text-xs text-gray-400">{review.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`w-4 h-4 ${j < review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-600'}`}
                  />
                ))}
              </div>
              <div className="relative flex-1">
                <Quote className="absolute -top-1 -left-1 w-6 h-6 text-primary/20" />
                <p className="text-sm text-gray-300 leading-relaxed pl-4">{review.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Review */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold mb-4">
            Видео <span className="gradient-text">отзывы</span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden glow-cyan"
        >
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Видео отзывы"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
