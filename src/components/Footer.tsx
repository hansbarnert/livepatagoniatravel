import React from 'react';
import { Mountain, Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mountain className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold">{t('company.name')}</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t('footer.company.desc')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.links')}</h3>
            <ul className="space-y-2">
              <li><a href="#tours" className="text-gray-400 hover:text-orange-500 transition-colors">{t('nav.tours')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">{t('nav.services')}</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-orange-500 transition-colors">{t('nav.gallery')}</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-orange-500 transition-colors">{t('nav.testimonials')}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-orange-500 transition-colors">{t('nav.contact')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">{t('footer.about')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact.info')}</h3>
            <div className="space-y-3">
              <a href='https://maps.app.goo.gl/1qpWgAX4KbMV7B9z5' className="flex items-start space-x-3 block">
                <MapPin className="h-5 w-5 text-orange-500 mt-0.5" />
                <div>
                  <p className="text-gray-400">Arturo Prat 86</p>
                  <p className="text-gray-400 text-sm">Puerto Natales, Chile</p>
                </div>
              </a>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <p className="text-gray-400">+569 6496 8800</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <p className="text-gray-400">contacto.livepatagoniatravel@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <a href="cloudanddigital.cl" className="text-gray-400 hover:text-orange-500 text-sm transition-colors"><p className="text-sm text-gray-400">
              © {new Date().getFullYear()} {t('footer.copyright')}
            </p>
            </a>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <p className="text-sm text-gray-400">
                {t('footer.privacy')}
              </p>
              <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">{t('footer.terms')}</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">{t('footer.cookies')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;