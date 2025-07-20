import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { FaWhatsapp } from 'react-icons/fa';
const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tour: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert(t('contact.form.success'));
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">{t('contact.info.title')}</h3>

              <div className="space-y-4">
                <a href="https://wa.me/56964968800" className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <FaWhatsapp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{t('contact.whatsapp')}</h4>
                    <p className="text-gray-300">+569 6496 8800</p>
                    <p className="text-gray-400 text-sm">{t('contact.whatsapp.available')}</p>
                  </div>
                </a>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{t('contact.email')}</h4>
                    <p className="text-gray-300">contacto.livepatagoniatravel@gmail.com</p>
                    <p className="text-gray-400 text-sm">{t('contact.email.response')}</p>
                  </div>
                </div>

                <a
                  href="https://maps.app.goo.gl/1qpWgAX4KbMV7B9z5"
                  className="flex items-start space-x-4 block"
                >
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{t('contact.location')}</h4>
                    <p className="text-gray-300">Arturo Prat 86, Puerto Natales, Chile</p>
                    <p className="text-gray-400 text-sm">{t('contact.location.desc')}</p>
                  </div>
                </a>


                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{t('contact.hours')}</h4>
                    <p className="text-gray-300">{t('contact.hours.weekday')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.form.title')}</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.name')} *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.email')} *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.phone')}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.tour')}</label>
                  <select
                    name="tour"
                    value={formData.tour}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  >
                    <option value="">{t('contact.form.tour.select')}</option>
                    <option value="torres-del-paine">{t('tours.torres.title')}</option>
                    <option value="ice-fields">{t('tours.ice.title')}</option>
                    <option value="photography">{t('tours.photo.title')}</option>
                    <option value="puma-tracking">{t('tours.puma.title')}</option>
                    <option value="fitz-roy">{t('tours.fitz.title')}</option>
                    <option value="culture-nature">{t('tours.culture.title')}</option>
                    <option value="custom">{t('contact.form.tour.custom')}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.message')} *</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.form.message.placeholder')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>{t('contact.form.send')}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;