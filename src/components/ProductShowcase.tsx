import React from 'react';
import { motion } from 'framer-motion';
import { Aperture, HardDrives, ArrowRight, CheckCircle, Globe, FileCloud, ShareNetwork } from '@phosphor-icons/react';
import clsx from 'clsx';

const ProductShowcase = () => {
    const products = [
        {
            id: 'studio',
            title: 'LazyBird Studio',
            subtitle: 'Media Processing Suite',
            description: 'Transcode, optimize, and edit your videos entirely in the browser. Professional tools, no downloads required.',
            icon: <Aperture weight="fill" />,
            features: ['Universal Format Support', 'Audio Extraction & Trimming', 'Zero-Loss Compression', 'Reel Maker (Coming Soon)'],
            link: 'https://studio.lazybird.io',
            animation: <StudioAnimation />,
            comingSoon: true
        },
        {
            id: 'portal',
            title: 'LazyBird Portal',
            subtitle: 'Decentralized File Manager',
            description: 'A robust interface for the decentralized web. Upload, organize, and share files with the security of Web3.',
            icon: <HardDrives weight="fill" />,
            features: ['Drag & Drop Uploads', 'Wallet-Based Auth', 'Public Gateway Sharing'],
            link: 'https://portal.lazybird.io',
            animation: <PortalAnimation />
        },
        {
            id: 'gateway',
            title: 'LazyBird Nest',
            subtitle: 'Private secure File Locker',
            description: 'Upload your files and share them instantly. Simple, reliable storage with 2GB free.',
            icon: <Globe weight="fill" />,
            features: ['Censorship Resistant', 'Fast Downloads', 'Client-Side XChaCha20'],
            link: '#',
            animation: <NestAnimation />,
            comingSoon: true
        }
    ];

    return (
        <div id="suite-showcase" className="bg-transparent -mt-12 relative z-20" style={{ scrollSnapType: 'y mandatory' }}>
            {products.map((product, index) => (
                <div
                    key={product.id}
                    className="min-h-[80vh] lg:min-h-screen py-16 lg:py-0 w-full flex items-center justify-center relative"
                    style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}
                >
                    <div className="max-w-7xl mx-auto w-full px-4">
                        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 items-center">

                            {/* Left: Product Info */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                                className="space-y-6"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white text-black shadow-lg">
                                        {React.cloneElement(product.icon as any, { size: 32 })}
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                                            {product.subtitle}
                                        </div>
                                        <h2 className="text-4xl font-bold text-white">{product.title}</h2>
                                    </div>
                                </div>

                                <p className="text-xl text-gray-300 leading-relaxed font-light">
                                    {product.description}
                                </p>

                                <ul className="space-y-4">
                                    {product.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-400">
                                            <CheckCircle weight="fill" className="text-white opacity-80" size={20} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {!product.comingSoon ? (
                                    <a
                                        href={product.link}
                                        onClick={() => {
                                            (window as any).gtag?.('event', 'launch_app_click', {
                                                'product_id': product.id,
                                                'product_title': product.title
                                            });
                                        }}
                                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-black transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] bg-white hover:bg-gray-100"
                                    >
                                        Launch App <ArrowRight weight="bold" />
                                    </a>
                                ) : (
                                    <button
                                        onClick={() => {
                                            (window as any).gtag?.('event', 'coming_soon_click', {
                                                'product_id': product.id,
                                                'product_title': product.title,
                                                'location': 'product_showcase'
                                            });
                                        }}
                                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-black transition-all bg-white/50 cursor-pointer"
                                    >
                                        Coming Soon
                                    </button>
                                )}
                            </motion.div>

                            {/* Right: Animation */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="h-[300px] md:h-[450px] flex items-center justify-center"
                            >
                                {product.animation}
                            </motion.div>

                        </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                        {products.map((_, i) => (
                            <div
                                key={i}
                                className={clsx(
                                    "h-1 rounded-full transition-all duration-300",
                                    i === index ? "w-8 bg-white" : "w-1 bg-white/30"
                                )}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

// --- VisionOS / Monochrome Animations ---

const StudioAnimation = React.memo(() => (
    <div className="relative w-full h-full flex items-center justify-center font-mono">
        {/* Base Glow */}
        <div className="absolute inset-0 bg-white/5 blur-[120px] rounded-full animate-pulse-slow"></div>

        {/* Central Composer Window */}
        <div className="relative z-10 w-[300px] h-[200px] md:w-[420px] md:h-[280px] bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col backdrop-blur-md">
            {/* Window Header */}
            <div className="h-8 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <div className="flex-1 text-center text-[10px] text-gray-500 tracking-wider">PROJECT_ALPHA.mp4</div>
            </div>

            {/* Main Interface Area */}
            <div className="flex-1 relative flex">
                {/* Timeline Tracks (Left) */}
                <div className="w-24 border-r border-white/5 bg-black/20 p-2 flex flex-col gap-2">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-8 bg-white/5 rounded border border-white/5 flex items-center px-2">
                            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-white/40"
                                    animate={{ width: ["0%", "100%", "0%"] }}
                                    transition={{ duration: 3 + i, repeat: Infinity, ease: "linear" }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Preview Area (Center) */}
                <div className="flex-1 p-4 flex flex-col gap-4 items-center justify-center relative overflow-hidden">

                    {/* Grid Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,rgba(0,0,0,0)_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />

                    {/* Processing Icon */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0.5 }}
                        animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="relative z-10"
                    >
                        <Aperture size={64} weight="fill" className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                    </motion.div>

                    {/* Floating Data Tags */}
                    <div className="absolute inset-0">
                        <motion.div
                            className="absolute top-10 left-10 px-2 py-1 bg-white/10 rounded text-[9px] text-gray-300 border border-white/10 backdrop-blur-md"
                            animate={{ y: [0, -5, 0], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            4K_HDR
                        </motion.div>
                        <motion.div
                            className="absolute bottom-10 right-10 px-2 py-1 bg-white/10 rounded text-[9px] text-gray-300 border border-white/10 backdrop-blur-md"
                            animate={{ y: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                        >
                            H.265
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Processing Bar (Bottom) */}
            <div className="h-10 border-t border-white/10 bg-white/5 flex items-center px-4 justify-between">
                <div className="flex items-center gap-3 w-full">
                    <div className="text-[10px] text-white/50 font-bold">RENDERING</div>
                    <div className="flex-1 h-1.5 bg-black/50 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-white shadow-[0_0_10px_white]"
                            animate={{ width: ["0%", "100%"] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "anticipate" }}
                        />
                    </div>
                </div>
            </div>
        </div>

    </div>
));

const PortalAnimation = React.memo(() => (
    <div className="relative w-full h-full flex items-center justify-center" style={{ maskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)' }}>
        <div className="absolute inset-0 bg-white/5 blur-[100px]"></div>

        {/* Floating decentralized nodes */}
        <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute"
                    initial={{ x: (Math.random() - 0.5) * 400, y: (Math.random() - 0.5) * 400, scale: 0 }}
                    animate={{ x: (Math.random() - 0.5) * 400, y: (Math.random() - 0.5) * 400, scale: [0.5, 1, 0.5], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 8 + Math.random() * 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                >
                    <div className="flex flex-col items-center gap-2">
                        <div className="p-2 bg-[#0A0A0A] border border-white/20 rounded-lg shadow-lg backdrop-blur-sm">
                            <FileCloud size={16} className="text-gray-300" />
                        </div>
                        <motion.div
                            className="absolute top-1/2 left-1/2 w-[100px] h-[1px] bg-gradient-to-r from-white/20 to-transparent -z-10"
                            style={{ transformOrigin: 'left' }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        />
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Central Hub */}
        <div className="relative z-10 flex flex-col items-center gap-4">
            <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-24 h-24 bg-[#0A0A0A]/40 backdrop-blur-xl border border-white/30 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)] relative"
            >
                <div className="absolute -inset-1 bg-white/10 blur-md rounded-2xl animate-pulse" />
                <ShareNetwork size={40} weight="fill" className="text-white relative z-10" />
            </motion.div>
            <div className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-gray-300 text-xs font-mono font-bold tracking-wider backdrop-blur-sm">
                DECENTRALIZED STORAGE
            </div>
        </div>
    </div>
));

const NestAnimation = React.memo(() => (
    <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
        {/* Dynamic Matrix Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(circle_at_center,black_40%,transparent_70%)]" />

        {/* The Central High-Speed Stack */}
        <div className="relative z-10 flex items-center justify-center transform-style-3d rotate-x-12 md:rotate-x-60 transition-transform duration-700">
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={`stack-${i}`}
                    className="absolute w-24 h-32 md:w-48 md:h-64 rounded-xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.05)] flex items-center justify-center"
                    style={{ zIndex: 10 - i }}
                    animate={{
                        y: [-20, 20, -20],
                        scale: [1 - (i * 0.05), 1 - (i * 0.05) + 0.02, 1 - (i * 0.05)],
                    }}
                    transition={{
                        duration: 6, // Slower (was 4)
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>

        {/* INCOMING FILES (Left & Right -> Center) */}
        {[...Array(12)].map((_, i) => (
            <motion.div
                key={`in-file-${i}`}
                className="absolute z-20 flex items-center justify-center"
                initial={{
                    x: i % 2 === 0 ? -120 : 120, // Mobile reduced range
                    y: Math.random() * 150 - 200, // Reduced from 300 to -200 to avoid top overlap
                    scale: 0.5,
                    opacity: 0
                }}
                animate={{
                    x: 0,
                    y: 0,
                    scale: 1,
                    opacity: [0, 1, 0]
                }}
                transition={{
                    duration: 3 + Math.random() * 2, // Slower (was 2 + 1.5)
                    repeat: Infinity,
                    delay: Math.random() * 5, // More random delay
                    ease: "circIn"
                }}
            >
                <div className="w-6 h-8 md:w-8 md:h-10 bg-white shadow-[0_0_15px_white] rounded flex items-center justify-center">
                    <FileCloud weight="fill" className="text-black/50 w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="absolute w-20 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent transform rotate-180"
                    style={{ right: i % 2 === 0 ? 'auto' : '100%', left: i % 2 === 0 ? '100%' : 'auto' }}
                />
            </motion.div>
        ))}

        {/* OUTGOING FILES (Center -> Down) */}
        {[...Array(12)].map((_, i) => (
            <motion.div
                key={`out-file-${i}`}
                className="absolute z-20 flex items-center justify-center"
                initial={{
                    x: 0,
                    y: 0,
                    scale: 1,
                    opacity: 1
                }}
                animate={{
                    x: (Math.random() - 0.5) * 200,
                    y: 100, // Keep short travel
                    scale: 1.5,
                    opacity: [1, 0]
                }}
                transition={{
                    duration: 4 + Math.random() * 2, // Much slower (was 2.5)
                    repeat: Infinity,
                    delay: Math.random() * 5,
                    ease: "circOut"
                }}
            >
                <div className="w-6 h-8 md:w-8 md:h-10 bg-white/20 border border-white/50 backdrop-blur-md rounded flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                    <CheckCircle weight="bold" className="text-white w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="absolute w-20 h-[1px] bg-gradient-to-b from-white/50 to-transparent top-full" />
            </motion.div>
        ))}

        {/* Central Burst Flash */}
        <div className="absolute z-30 w-32 h-32 bg-white/10 blur-2xl rounded-full animate-pulse" />
    </div>
));

export default ProductShowcase;
