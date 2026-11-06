import { motion } from 'framer-motion';
import { Target, Clock, Laptop, Users, CheckCircle, Zap } from 'lucide-react';

const benefits = [
  { icon: Target, title: 'Практический подход', desc: '80% практики, 20% теории. Каждый урок — реальный проект.' },
  { icon: Clock, title: 'Гибкий график', desc: 'Учитесь в удобное время. Доступ к материалам 24/7.' },
  { icon: Laptop, title: 'Современные инструменты', desc: 'Figma, Adobe XD, Photoshop, Illustrator и другие.' },
  { icon: Users, title: 'Поддержка менторов', desc: 'Персональный ментор и сообщество единомышленников.' },
];

const advantages = [
  'Диплом о профессиональной переподготовке',
  'Помощь в составлении портфолио',
  'Доступ к закрытому сообществу дизайнеров',
  'Гарантия возврата денег в первые 14 дней',
  'Бессрочный доступ к материалам курса',
  'Еженедельные живые вебинары с экспертами',
  'Разбор домашних заданий от практикующих дизайнеров',
  'Стажировка в дизайн-студиях для лучших студентов',
];

export default function AboutPage() {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="w-4 h-4 text-primary-light" />
            <span className="text-sm text-primary-light">О курсе</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Станьте <span className="gradient-text">веб-дизайнером</span> востребованным специалистом
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Наш курс — это комплексная программа обучения, которая превратит вас из новичка 
            в уверенного веб-дизайнера, готового работать с реальными клиентами.
          </p>
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-primary-light" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-400">{benefit.desc}</p>
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
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold mb-4">
            Как проходит <span className="gradient-text">обучение</span>
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
              title="Как проходит обучение"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </section>

      {/* Advantages list */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-10">
            Что вы <span className="gradient-text">получите</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {advantages.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5"
              >
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">
            Формат <span className="gradient-text">обучения</span>
          </h2>
        </motion.div>
        <div className="max-w-2xl mx-auto space-y-6">
          {[
            { week: 'Неделя 1-2', title: 'Введение в веб-дизайн', desc: 'Основы, тренды, инструменты' },
            { week: 'Неделя 3-8', title: 'Практика в Figma', desc: 'Создание макетов, прототипирование' },
            { week: 'Неделя 9-16', title: 'Продвинутые техники', desc: 'Анимации, типографика, цвет' },
            { week: 'Неделя 17-24', title: 'Портфолио и карьера', desc: 'Реальные проекты, трудоустройство' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="text-xs font-bold text-primary-light text-center">{item.week}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
