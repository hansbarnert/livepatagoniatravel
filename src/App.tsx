import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Tours from './components/Tours';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Services />
        <Tours />
        <Gallery />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;