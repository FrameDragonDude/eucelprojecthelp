import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CompanyIntro from './components/CompanyIntro';
import VisionMission from './components/VisionMission';
import BusinessAreas from './components/BusinessAreas';
import ProductGallery from './components/ProductGallery';
import ProductPricing from './components/ProductPricing';
import Testimonials from './components/Testimonials';
import ContactInfo from './components/ContactInfo';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navigation />
      <Hero />
      <CompanyIntro />
      <VisionMission />
      <BusinessAreas />
      <ProductGallery />
      <ProductPricing />
      <Testimonials />
      <ContactInfo />
    </div>
  );
}

export default App;
