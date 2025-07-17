import React from 'react';
import { Clock, Users, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Tours = () => {
  const { t } = useLanguage();

  const tours = [
    {
      id: 1,
      title: t('tours.torres.title'),
      description: t('tours.torres.desc'),
      duration: '5',
      groupSize: '8-12',
      difficulty: 'Moderate',
      price: '$1,250',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      highlights: [t('tours.torres.highlight1'), t('tours.torres.highlight2'), t('tours.torres.highlight3'), t('tours.torres.highlight4')]
    },
    {
      id: 2,
      title: t('tours.ice.title'),
      description: t('tours.ice.desc'),
      duration: '7',
      groupSize: '6-10',
      difficulty: 'Challenging',
      price: '$2,100',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      highlights: [t('tours.ice.highlight1'), t('tours.ice.highlight2'), t('tours.ice.highlight3'), t('tours.ice.highlight4')]
    },
    {
      id: 3,
      title: t('tours.photo.title'),
      description: t('tours.photo.desc'),
      duration: '6',
      groupSize: '4-8',
      difficulty: 'Easy-Moderate',
      price: '$1,800',
      rating: 5.0,
      image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      highlights: [t('tours.photo.highlight1'), t('tours.photo.highlight2'), t('tours.photo.highlight3'), t('tours.photo.highlight4')]
    },
    {
      id: 4,
      title: t('tours.puma.title'),
      description: t('tours.puma.desc'),
      duration: '4',
      groupSize: '4-6',
      difficulty: 'Easy',
      price: '$1,650',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      highlights: [t('tours.puma.highlight1'), t('tours.puma.highlight2'), t('tours.puma.highlight3'), t('tours.puma.highlight4')]
    },
    {
      id: 5,
      title: t('tours.fitz.title'),
      description: t('tours.fitz.desc'),
      duration: '8',
      groupSize: '6-12',
      difficulty: 'Challenging',
      price: '$1,950',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/2522667/pexels-photo-2522667.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      highlights: [t('tours.fitz.highlight1'), t('tours.fitz.highlight2'), t('tours.fitz.highlight3'), t('tours.fitz.highlight4')]
    },
    {
      id: 6,
      title: t('tours.culture.title'),
      description: t('tours.culture.desc'),
      duration: '5',
      groupSize: '8-14',
      difficulty: 'Easy',
      price: '$1,350',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      highlights: [t('tours.culture.highlight1'), t('tours.culture.highlight2'), t('tours.culture.highlight3'), t('tours.culture.highlight4')]
    }
  ];

  const places_filters = [{
    id: 1,
    name: 'Puerto Natales'
  },
  {
    id: 2,
    name: 'Punta Arenas'
  },
  {
    id: 3,
    name: 'Argentina'
  },
  {
    id: 4,
    name: 'Torres del Paine'
  }]

  return (
    <section id="tours" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('tours.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('tours.subtitle')}
          </p>
        </div>
        <div className="filters flex gap-2 mb-2">
          {places_filters.map((filter) => (
            <div key={filter.id}>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300">
                {filter.name}
              </button>
            </div>

          ))}

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tour.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed text-justify">{tour.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{tour.duration} {t('tours.duration')}</span>
                  </div>
                </div>


                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">{tour.price}</span>
                    <span className="text-gray-500 text-sm">{t('tours.person')}</span>
                  </div>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300">
                    {t('tours.book')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;