import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-light border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold gradient-text">WebDesign</span>
                <span className="block text-[10px] text-gray-400 uppercase tracking-widest">Online Course</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Профессиональный онлайн курс по веб-дизайну. Научитесь создавать современные сайты с нуля.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              {['Главная', 'О курсе', 'Программа', 'Преподаватели', 'Отзывы', 'Контакты'].map((item, i) => (
                <li key={i}>
                  <Link
                    to={['/', '/about', '/program', '/teachers', '/reviews', '/contact'][i]}
                    className="text-sm text-gray-400 hover:text-primary-light transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-primary-light" />
                info@webdesign-course.ru
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-primary-light" />
                +7 (999) 123-45-67
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-primary-light" />
                Москва, Россия
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Соц. сети</h4>
            <div className="flex gap-3">
              {['Telegram', 'VK', 'YouTube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary/20 hover:text-primary-light transition-all duration-300 text-xs font-bold"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-sm text-gray-500">
          © 2024 WebDesign Online Course. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
