import { useState } from 'react';
import { motion } from 'framer-motion';

const Crossroads = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="py-24 px-4 relative overflow-hidden flex justify-center items-center bg-transparent">

            {/* Main Holographic Container - Glass Slab */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative w-full max-w-5xl bg-[#0A0A0A]/40 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-1 overflow-hidden group shadow-[0_0_60px_-10px_rgba(255,255,255,0.05)]"
            >
                {/* Animated Background Grid - Platinum */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 mask-linear-fade" />

                {/* Running Data Streams - White */}
                <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute h-[1px] bg-gradient-to-r from-transparent via-white to-transparent w-full"
                            style={{ top: `${20 + i * 30}%` }}
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 4 + i, repeat: Infinity, ease: "linear", delay: i }}
                        />
                    ))}
                </div>

                {/* Inner Content Wrapper */}
                <div className="relative z-10 bg-[#050505]/20 rounded-[1.8rem] px-8 py-12 md:px-16 md:py-16 flex flex-col md:flex-row items-center justify-between gap-10">

                    {/* Left: Text Content */}
                    <div className="text-left md:flex-1 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-gray-200 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            LazyBird Studio v1.0
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 animate-gradient-x">Optimize?</span>
                        </h2>

                        <p className="text-gray-400 text-lg max-w-md font-light">
                            Join the next generation of creators. Optimize your workflow with professional-grade tools.
                        </p>
                    </div>

                    {/* Right: The Launch Button */}
                    <div className="relative"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Button Glow halo - White */}
                        <div className={`absolute inset-0 bg-white/20 rounded-full blur-2xl transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

                        <button
                            onClick={() => {
                                (window as any).gtag?.('event', 'coming_soon_click', {
                                    'product_id': 'crossroads_cta',
                                    'product_title': 'Ready to Optimize?',
                                    'location': 'crossroads_section'
                                });
                            }}
                            className="group/btn relative flex items-center gap-4 bg-white/50 text-black pl-8 pr-6 py-5 rounded-full font-bold text-xl cursor-pointer"
                        >
                            <span className="relative z-10">Coming Soon</span>
                        </button>
                    </div>

                </div>

                {/* Decorative Tech Corners - White */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20 rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20 rounded-br-2xl" />

            </motion.div>
        </div>
    );
};

export default Crossroads;
