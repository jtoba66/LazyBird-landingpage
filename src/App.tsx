import HeroSection from './components/HeroSection';
import ProductShowcase from './components/ProductShowcase';
import StudioDetailedSection from './components/StudioDetailedSection';
import Crossroads from './components/Crossroads';
import PageFooter from './components/PageFooter';

import FluidBackground from './components/FluidBackground';

function App() {
  return (
    <div className="antialiased bg-[#050505] min-h-screen text-white selection:bg-blue-500/30 relative overflow-hidden">
      <FluidBackground />
      <div className="relative z-10">
        {/* Fixed Logo Top Left */}
        {/* Fixed Logo Top Left */}
        {/* Fixed Logo Top Left */}
        <div className="fixed top-4 left-4 md:top-8 md:left-8 z-50 mix-blend-difference pointer-events-none flex items-center gap-3">
          <img src="/logo.png" alt="LazyBird" className="w-8 h-8 md:w-10 md:h-10 object-contain hover:opacity-80 transition-opacity" />
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
