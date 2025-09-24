import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToTours = () => {
    const element = document.getElementById('tours');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pb-32 sm:pb-0">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(lago-pehoe.png)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 pt-80 md:pt-0">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          {t('hero.title.1')}
          <span className="block bg-gradient-to-r from-blue-400 to-orange-500 bg-clip-text text-transparent">
            {t('hero.title.2')}
          </span>
          {t('hero.title.3')}
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={scrollToTours}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            {t('hero.cta.tours')}
          </button>

          {/* <button className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-4 rounded-full font-medium transition-all duration-300">
            <Play className="h-5 w-5" />
            <span>{t('hero.cta.video')}</span>
          </button> */}
        </div>

        <div className="animate-bounce">
          <ArrowDown className="h-8 w-8 mx-auto text-white/80" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;