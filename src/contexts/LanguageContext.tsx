import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'es';
  setLanguage: (lang: 'en' | 'es') => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'nav.tours': 'Tours',
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'company.name': 'Live Patagonia Travel',

    // Hero
    'hero.title.1': 'Live Paine',
    'hero.title.2': 'Explore the Wild',
    'hero.title.3': 'of Patagonia',
    'hero.subtitle': 'Experience breathtaking landscapes, pristine wilderness, and unforgettable adventures in Chile\'s most spectacular region',
    'hero.cta.tours': 'Explore Our Tours',
    'hero.cta.video': 'Watch Video',

    // Services
    'services.title': 'Why Choose Our Adventures?',
    'services.subtitle': 'Herbert and Patricio are the founders of Live Patagonia Travel. They have been offering some of the best tours in the region for over 7 years, guiding travelers throughout the Magallanes Region, the Chilean and Argentine Patagonia, and even to the most remote places such as Ushuaia. We invite you to discover our wonderful Patagonia. If you are looking for reliability, professionalism, and quality service, take the leap and adventure with us.',
    'services.trekking.title': 'Trekking Adventures',
    'services.trekking.desc': 'Expert-guided treks through Torres del Paine and other iconic Patagonian landscapes',
    'services.photography.title': 'Photography Tours',
    'services.photography.desc': 'Capture stunning wildlife and landscapes with professional photography guidance',
    'services.group.title': 'Group Expeditions',
    'services.group.desc': 'Join like-minded adventurers on carefully curated group experiences',
    'services.safety.title': 'Safety First',
    'services.safety.desc': 'All tours include comprehensive safety equipment and emergency protocols',
    'services.custom.title': 'Custom Itineraries',
    'services.custom.desc': 'Personalized adventures tailored to your interests and fitness level',
    'services.flexible.title': 'Flexible Duration',
    'services.flexible.desc': 'From half-day excursions to multi-week expeditions to suit your schedule',

    // Tours
    'tours.title': 'Unforgettable Tours',
    'tours.subtitle': 'Choose from our carefully crafted adventures, each designed to showcase the best of Patagonia\'s natural beauty and cultural heritage.',
    'tours.duration': 'Days',
    'tours.people': 'people',
    'tours.person': '/person',
    'tours.book': 'Book Now',
    "tours.city_tour_natales.title": "City tour Puerto Natales",
    "tours.city_tour_natales.desc": "Explore the most important cultural and natural attractions of the city. You will visit the beautiful Villa Cariño viewpoint, an unparalleled vantage point of the city and its surrounding geography; the Artisanal Fishermen’s Dock, a key area for marine resource work and an important source of employment; and the historic Puerto Bories Refrigeration Plant, a major early 20th-century manufacturing industry now declared a National Historic Monument, among many other highlights.",
    "tours.cabalgata_dorotea.title": "Horseback ride to Dorotea Hill",
    "tours.cabalgata_dorotea.desc": "Ride in Puerto Natales up to the summit of the Dorotea mountain range. This range forms a natural border between Chile and Argentina, offering sweeping views of the area, especially of the city of Natales, the Almirante Montt Gulf, and the Última Esperanza fjord. The adventure is guided by a local baqueano through forests and meadows. It requires minimal physical effort or riding experience. The horses are well-trained Patagonian breeds, ideal for tourism. A must-do half-day activity in Puerto Natales.",
    "tours.cabalgata_sofia.title": "Horseback ride to Sofía Lagoon",
    "tours.cabalgata_sofia.desc": "We will visit one of the most beautiful areas near Puerto Natales, the stunning Sofía Lagoon, located just 25 minutes from the city. We’ll take a 3-hour horseback ride to the Condor Viewpoint in the Señoret Range. Along the way, we’ll cross lenga forests, rivers, and encounter a wide variety of wildlife. At the viewpoint, we may see the majestic Andean condor amid a glacially sculpted landscape.",
    "tours.cueva_milodon.title": "Milodón Cave",
    "tours.cueva_milodon.desc": "Just 30 minutes from Puerto Natales, this important natural monument offers one of the most significant archaeological and paleontological sites in Patagonia. We’ll visit the main cave’s viewpoint for one of the best panoramic views in the province, at over 350 meters above sea level. You’ll observe geological and hydrological features that reflect the region’s icy past, as well as the vast Patagonian landscape.",
    "tours.balmaceda_serrano.title": "Balmaceda and Serrano Glacier Navigation",
    "tours.balmaceda_serrano.desc": "This is a must-do when visiting Puerto Natales. Sail through the southern fjords of the world's edge. During the trip, you’ll see native flora and fauna, visit the Balmaceda and Serrano Glaciers, and enjoy a delicious whisky with ancient glacier ice. On the return to Puerto Natales, you'll stop at Estancia Perales for a classic Magellanic lamb barbecue in an unmatched setting.",
    "tours.city_tour_punta_arenas.title": "City Tour Punta Arenas",
    "tours.city_tour_punta_arenas.desc": "We will pick you up from your hotel to begin the Punta Arenas city tour through the capital of Chile’s Magallanes and Antarctic Region. We’ll visit Muñoz Gamero Square and the Hernando de Magallanes monument, then head to Cerro de la Cruz for a panoramic view of the city and Tierra del Fuego in the distance. We’ll also visit the Municipal Cemetery of Magallanes, the Shepherd Monument, and the Strait of Magellan waterfront to end the tour.",
    "tours.isla_magdalena.title": "Magdalena Island Penguin Colony",
    "tours.isla_magdalena.desc": "Located in the Strait of Magellan, Magdalena Island is home to thousands of Magellanic penguins, cormorants, austral gulls, and other protected species. During the tour, you'll land on the island and closely observe this unique ecosystem. The tour lasts 10 hours from Puerto Natales or 4 hours from Punta Arenas, offering an unforgettable experience with Patagonian wildlife.",
    "tours.fuerte_bulnes.title": "Fuerte Bulnes",
    "tours.fuerte_bulnes.desc": "We begin with hotel pickup en route to the Strait of Magellan Park for the Fuerte Bulnes tour. First, we’ll visit the geographic center of Chile, including the Antarctic territory. Then, we’ll explore the fort—the first Chilean settlement in Patagonia—which faced harsh winter conditions, eventually forcing its settlers to relocate to what is now Punta Arenas. The visitor center tells the story of the Strait’s natural and human history.",
    "tours.full_day.title": "Full Day Tour",
    "tours.full_day.desc": "This tour departs from Puerto Natales toward Torres del Paine National Park, with stops at scenic viewpoints including Lake Sarmiento, Laguna Amarga, Paine Waterfall, Lake Nordenskjöld, Lake Pehoé, and the Weber Bridge. You’ll enjoy short hikes to Salto Grande and Grey Lake Beach, and finish at the Milodón Cave Natural Monument before returning to Puerto Natales.",
    "tours.base_torres.title": "Trekking Base Torres",
    "tours.base_torres.desc": "This tour departs from Puerto Natales to Torres del Paine National Park with a 2.5-hour drive to the welcome center. The 11 km trek follows the Asencio Valley, crossing native forests, rivers, and mountains, leading to the Base Torres viewpoint. From there, you’ll see the iconic granite towers, lagoon, and glacier, along with the area’s biodiversity. A must for nature and trekking lovers.",
    "tours.glaciar_grey.title": "Grey Glacier Navigation",
    "tours.glaciar_grey.desc": "Located on the western side of Torres del Paine National Park, this 3-hour boat tour on Lake Grey passes giant icebergs with views of the Paine range. At the glacier front, you may witness ice calving and see the magnificent Southern Ice Field, the world’s third-largest freshwater reserve. The trip includes whisky with millenary ice and ends with a return along Lake Toro's shore to Puerto Natales.",
    "tours.perito_moreno_fd.title": "Perito Moreno Glacier Full Day",
    "tours.perito_moreno_fd.desc": "Located in the Strait of Magellan, Magdalena Island is home to thousands of Magellanic penguins, cormorants, austral gulls, and other protected species. During the tour, you'll land on the island and closely observe this unique ecosystem. The tour lasts 10 hours from Puerto Natales or 4 hours from Punta Arenas, offering an unforgettable experience with Patagonian wildlife.",
    "tours.perito_moreno_ft.title": "Perito Moreno Glacier Full Tour",
    "tours.perito_moreno_ft.desc": "On this tour, you’ll visit El Calafate in the afternoon and depart early the next day for the Perito Moreno Glacier, with the option to take a boat ride to get closer to the glacier. This format allows you to spend more time inside the park (until 4:00 PM), fully enjoying this marvel of the Southern Ice Field and its wonders.",

    // Gallery
    'gallery.title': 'Gallery',
    'gallery.subtitle': 'Immerse yourself in the breathtaking beauty of Patagonia through our curated collection of stunning landscapes and unforgettable moments.',
    'gallery.torres.title': 'Salto Grande Waterfall',
    'gallery.torres.desc': 'The iconic granite towers illuminated by the first light of day',
    'gallery.lake.title': 'Paine Massif',
    'gallery.lake.desc': 'Perfect mirror reflections in the pristine glacial waters',
    'gallery.glacier.title': 'Sheep Herd',
    'gallery.glacier.desc': 'Witnessing the power of nature as ice calves into the lake',
    'gallery.wildlife.title': ' Base Torres lookout',
    'gallery.wildlife.desc': 'Guanacos grazing in the vast Patagonian steppe',
    'gallery.wilderness.title': 'Milodón Cave',
    'gallery.wilderness.desc': 'Untouched wilderness stretching to the horizon',
    'gallery.fitz.title': 'Balmaceda and Serrano Glaciers',
    'gallery.fitz.desc': 'The dramatic spires of Fitz Roy piercing the Patagonian sky',

    // Testimonials
    'testimonials.title': 'What Our Travelers Say',
    'testimonials.subtitle': 'Don\'t just take our word for it. Here\'s what our adventurers have to say about their Patagonian experiences with us.',
    'testimonials.sarah.text': 'An absolutely life-changing experience! The Torres del Paine trek exceeded all expectations. Our guide Carlos was incredibly knowledgeable and passionate about the region.',
    'testimonials.michael.text': 'The photography tour was exceptional. We captured incredible shots of wildlife and landscapes that I\'ll treasure forever. The small group size made it very personal.',
    'testimonials.emma.text': 'Seeing the Perito Moreno glacier up close was breathtaking. The ice trekking experience was challenging but so rewarding. Highly recommend this company!',
    'testimonials.james.text': 'The puma tracking safari was incredible! We were lucky to spot three pumas during our stay. The guides\' expertise made all the difference.',
    'testimonials.tour': 'Tour',
    'testimonials.stats.travelers': 'Happy Travelers',
    'testimonials.stats.rating': 'Average Rating',
    'testimonials.stats.experience': 'Years Experience',

    // Contact
    'contact.title': 'Start Your Adventure',
    'contact.subtitle': 'Ready to explore Patagonia? Get in touch with us to plan your perfect adventure. Our team is here to help you create memories that will last a lifetime.',
    'contact.info.title': 'Get in Touch',
    'contact.whatsapp': 'Whatsapp',
    'contact.whatsapp.available': 'Ask about your personalized tour',
    'contact.email': 'Email',
    'contact.email.response': 'We respond within 24 hours',
    'contact.location': 'Location',
    'contact.location.desc': 'Gateway to Torres del Paine',
    'contact.hours': 'Office Hours',
    'contact.hours.weekday': 'Mon - Sun: 10:00 AM - 9:00 PM',
    'contact.hours.weekend': 'Sat - Sun: 10:00 AM - 4:00 PM',
    'contact.offer.title': 'Special Offer!',
    'contact.offer.desc': 'Book your tour in the next 30 days and get 10% off your first adventure with us. Use code PATAGONIA10 when you contact us.',
    'contact.form.title': 'Send us a Message',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.tour': 'Interested Tour',
    'contact.form.tour.select': 'Select a tour',
    'contact.form.tour.custom': 'Custom Tour',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Tell us about your travel dates, group size, interests, and any special requirements...',
    'contact.form.send': 'Send Message',
    'contact.form.success': 'Thank you for your inquiry! We\'ll get back to you within 24 hours.',

    // Footer
    'footer.company.desc': 'Leading provider of authentic Patagonian adventures for over 7 years. Discover the wild beauty of Chile\'s most spectacular region.',
    'footer.links': 'Quick Links',
    'footer.tours.popular': 'Popular Tours',
    'footer.contact.info': 'Contact Info',
    'footer.copyright': 'Cloud and Digital. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy',
    'footer.about': 'About Us'
  },
  es: {
    // Header
    'nav.tours': 'Tours',
    'nav.services': 'Servicios',
    'nav.gallery': 'Galería',
    'nav.contact': 'Contacto',
    'company.name': 'Live Patagonia Travel',

    // Hero
    'hero.title.1': 'Vive Paine',
    'hero.title.2': 'Explora lo Salvaje',
    'hero.title.3': 'de la Patagonia',
    'hero.subtitle': 'Experimenta paisajes impresionantes, naturaleza prístina y aventuras inolvidables en la región más espectacular de Chile',
    'hero.cta.tours': 'Explora Nuestros Tours',
    'hero.cta.video': 'Ver Video',

    // Services
    'services.title': '¿Por Qué Elegir Nuestras Aventuras?',
    'services.subtitle': 'Herbert y Patricio son los fundadores de Live Patagonia Travel. Se dedican a entregar de los mejores tours en la zona desde hace más de 7 años, llevando viajeros a lo largo de la región de Magallanes, Patagonia Chilena y Argentina e incluso los lugares más remotos como lo es Ushuaia. Con la basta y exitosa experiencia a la espalda de Live Patagonia Travel queremos dejar a vuestra disposición, viajero amante de la naturaleza nuestra hospitalidad y conocimiento adquiridos en estos años de servicio, con ello, te invitamos a conocer nuestra maravillosa patagonia. Si lo que buscas es confiabilidad, seriedad y calidad de servicio, atrévete y aventura con nosotros.',
    'services.trekking.title': 'Aventuras de Trekking',
    'services.trekking.desc': 'Caminatas guiadas por expertos a través de Torres del Paine y otros paisajes icónicos de la Patagonia',
    'services.photography.title': 'Tours de Fotografía',
    'services.photography.desc': 'Captura fauna y paisajes impresionantes con guía profesional de fotografía',
    'services.group.title': 'Expediciones Grupales',
    'services.group.desc': 'Únete a aventureros afines en experiencias grupales cuidadosamente seleccionadas',
    'services.safety.title': 'Seguridad Primero',
    'services.safety.desc': 'Todos los tours incluyen equipo de seguridad integral y protocolos de emergencia',
    'services.custom.title': 'Itinerarios Personalizados',
    'services.custom.desc': 'Aventuras personalizadas adaptadas a tus intereses y nivel de condición física',
    'services.flexible.title': 'Duración Flexible',
    'services.flexible.desc': 'Desde excursiones de medio día hasta expediciones de varias semanas para adaptarse a tu horario',

    // Tours
    'tours.title': 'Tours Inolvidables',
    'tours.subtitle': 'Elige entre nuestras aventuras cuidadosamente diseñadas, cada una creada para mostrar lo mejor de la belleza natural y el patrimonio cultural de la Patagonia.',
    'tours.duration': 'Días',
    'tours.people': 'personas',
    'tours.person': '/persona',
    'tours.book': 'Reservar',
    'tours.city_tour_natales.title': 'City tour Puerto Natales',
    'tours.city_tour_natales.desc': 'Recorre los atractivos culturales y naturales más relevantes de la ciudad. Se visitará el bello mirador Villa Cariño, inigualable punto de vista de la ciudad y su geografía circundante, el muelle de Pescadores Artesanales, lugar de faenas de recursos marinos e importante fuente de trabajo para gran parte de la población, el antiguo Frigorífico Puerto Bories, importante industria manufacturera que significó el surgimiento de la ciudad a comienzos de siglo XX, hoy en día, Monumento Histórico Nacional, entre muchos otros puntos atractivos.',
    'tours.cabalgata_dorotea.title': 'Cabalgata cerro Dorotea',
    'tours.cabalgata_dorotea.desc': 'Cabalga en Puerto Natales hasta la cumbre de la sierra Dorotea. Esta sierra sirve de frontera natural entre Chile y Argentina y desde lo alto es posible observar todo el entorno de la zona, en especial la ciudad de Natales con el golfo Almirante Montt y fiordo de Última Esperanza. La aventura hasta el mirador es guiada por un baqueano local entre bosques y praderas. El nivel físico que se requiere así como la experiencia del jinete es bajo. Los caballos son ejemplares patagónicos acostumbrados en estos paseos de turismo. Un gran imperdible de medio día en Puerto Natales.',
    'tours.cabalgata_sofia.title': 'Cabalgata laguna Sofía',
    'tours.cabalgata_sofia.desc': 'Visitaremos uno de los sectores más bellos en las cercanías de Puerto Natales, la hermosa laguna Sofía, ubicada a escasos 25 minutos de la ciudad. Realizaremos una cabalgata de 3 horas en donde llegaremos al Mirador Cóndor, ubicado en la Sierra Señoret. Durante la excursión recorreremos bosques de Lenga cruzando ríos y gran diversidad de fauna. Al llegar al mirador podremos avistar al majestuoso Cóndor Andino junto a la espectacular geografía esculpida por la era glaciar.',
    'tours.cueva_milodon.title': 'Cueva del Milodón',
    'tours.cueva_milodon.desc': 'A solo 30 minutos de Puerto Natales se ubica este importante monumento natural, donde podrá conocer uno de los sitios arqueológicos y paleontológicos más importantes de Patagonia. Visitaremos el bello mirador de la cueva principal, desde donde obtendrá una de las mejores vistas de la provincia, por sobre los 350 metros sobre el nivel del mar. Se observarán los rasgos geológicos e hidrográficos que hablan del gélido pasado regional, además de observar el paisaje patagónico en gran plenitud.',
    'tours.balmaceda_serrano.title': 'Navegación glaciar Balmaceda y Serrano',
    'tours.balmaceda_serrano.desc': 'Este es un imperdible si visitas Puerto Natales. Te invitamos a navegar por los fiordos australes del confín del mundo. Durante el día podrás apreciar la flora y fauna nativa, visitar los Glaciares Balmaceda & Serrano, y disfrutar de un rico Whisky con hielo milenario. Por último en el retorno hacia puerto natales se detendrán en estancia perales para disfrutar de un rico asado de cordero Magallánico en un ambiente incomparable.',
    'tours.city_tour_punta_arenas.title': 'City Tour Punta Arenas',
    'tours.city_tour_punta_arenas.desc': 'Te pasaremos a buscar a tu hotel para comenzar este city tour Punta Arenas, un recorrido por la capital de la región de Magallanes y la Antártica chilena. Comenzaremos por la plaza Muñoz Gamero, donde está el monumento a Hernando de Magallanes y luego iremos al cerro de la Cruz, desde donde tendremos una vista panorámica de la ciudad y veremos a lo lejos Tierra del Fuego. Luego, visitaremos el Cementerio Municipal de Magallanes y el monumento al Ovejero, antes de trasladarnos hasta la costanera estrecho de Magallanes, donde termina el tour.',
    'tours.isla_magdalena.title': 'Pingüinera isla Magdalena',
    'tours.isla_magdalena.desc': ' Ubicada en el Estrecho de Magallanes, Isla Magdalena es hogar de miles de pingüinos de Magallanes, cormoranes, gaviotas australes y otras especies protegidas. Durante el tour, podrás desembarcar en la isla y observar de cerca este ecosistema único. La duración es de 10 horas desde Puerto Natales o 4 horas desde Punta Arenas, ofreciendo una experiencia inolvidable entre fauna patagónica.',
    'tours.fuerte_bulnes.title': 'Fuerte Bulnes',
    'tours.fuerte_bulnes.desc': 'Comenzaremos esta actividad con la recogida en el hotel para dirigirnos hacia el Parque del Estrecho de Magallanes y comenzar este tour Fuerte Bulnes. Primero, visitaremos el centro geográfico de Chile, hito que marca el centro del país, considerando el territorio antártico. Luego, visitaremos el fuerte, que fue el primer asentamiento chileno en la Patagonia, que sufrió las inclemencias climáticas del duro invierno, lo que obligó a sus habitantes a trasladarse a lo que hoy es Punta Arenas. En el fuerte, pasaremos por el centro de visitantes para conocer más sobre la historia natural y humana del estrecho de Magallanes.',
    'tours.full_day.title': 'Full Day',
    'tours.full_day.desc': 'Este tour inicia desde Puerto Natales en direccion al Parque Nacional Torres del Paine. En el recorrido se realizaran paradas en bellos miradores tales como Lago Sarmiento, Laguna Amarga, Cascada Paine,Lago Nordenskjold, Lago Pehoe, Puente weber,realizando pequeñas caminatas a los miradores Salto Grande y Playa Lago Grey, para finalizar en el Monumento Natural Cueva del Milodón. Aquí vistaremos la gran caverna que da nombre a la reserva para finalmente regresar a Puerto Natales.',
    'tours.base_torres.title': 'Trekking base torres',
    'tours.base_torres.desc': ' Este tour parte desde Puerto Natales hacia el Parque Nacional Torres del Paine, con un viaje de 2:30 horas hasta el centro de bienvenida. El trekking de 11 km recorre el valle Asencio, cruzando bosques nativos, ríos y montañas, hasta llegar al mirador Base de las Torres. Desde allí, se aprecia una vista única de los tres macizos de granito, la laguna y el glaciar Torres, el Monte Almirante Nieto y la biodiversidad del parque. Una experiencia imperdible para amantes de la naturaleza y el trekking.',
    'tours.glaciar_grey.title': 'Navegación glaciar Grey',
    'tours.glaciar_grey.desc': ' Ubicado en el lado oeste del Parque Torres del Paine, este tour permite navegar durante tres horas por el lago Grey, entre enormes témpanos de hielo, con vista a la cordillera Paine. Frente al glaciar, podrás ver desprendimientos de hielo y el majestuoso Campo de Hielo Sur, la tercera reserva de agua dulce más grande del mundo. La experiencia incluye whisky con hielo milenario y finaliza con el regreso por la costa del Lago Toro hacia Puerto Natales.',
    'tours.perito_moreno_fd.title': 'Glaciar Perito Moreno full day',
    'tours.perito_moreno_fd.desc': ' Ubicada en el Estrecho de Magallanes, Isla Magdalena es hogar de miles de pingüinos de Magallanes, cormoranes, gaviotas australes y otras especies protegidas. Durante el tour, podrás desembarcar en la isla y observar de cerca este ecosistema único. La duración es de 10 horas desde Puerto Natales o 4 horas desde Punta Arenas, ofreciendo una experiencia inolvidable entre fauna patagónica.',
    'tours.perito_moreno_ft.title': 'Glaciar Perito Moreno full tour',
    'tours.perito_moreno_ft.desc': 'En este tour es posible visitar durante la tarde la ciudad de El Calafate para el día siguiente salir temprano hacia el glaciar Perito Moreno, pudiendo así incorporar la navegación en el lago para acercarse al Glaciar Perito Moreno. Esta modalidad, permite estar en el parque desde temprano hasta las 16:00 horas pudiendo tener mucho más tiempo para disfrutar esta maravilla perteneciente a campos de hielo sur y todos sus encantos.',

    // Gallery
    'gallery.title': 'Galería',
    'gallery.subtitle': 'Sumérgete en la belleza impresionante de la Patagonia a través de nuestra colección curada de paisajes deslumbrantes y momentos inolvidables.',
    'gallery.torres.title': 'Salto Grande',
    'gallery.torres.desc': 'Las icónicas torres de granito iluminadas por la primera luz del día',
    'gallery.lake.title': 'Macizo Paine',
    'gallery.lake.desc': 'Reflejos perfectos como espejos en las aguas glaciares prístinas',
    'gallery.glacier.title': 'Rebaño Ovejero',
    'gallery.glacier.desc': 'Presenciando el poder de la naturaleza mientras el hielo se desprende al lago',
    'gallery.wildlife.title': 'Mirador Base Torres',
    'gallery.wildlife.desc': 'Guanacos pastando en la vasta estepa patagónica',
    'gallery.wilderness.title': 'Cueva del Milodón',
    'gallery.wilderness.desc': 'Naturaleza virgen extendiéndose hasta el horizonte',
    'gallery.fitz.title': 'Glaciar Balmaceda y Serrano',
    'gallery.fitz.desc': 'Las dramáticas agujas del Fitz Roy perforando el cielo patagónico',

    // Testimonials
    'testimonials.title': 'Lo Que Dicen Nuestros Viajeros',
    'testimonials.subtitle': 'No solo confíes en nuestra palabra. Esto es lo que nuestros aventureros tienen que decir sobre sus experiencias patagónicas con nosotros.',
    'testimonials.sarah.text': '¡Una experiencia absolutamente transformadora! El trek de Torres del Paine superó todas las expectativas. Nuestro guía Carlos era increíblemente conocedor y apasionado sobre la región.',
    'testimonials.michael.text': 'El tour de fotografía fue excepcional. Capturamos tomas increíbles de fauna y paisajes que atesoraré para siempre. El tamaño pequeño del grupo lo hizo muy personal.',
    'testimonials.emma.text': 'Ver el glaciar Perito Moreno de cerca fue impresionante. La experiencia de trekking en hielo fue desafiante pero muy gratificante. ¡Recomiendo mucho esta empresa!',
    'testimonials.james.text': '¡El safari de rastreo de pumas fue increíble! Tuvimos la suerte de avistar tres pumas durante nuestra estadía. La experiencia de los guías marcó toda la diferencia.',
    'testimonials.tour': 'Tour',
    'testimonials.stats.travelers': 'Viajeros Felices',
    'testimonials.stats.rating': 'Calificación Promedio',
    'testimonials.stats.experience': 'Años de Experiencia',

    // Contact
    'contact.title': 'Comienza Tu Aventura',
    'contact.subtitle': '¿Listo para explorar la Patagonia? Ponte en contacto con nosotros para planificar tu aventura perfecta. Nuestro equipo está aquí para ayudarte a crear recuerdos que durarán toda la vida.',
    'contact.info.title': 'Ponte en Contacto',
    'contact.whatsapp': 'Whatsapp',
    'contact.whatsapp.available': 'Consulta por  tu tour personalizdo',
    'contact.email': 'Email',
    'contact.email.response': 'Respondemos en 24 horas',
    'contact.location': 'Ubicación',
    'contact.location.desc': 'Puerta de entrada a Torres del Paine',
    'contact.hours': 'Horarios de Oficina',
    'contact.hours.weekday': 'Lun - Dom: 10:00 AM - 9:00 PM',
    'contact.hours.weekend': 'Sáb - Dom: 10:00 AM - 4:00 PM',
    'contact.offer.title': '¡Oferta Especial!',
    'contact.offer.desc': 'Reserva tu tour en los próximos 30 días y obtén 10% de descuento en tu primera aventura con nosotros. Usa el código PATAGONIA10 cuando nos contactes.',
    'contact.form.title': 'Envíanos un Mensaje',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Email',
    'contact.form.whatsapp': 'Whatsapp',
    'contact.form.phone': 'Teléfono',
    'contact.form.tour': 'Tour de Interés',
    'contact.form.tour.select': 'Selecciona un tour',
    'contact.form.tour.custom': 'Tour Personalizado',
    'contact.form.message': 'Mensaje',
    'contact.form.message.placeholder': 'Cuéntanos sobre tus fechas de viaje, tamaño del grupo, intereses y cualquier requerimiento especial...',
    'contact.form.send': 'Enviar Mensaje',
    'contact.form.success': '¡Gracias por tu consulta! Te responderemos en 24 horas.',

    // Footer
    'footer.company.desc': 'Proveedor líder de aventuras patagónicas auténticas por más de 7 años. Descubre la belleza salvaje de la región más espectacular de Chile.',
    'footer.links': 'Enlaces Rápidos',
    'footer.tours.popular': 'Tours Populares',
    'footer.contact.info': 'Información de Contacto',
    'footer.copyright': 'Cloud and Digital. Todos los derechos reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'footer.cookies': 'Política de Cookies',
    'footer.about': 'Acerca de Nosotros'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};