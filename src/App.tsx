import HeroSection from './components/HeroSection';
import ProductShowcase from './components/ProductShowcase';
import StudioDetailedSection from './components/StudioDetailedSection';
import Crossroads from './components/Crossroads';
import PageFooter from './components/PageFooter';

import FluidBackground from './components/FluidBackground';

function App() {
  return (
    <div className="antialiased bg-[#050505] min-h-screen text-white selection:bg-blue-500/30 relative">
      <FluidBackground />
      <div className="relative z-10">
        {/* Top Left Logo */}
        <div className="absolute top-6 left-6 z-50 flex items-center gap-3">
          <img src="/src/assets/logo.png" alt="LazyBird Logo" className="w-10 h-10 object-contain" />
          <span className="font-bold text-xl tracking-tight hidden md:block">LazyBird</span>
        </div>
        <HeroSection />
        <ProductShowcase />
        <StudioDetailedSection />
        <Crossroads />
        <PageFooter />
      </div>
    </div>
  );
}

export default App;
