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
    'nav.testimonials': 'Reviews',
    'nav.contact': 'Contact',
    'company.name': 'Patagonia Expeditions',

    // Hero
    'hero.title.1': 'Discover the',
    'hero.title.2': 'Wild Beauty',
    'hero.title.3': 'of Patagonia',
    'hero.subtitle': 'Experience breathtaking landscapes, pristine wilderness, and unforgettable adventures in Chile\'s most spectacular region',
    'hero.cta.tours': 'Explore Our Tours',
    'hero.cta.video': 'Watch Video',

    // Services
    'services.title': 'Why Choose Our Adventures?',
    'services.subtitle': 'With over 15 years of experience in Patagonian tourism, we offer unmatched expertise and unforgettable experiences in one of the world\'s last great wilderness areas.',
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
    'tours.torres.title': 'Torres del Paine Classic',
    'tours.torres.desc': 'Experience the iconic granite towers and pristine lakes in this UNESCO Biosphere Reserve',
    'tours.torres.highlight1': 'Base Las Torres hike',
    'tours.torres.highlight2': 'Grey Glacier viewpoint',
    'tours.torres.highlight3': 'Cuernos del Paine',
    'tours.torres.highlight4': 'Wildlife spotting',
    'tours.ice.title': 'Patagonian Ice Fields',
    'tours.ice.desc': 'Journey to the Southern Patagonian Ice Field, the world\'s third-largest ice field',
    'tours.ice.highlight1': 'Perito Moreno Glacier',
    'tours.ice.highlight2': 'Ice trekking',
    'tours.ice.highlight3': 'Boat excursions',
    'tours.ice.highlight4': 'Glacier calving',
    'tours.photo.title': 'Wilderness Photography',
    'tours.photo.desc': 'Perfect for photographers seeking to capture Patagonia\'s dramatic landscapes',
    'tours.photo.highlight1': 'Golden hour shoots',
    'tours.photo.highlight2': 'Wildlife photography',
    'tours.photo.highlight3': 'Professional guidance',
    'tours.photo.highlight4': 'Small groups',
    'tours.puma.title': 'Puma Tracking Safari',
    'tours.puma.desc': 'Track the elusive Patagonian puma in their natural habitat with expert guides',
    'tours.puma.highlight1': 'Puma sightings',
    'tours.puma.highlight2': 'Wildlife tracking',
    'tours.puma.highlight3': 'Expert naturalist',
    'tours.puma.highlight4': 'Photography opportunities',
    'tours.fitz.title': 'Fitz Roy Circuit',
    'tours.fitz.desc': 'Circumnavigate the legendary Fitz Roy massif in Argentina\'s Los Glaciares National Park',
    'tours.fitz.highlight1': 'Laguna de los Tres',
    'tours.fitz.highlight2': 'Cerro Torre views',
    'tours.fitz.highlight3': 'Camping experience',
    'tours.fitz.highlight4': 'Mountain refuges',
    'tours.culture.title': 'Patagonian Culture & Nature',
    'tours.culture.desc': 'Discover local gaucho culture while exploring the region\'s natural wonders',
    'tours.culture.highlight1': 'Estancia visits',
    'tours.culture.highlight2': 'Traditional asado',
    'tours.culture.highlight3': 'Horseback riding',
    'tours.culture.highlight4': 'Local crafts',

    // Gallery
    'gallery.title': 'Gallery',
    'gallery.subtitle': 'Immerse yourself in the breathtaking beauty of Patagonia through our curated collection of stunning landscapes and unforgettable moments.',
    'gallery.torres.title': 'Torres del Paine at Sunrise',
    'gallery.torres.desc': 'The iconic granite towers illuminated by the first light of day',
    'gallery.lake.title': 'Glacial Lake Reflection',
    'gallery.lake.desc': 'Perfect mirror reflections in the pristine glacial waters',
    'gallery.glacier.title': 'Perito Moreno Glacier',
    'gallery.glacier.desc': 'Witnessing the power of nature as ice calves into the lake',
    'gallery.wildlife.title': 'Patagonian Wildlife',
    'gallery.wildlife.desc': 'Guanacos grazing in the vast Patagonian steppe',
    'gallery.wilderness.title': 'Mountain Wilderness',
    'gallery.wilderness.desc': 'Untouched wilderness stretching to the horizon',
    'gallery.fitz.title': 'Fitz Roy Massif',
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
    'contact.phone': 'Phone',
    'contact.phone.available': 'Available 24/7 for emergencies',
    'contact.email': 'Email',
    'contact.email.response': 'We respond within 24 hours',
    'contact.location': 'Location',
    'contact.location.desc': 'Gateway to Torres del Paine',
    'contact.hours': 'Office Hours',
    'contact.hours.weekday': 'Mon - Fri: 9:00 AM - 6:00 PM',
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
    'footer.company.desc': 'Leading provider of authentic Patagonian adventures for over 15 years. Discover the wild beauty of Chile\'s most spectacular region.',
    'footer.links': 'Quick Links',
    'footer.tours.popular': 'Popular Tours',
    'footer.contact.info': 'Contact Info',
    'footer.copyright': '© 2024 Patagonia Expeditions. All rights reserved.',
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
    'nav.testimonials': 'Reseñas',
    'nav.contact': 'Contacto',
    'company.name': 'Expediciones Patagonia',

    // Hero
    'hero.title.1': 'Vive Paine',
    'hero.title.2': 'Explora lo Salvaje',
    'hero.title.3': 'de la Patagonia',
    'hero.subtitle': 'Experimenta paisajes impresionantes, naturaleza prístina y aventuras inolvidables en la región más espectacular de Chile',
    'hero.cta.tours': 'Explora Nuestros Tours',
    'hero.cta.video': 'Ver Video',

    // Services
    'services.title': '¿Por Qué Elegir Nuestras Aventuras?',
    'services.subtitle': 'Herbert y Patricio son los fundadores de Live Patagonian Travel. Se dedican a entregar de los mejores tours en la zona desde hace más de 7 años, llevando viajeros a lo largo de la región de Magallanes, Patagonia Chilena y Argentina e incluso los lugares más remotos como lo es Ushuaia. Con la vasta y exitosa experiencia a la espalda de Live Patagonia Travel queremos dejar a vuestra disposición, viajero amante de la naturaleza nuestra hospitalidad y conocimiento adquiridos en estos años de servicio, con ello, te invitamos a conocer nuestra maravillosa patagonia. Si lo que buscas es confiabilidad, seriedad y calidad de servicio, atrévete y aventura con nosotros.',
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
    'tours.torres.title': 'Torres del Paine Clásico',
    'tours.torres.desc': 'Te pasaremos a buscar a tu hotel para comenzar este city tour Punta Arenas, un recorrido por la capital de la región de Magallanes y la Antártica chilena. Comenzaremos por la plaza Muñoz Gamero, donde está el monumento a Hernando de Magallanes y luego iremos al cerro de la Cruz, desde donde tendremos una vista panorámica de la ciudad y veremos a lo lejos Tierra del Fuego. Luego, visitaremos el Cementerio Municipal de Magallanes y el monumento al Ovejero, antes de trasladarnos hasta la costanera estrecho de Magallanes, donde termina el tour.',
    'tours.torres.highlight1': 'Caminata Base Las Torres',
    'tours.torres.highlight2': 'Mirador Glaciar Grey',
    'tours.torres.highlight3': 'Cuernos del Paine',
    'tours.torres.highlight4': 'Avistamiento de fauna',
    'tours.ice.title': 'Campos de Hielo Patagónicos',
    'tours.ice.desc': 'Viaja al Campo de Hielo Patagónico Sur, el tercer campo de hielo más grande del mundo',
    'tours.ice.highlight1': 'Glaciar Perito Moreno',
    'tours.ice.highlight2': 'Trekking en hielo',
    'tours.ice.highlight3': 'Excursiones en bote',
    'tours.ice.highlight4': 'Desprendimiento glaciar',
    'tours.photo.title': 'Fotografía de Naturaleza',
    'tours.photo.desc': 'Perfecto para fotógrafos que buscan capturar los paisajes dramáticos de la Patagonia',
    'tours.photo.highlight1': 'Sesiones hora dorada',
    'tours.photo.highlight2': 'Fotografía de fauna',
    'tours.photo.highlight3': 'Guía profesional',
    'tours.photo.highlight4': 'Grupos pequeños',
    'tours.puma.title': 'Safari Rastreo de Pumas',
    'tours.puma.desc': 'El Tour Isla Magdalena comprende la visita a un ecosistema único. Isla Magdalena es una isla chilena ubicada en el Estrecho de Magallanes, conocida por ser Monumento Natural de los Pingüinos, podrás interactuar con Pingüinos de Magallanes o también conocidos como Pingüino Patagónico. Podrás admirar y fotografiar especies maravillosas como Cormoranes, Gaviotas Australes y Palomas Antárticas, elefantes marinos y lobos de mar, especies bajo protección a la vida silvestre por lo que la interacción no es permitida, pero el desembarco en Isla Magdalena nos permitirá brindar una experiencia inolvidable con otras especies y los inigualables pingüinos. La duración del tour es de 10 horas si el inicio es en Puerto Natales y 4 horas desde Punta Arenas.',
    'tours.puma.highlight1': 'Avistamientos de pumas',
    'tours.puma.highlight2': 'Rastreo de fauna',
    'tours.puma.highlight3': 'Naturalista experto',
    'tours.puma.highlight4': 'Oportunidades fotográficas',
    'tours.fitz.title': 'Circuito Fitz Roy',
    'tours.fitz.desc': 'Circunnavega el legendario macizo Fitz Roy en el Parque Nacional Los Glaciares de Argentina',
    'tours.fitz.highlight1': 'Laguna de los Tres',
    'tours.fitz.highlight2': 'Vistas del Cerro Torre',
    'tours.fitz.highlight3': 'Experiencia de camping',
    'tours.fitz.highlight4': 'Refugios de montaña',
    'tours.culture.title': 'Cultura y Naturaleza Patagónica',
    'tours.culture.desc': 'Descubre la cultura gaucha local mientras exploras las maravillas naturales de la región',
    'tours.culture.highlight1': 'Visitas a estancias',
    'tours.culture.highlight2': 'Asado tradicional',
    'tours.culture.highlight3': 'Cabalgatas',
    'tours.culture.highlight4': 'Artesanías locales',

    // Gallery
    'gallery.title': 'Galería',
    'gallery.subtitle': 'Sumérgete en la belleza impresionante de la Patagonia a través de nuestra colección curada de paisajes deslumbrantes y momentos inolvidables.',
    'gallery.torres.title': 'Torres del Paine al Amanecer',
    'gallery.torres.desc': 'Las icónicas torres de granito iluminadas por la primera luz del día',
    'gallery.lake.title': 'Reflejo en Lago Glaciar',
    'gallery.lake.desc': 'Reflejos perfectos como espejos en las aguas glaciares prístinas',
    'gallery.glacier.title': 'Glaciar Perito Moreno',
    'gallery.glacier.desc': 'Presenciando el poder de la naturaleza mientras el hielo se desprende al lago',
    'gallery.wildlife.title': 'Fauna Patagónica',
    'gallery.wildlife.desc': 'Guanacos pastando en la vasta estepa patagónica',
    'gallery.wilderness.title': 'Naturaleza Montañosa',
    'gallery.wilderness.desc': 'Naturaleza virgen extendiéndose hasta el horizonte',
    'gallery.fitz.title': 'Macizo Fitz Roy',
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
    'contact.phone': 'Teléfono',
    'contact.phone.available': 'Disponible 24/7 para emergencias',
    'contact.email': 'Email',
    'contact.email.response': 'Respondemos en 24 horas',
    'contact.location': 'Ubicación',
    'contact.location.desc': 'Puerta de entrada a Torres del Paine',
    'contact.hours': 'Horarios de Oficina',
    'contact.hours.weekday': 'Lun - Vie: 9:00 AM - 6:00 PM',
    'contact.hours.weekend': 'Sáb - Dom: 10:00 AM - 4:00 PM',
    'contact.offer.title': '¡Oferta Especial!',
    'contact.offer.desc': 'Reserva tu tour en los próximos 30 días y obtén 10% de descuento en tu primera aventura con nosotros. Usa el código PATAGONIA10 cuando nos contactes.',
    'contact.form.title': 'Envíanos un Mensaje',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Teléfono',
    'contact.form.tour': 'Tour de Interés',
    'contact.form.tour.select': 'Selecciona un tour',
    'contact.form.tour.custom': 'Tour Personalizado',
    'contact.form.message': 'Mensaje',
    'contact.form.message.placeholder': 'Cuéntanos sobre tus fechas de viaje, tamaño del grupo, intereses y cualquier requerimiento especial...',
    'contact.form.send': 'Enviar Mensaje',
    'contact.form.success': '¡Gracias por tu consulta! Te responderemos en 24 horas.',

    // Footer
    'footer.company.desc': 'Proveedor líder de aventuras patagónicas auténticas por más de 15 años. Descubre la belleza salvaje de la región más espectacular de Chile.',
    'footer.links': 'Enlaces Rápidos',
    'footer.tours.popular': 'Tours Populares',
    'footer.contact.info': 'Información de Contacto',
    'footer.copyright': '© 2024 Expediciones Patagonia. Todos los derechos reservados.',
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