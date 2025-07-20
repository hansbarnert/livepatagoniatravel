import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import TourCard from './Tourcard';
const Tours = () => {
  const [filter_id, setFilter] = useState(1)
  const { t } = useLanguage();

  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 0,
    },
  })

  const tours = [
    {
      id: 1,
      title: t('tours.city_tour_natales.title'),
      description: t('tours.city_tour_natales.desc'),
      duration: '5',
      groupSize: '8-12',
      difficulty: 'Moderate',
      price: '$1,250',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      highlights: [t('tours.torres.highlight1'), t('tours.torres.highlight2'), t('tours.torres.highlight3'), t('tours.torres.highlight4')],
      category: 1
    },
    {
      id: 2,
      title: t('tours.cabalgata_dorotea.title'),
      description: t('tours.cabalgata_dorotea.desc'),
      duration: '5',
      groupSize: '8-12',
      difficulty: 'Moderate',
      price: '$1,250',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      highlights: [t('tours.torres.highlight1'), t('tours.torres.highlight2'), t('tours.torres.highlight3'), t('tours.torres.highlight4')],
      category: 1
    },
    {
      id: 3,
      title: t('tours.cueva_milodon.title'),
      description: t('tours.cueva_milodon.desc'),
      duration: '5',
      groupSize: '8-12',
      difficulty: 'Moderate',
      price: '$1,250',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      highlights: [t('tours.torres.highlight1'), t('tours.torres.highlight2'), t('tours.torres.highlight3'), t('tours.torres.highlight4')],
      category: 1
    },
    {
      id: 4,
      title: t('tours.cabalgata_sofia.title'),
      description: t('tours.cabalgata_sofia.desc'),
      duration: '5',
      groupSize: '8-12',
      difficulty: 'Moderate',
      price: '$1,250',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      highlights: [t('tours.torres.highlight1'), t('tours.torres.highlight2'), t('tours.torres.highlight3'), t('tours.torres.highlight4')],
      category: 1
    },
    {
      id: 5,
      title: t('tours.balmaceda_serrano.title'),
      description: t('tours.balmaceda_serrano.desc'),
      duration: '5',
      groupSize: '8-12',
      difficulty: 'Moderate',
      price: '$1,250',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      highlights: [t('tours.torres.highlight1'), t('tours.torres.highlight2'), t('tours.torres.highlight3'), t('tours.torres.highlight4')],
      category: 1
    },
    {
      id: 6,
      title: t('tours.city_tour_punta_arenas.title'),
      description: t('tours.city_tour_punta_arenas.desc'),
      duration: '7',
      groupSize: '6-10',
      difficulty: 'Challenging',
      price: '$2,100',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      highlights: [t('tours.ice.highlight1'), t('tours.ice.highlight2'), t('tours.ice.highlight3'), t('tours.ice.highlight4')],
      category: 2
    },
    {
      id: 7,
      title: t('tours.isla_magdalena.title'),
      description: t('tours.isla_magdalena.desc'),
      duration: '6',
      groupSize: '4-8',
      difficulty: 'Easy-Moderate',
      price: '$1,800',
      rating: 5.0,
      image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      highlights: [t('tours.photo.highlight1'), t('tours.photo.highlight2'), t('tours.photo.highlight3'), t('tours.photo.highlight4')],
      category: 2
    },
    {
      id: 8,
      title: t('tours.fuerte_bulnes.title'),
      description: t('tours.fuerte_bulnes.desc'),
      duration: '4',
      groupSize: '4-6',
      difficulty: 'Easy',
      price: '$1,650',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      highlights: [t('tours.puma.highlight1'), t('tours.puma.highlight2'), t('tours.puma.highlight3'), t('tours.puma.highlight4')],
      category: 2
    },
    {
      id: 9,
      title: t('tours.full_day.title'),
      description: t('tours.full_day.desc'),
      duration: '8',
      groupSize: '6-12',
      difficulty: 'Challenging',
      price: '$1,950',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/2522667/pexels-photo-2522667.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      highlights: [t('tours.fitz.highlight1'), t('tours.fitz.highlight2'), t('tours.fitz.highlight3'), t('tours.fitz.highlight4')],
      category: 3
    },
    {
      id: 10,
      title: t('tours.base_torres.title'),
      description: t('tours.base_torres.desc'),
      duration: '5',
      groupSize: '8-14',
      difficulty: 'Easy',
      price: '$1,350',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      highlights: [t('tours.culture.highlight1'), t('tours.culture.highlight2'), t('tours.culture.highlight3'), t('tours.culture.highlight4')],
      category: 3
    },
    {
      id: 11,
      title: t('tours.glaciar_grey.title'),
      description: t('tours.glaciar_grey.desc'),
      duration: '5',
      groupSize: '8-14',
      difficulty: 'Easy',
      price: '$1,350',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      highlights: [t('tours.culture.highlight1'), t('tours.culture.highlight2'), t('tours.culture.highlight3'), t('tours.culture.highlight4')],
      category: 3
    },
    {
      id: 12,
      title: t('tours.perito_moreno_fd.title'),
      description: t('tours.perito_moreno_fd.desc'),
      duration: '5',
      groupSize: '8-14',
      difficulty: 'Easy',
      price: '$1,350',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      highlights: [t('tours.culture.highlight1'), t('tours.culture.highlight2'), t('tours.culture.highlight3'), t('tours.culture.highlight4')],
      category: 4
    },
    {
      id: 13,
      title: t('tours.perito_moreno_ft.title'),
      description: t('tours.perito_moreno_ft.desc'),
      duration: '5',
      groupSize: '8-14',
      difficulty: 'Easy',
      price: '$1,350',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      highlights: [t('tours.culture.highlight1'), t('tours.culture.highlight2'), t('tours.culture.highlight3'), t('tours.culture.highlight4')],
      category: 4
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
    name: 'Torres del Paine'
  },
  {
    id: 4,
    name: 'Argentina'
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
        {/* Botones visibles solo en pantallas grandes */}
        <div className="filters hidden md:flex gap-2 mb-4">
          {places_filters.map((filter) => (
            <div key={filter.id}>
              <button
                className={`${filter_id === filter.id
                  ? "bg-orange-500 text-white"
                  : "bg-white-500 text-black"
                  } border border-orange-500 hover:bg-orange-600 hover:text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300`}
                onClick={() => setFilter(filter.id)}
              >
                {filter.name}
              </button>
            </div>
          ))}
        </div>

        {/* Select solo visible en pantallas pequeñas */}
        <div className="md:hidden mb-4">
          <select
            value={filter_id}
            onChange={(e) => setFilter(Number(e.target.value))}
            className="w-full border border-orange-500 px-4 py-2 rounded-full text-black font-semibold bg-white-500"
          >
            {places_filters.map((filter) => (
              <option key={filter.id} value={filter.id}>
                {filter.name}
              </option>
            ))}
          </select>
        </div>


        {/* Grid visible solo en pantallas md y mayores */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {tours.filter(tour => tour.category === filter_id).map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
            >
              {/* Imagen */}
              <div className="relative">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col justify-between flex-1 h-full">
                {/* Título y descripción */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tour.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed text-justify">
                    {tour.description}
                  </p>
                </div>

                {/* Duración + precio + botón */}
                <div className="flex flex-col justify-between flex-1">
                  <div className="flex items-center justify-between mt-auto">
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
            </div>
          ))}
        </div>

        {/* Carrusel en pantallas pequeñas */}
        <div className="md:hidden">
          <div ref={sliderRef} className="keen-slider">
            {tours
              .filter((tour) => tour.category === filter_id)
              .map((tour) => (
                <div
                  key={tour.id}
                  className="keen-slider__slide px-4"
                >
                  <TourCard key={tour.id} tour={tour} />
                </div>
              ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default Tours;