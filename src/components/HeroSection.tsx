import { ArrowDown } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <div className="relative min-h-[75vh] flex flex-col items-center justify-center overflow-hidden bg-transparent text-white">

            {/* Dynamic Background - Spatial Dark */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_70%)]"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"></div>

            {/* Hero Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        <img src="/logo.png" alt="LazyBird Logo" className="w-5 h-5 object-contain" />
                        <span className="text-sm font-medium text-gray-200 tracking-wide">LazyBird  <span className="opacity-50 mx-2">|</span>  The Creator Suite</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 font-display">
                        Simply <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-gray-200 to-gray-500 bg-clip-text text-transparent">powerful.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light mb-12">
                        The complete suite to create, distribute, and protect your digital assets.
                    </p>

                    <div className="flex items-center justify-center gap-4">
                        <button
                            onClick={() => document.getElementById('suite-showcase')?.scrollIntoView({ behavior: 'smooth' })}
                            className="group px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                        >
                            Explore the Suite
                            <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>

                {/* Floating Icons Visualization */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10"
                >
                    {/* Abstract Orbits/Icons could go here */}
                </motion.div>

            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#000000] to-transparent"></div>
        </div>
    );
};

export default HeroSection;
