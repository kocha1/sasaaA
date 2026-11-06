import { motion } from 'framer-motion';
import { Linkedin, Instagram, Award } from 'lucide-react';

const teachers = [
  {
    name: 'Алексей Петров',
    role: 'Lead UI/UX Designer',
    company: 'Яндекс',
    experience: '10+ лет',
    bio: 'Создавал интерфейсы для продуктов с миллионной аудиторией. Эксперт в дизайн-системах.',
    skills: ['UI Design', 'Design Systems', 'Figma', 'User Research'],
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    name: 'Мария Иванова',
    role: 'Senior Product Designer',
    company: 'Сбер',
    experience: '8 лет',
    bio: 'Специализируется на мобильных интерфейсах и дизайн-мышлении. Ментор для 500+ студентов.',
    skills: ['Mobile Design', 'Prototyping', 'Adobe XD', 'UX Writing'],
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'Дмитрий Козлов',
    role: 'Creative Director',
    company: 'Студия Артемия Лебедева',
    experience: '12 лет',
    bio: 'Разрабатывал брендинг и веб-дизайн для крупнейших компаний России. Победитель Awwwards.',
    skills: ['Branding', 'Web Design', 'Illustration', 'Typography'],
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    name: 'Елена Смирнова',
    role: 'UX Researcher',
    company: 'VK',
    experience: '7 лет',
    bio: 'Проводит исследования пользователей и помогает командам создавать продукты, которые любят.',
    skills: ['UX Research', 'Analytics', 'A/B Testing', 'Personas'],
    gradient: 'from-emerald-500 to-teal-600',
  },
];

export default function TeachersPage() {
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
            Наши <span className="gradient-text">преподаватели</span>
          </h1>
          <p className="text-lg text-gray-400">
            Учитесь у практикующих специалистов из ведущих компаний индустрии
          </p>
        </motion.div>
      </section>

      {/* Teachers Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teachers.map((teacher, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${teacher.gradient} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-2xl font-bold text-white">{teacher.name[0]}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">{teacher.name}</h3>
                  <p className="text-sm text-primary-light">{teacher.role}</p>
                  <p className="text-xs text-gray-400 mt-1">{teacher.company} • {teacher.experience}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-300 leading-relaxed">{teacher.bio}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {teacher.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary/20 hover:text-primary-light transition-all duration-300">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary/20 hover:text-primary-light transition-all duration-300">
                  <Instagram className="w-4 h-4" />
                </a>
                <div className="ml-auto flex items-center gap-1 text-xs text-gray-400">
                  <Award className="w-4 h-4 text-accent" />
                  <span>Сертифицированный эксперт</span>
                </div>
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
            Познакомьтесь с <span className="gradient-text">командой</span>
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
              title="Наша команда"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
