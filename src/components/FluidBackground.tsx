import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const FluidBackground = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring physics for the "Lag" follower
    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050505]">

            {/* 1. Deep Ambient Glow (Moving slowly on its own) */}
            <motion.div
                className="absolute w-[80vw] h-[80vw] bg-white/[0.02] rounded-full blur-[150px]"
                animate={{
                    x: ['-20%', '20%', '-20%'],
                    y: ['-20%', '20%', '-20%'],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* 2. Secondary Follower (Drifts/Lags behind mouse) */}
            <motion.div
                className="absolute w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[100px]"
                style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
            />

            {/* 3. Primary Spotlight (Direct Mouse Tracking) */}
            <motion.div
                className="absolute w-[300px] h-[300px] bg-white/[0.05] rounded-full blur-[80px]"
                style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
            />

            {/* 4. Texture Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
        </div>
    );
};

export default FluidBackground;
