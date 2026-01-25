import { useRef } from 'react';
import { motion, useScroll, useTransform, useTime } from 'framer-motion';
import { RocketLaunch, Users, Smiley, FileVideo, YoutubeLogo, PlayCircle } from '@phosphor-icons/react';

const StudioDetailedSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

    return (
        <div ref={containerRef} className="py-4 px-4 bg-transparent relative overflow-hidden min-h-screen flex items-center">
            {/* Deep Ambient Background - Monochrome Fog */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-white/5 via-gray-800/5 to-transparent rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-gray-900/10 via-white/5 to-transparent rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 w-full">

                {/* Section Header */}
                <div className="text-center mb-16 relative">
                    <motion.div
                        style={{ opacity }}
                        className="absolute left-1/2 -translate-x-1/2 -top-24 w-[1px] h-24 bg-gradient-to-b from-transparent to-white/20"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-gray-200 text-sm font-bold mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                    >
                        <Smiley size={18} weight="fill" className="animate-pulse text-white" />
                        <span className="tracking-wide">The Creator's Best Friend</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-[0.9]"
                    >
                        Made for <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 animate-gradient-x">Everyone.</span>
                    </motion.h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
                        Whether you're a pro editor or just starting your channel, Studio makes your workflow smooth as butter.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

                    {/* Left Column: Glass Stack */}
                    <div className="space-y-6 perspective-1000">
                        <GlassCard
                            icon={<YoutubeLogo size={32} weight="fill" />}
                            title="Content Creators"
                            desc="Get your videos ready for YouTube, TikTok, and Instagram in seconds. Perfect quality, tiny file sizes."
                            delay={0.2}
                        />
                        <GlassCard
                            icon={<Users size={32} weight="fill" />}
                            title="Agencies & Teams"
                            desc="Share assets securely without the headache. Keep your client work private and pristine."
                            delay={0.3}
                        />
                        <GlassCard
                            icon={<RocketLaunch size={32} weight="fill" />}
                            title="Total Beginners"
                            desc="No complex settings or confusing jargon. Just drop your file and let the magic happen."
                            delay={0.4}
                        />
                    </div>

                    {/* Right Column: Gravity Processor */}
                    <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center perspective-1000 scale-50 md:scale-75 lg:scale-100 -my-20 lg:my-0">

                        {/* Central Core */}
                        <motion.div
                            style={{ y }}
                            className="relative z-20 w-40 h-40 bg-[#0A0A0A]/80 border border-white/20 rounded-[2.5rem] shadow-2xl flex flex-col items-center justify-center text-white group backdrop-blur-xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-gray-500/10 rounded-[2.5rem] blur-xl opacity-30 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex flex-col items-center gap-2">
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <PlayCircle size={56} weight="fill" className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]" />
                                </motion.div>
                                <span className="font-bold text-sm tracking-widest uppercase text-white/60 group-hover:text-white transition-colors">Web Ready</span>
                            </div>

                            {/* Inner Ring */}
                            <div className="absolute inset-2 border border-white/10 rounded-[2rem]" />
                        </motion.div>

                        {/* Orbiting Systems */}
                        <OrbitRing size={300} speed={40} delay={0} />
                        <OrbitRing size={450} speed={60} delay={15} reverse />

                        {/* Orbiting Planets (Formats) - Grayscale */}
                        <OrbitingPlanet radius={150} speed={20} angle={0}>
                            <FormatBubble text="MKV" />
                        </OrbitingPlanet>
                        <OrbitingPlanet radius={150} speed={20} angle={120}>
                            <FormatBubble text="MOV" />
                        </OrbitingPlanet>
                        <OrbitingPlanet radius={150} speed={20} angle={240}>
                            <FormatBubble text="AVI" />
                        </OrbitingPlanet>

                        <OrbitingPlanet radius={225} speed={30} angle={60} reverse>
                            <FormatBubble text="WMV" size="sm" />
                        </OrbitingPlanet>
                        <OrbitingPlanet radius={225} speed={30} angle={180} reverse>
                            <FormatBubble text="FLV" size="sm" />
                        </OrbitingPlanet>
                        <OrbitingPlanet radius={225} speed={30} angle={300} reverse>
                            <FormatBubble text="WEBM" size="sm" />
                        </OrbitingPlanet>


                        <div className="absolute bottom-20 text-center w-full">
                            <p className="text-xs font-bold tracking-[0.3em] text-gray-500 uppercase flex items-center justify-center gap-4">
                                <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gray-500" />
                                Universal Support
                                <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gray-500" />
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

// --- Sub-Components ---

const GlassCard = ({ icon, title, desc, delay }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50, rotateX: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay, duration: 0.8, type: "spring", bounce: 0.3 }}
            className="relative group cursor-default"
        >
            <div className={`absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] blur-xl`} />

            <div className="relative bg-[#0A0A0A]/40 backdrop-blur-2xl border border-white/10 p-8 rounded-[2rem] hover:border-white/30 transition-all duration-500 group-hover:translate-x-2 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 text-gray-300 group-hover:scale-110 group-hover:bg-white/20 group-hover:text-white transition-all duration-500 shadow-inner">
                        {icon}
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                            {title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed font-light text-lg group-hover:text-gray-200 transition-colors">
                            {desc}
                        </p>
                    </div>
                </div>

                {/* Active Indicator Line */}
                <div className="absolute left-0 top-10 bottom-10 w-1 bg-white rounded-r-full opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 group-hover:-translate-x-0 shadow-[0_0_10px_white]" />
            </div>
        </motion.div>
    );
}

const OrbitRing = ({ size, speed, delay, reverse }: any) => {
    return (
        <motion.div
            animate={{ rotate: reverse ? -360 : 360 }}
            transition={{ duration: speed, repeat: Infinity, ease: "linear", delay }}
            style={{ width: size, height: size }}
            className="absolute rounded-full border border-white/5 pointer-events-none"
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/20 rounded-full blur-[1px] shadow-[0_0_5px_white]" />
        </motion.div>
    )
}

const OrbitingPlanet = ({ radius, speed, angle, children, reverse }: any) => {
    const time = useTime();
    const rotate = useTransform(time, [0, speed * 1000], [0, reverse ? -360 : 360], { clamp: false });

    // Convert rotation to x/y coordinates
    const x = useTransform(rotate, (r) => radius * Math.cos((r + angle) * (Math.PI / 180)));
    const y = useTransform(rotate, (r) => radius * Math.sin((r + angle) * (Math.PI / 180)));

    return (
        <motion.div style={{ x, y }} className="absolute z-10 text-white">
            {children}
        </motion.div>
    );
}

const FormatBubble = ({ text, size = "md" }: any) => {
    const dim = size === "md" ? "w-20 h-20" : "w-14 h-14";
    const fontSize = size === "md" ? "text-base" : "text-xs"; // font size for text

    return (
        <motion.div
            whileHover={{ scale: 1.2 }}
            className={`${dim} rounded-full bg-[#0A0A0A]/60 border border-white/20 backdrop-blur-xl flex flex-col items-center justify-center shadow-lg hover:border-white/50 transition-all cursor-default hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]`}
        >
            <FileVideo weight="duotone" className="mb-1 text-gray-300" size={size === "md" ? 24 : 18} />
            <span className={`font-bold ${fontSize} tracking-wider text-white`}>{text}</span>
        </motion.div>
    )
}

export default StudioDetailedSection;
