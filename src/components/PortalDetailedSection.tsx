import React from 'react';
import { Warning, Question, ShieldCheck, HardDrives, FolderOpen, Trash, UploadSimple, Wallet, Globe } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

const PortalDetailedSection = () => {
    return (
        <div className="bg-[#050505] py-32 px-4 md:px-8 border-t border-white/5 relative overflow-hidden font-sans">

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto space-y-16 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-widest mb-8">
                            <HardDrives size={14} weight="fill" />
                            Decentralized Storage
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8">
                            System <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Capabilities.</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            A familiar desktop interface for the decentralized web.
                        </p>
                    </motion.div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<Wallet size={32} weight="duotone" />}
                        title="Connect Wallet"
                        desc="Sign in with Keplr or Leap to access your Jackal storage."
                        delay={0}
                    />
                    <FeatureCard
                        icon={<FolderOpen size={32} weight="duotone" />}
                        title="Browse Folders"
                        desc="Navigate directories with a familiar, nostalgic Win98-style UI."
                        delay={0.1}
                    />
                    <FeatureCard
                        icon={<UploadSimple size={32} weight="duotone" />}
                        title="Upload Files"
                        desc="Drag & drop or browse. Uploads go to your Portal folder with plan checks."
                        delay={0.2}
                    />
                    <FeatureCard
                        icon={<Globe size={32} weight="duotone" />}
                        title="Open via Gateway"
                        desc="Instantly open files via gateway-powered links optimized for retrieval."
                        delay={0.3}
                    />
                    <FeatureCard
                        icon={<Trash size={32} weight="duotone" />}
                        title="Delete Files"
                        desc="Manage your Portal folder by removing files and folders you don't need."
                        delay={0.4}
                    />
                    <FeatureCard
                        icon={<HardDrives size={32} weight="duotone" />}
                        title="Manage Storage"
                        desc="Check plan usage, expiry, and buy new storage plans mostly in-app."
                        delay={0.5}
                    />
                </div>

                {/* How it Works & Trust - RETRO WINDOWS as CONTRAST */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                    {/* How It Works Window */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <RetroWindow title="HOW_IT_WORKS.TXT" icon={<Question size={16} weight="bold" />} color="blue">
                            <ul className="list-decimal list-inside space-y-4 text-sm md:text-base font-mono">
                                <li><strong>Install a Wallet:</strong> Use Keplr or Leap (Ledger not supported).</li>
                                <li><strong>Launch Portal:</strong> Open on desktop (mobile not supported).</li>
                                <li><strong>Upload & Organize:</strong> Single-file uploads go into Home/Portal.</li>
                                <li><strong>Open & Share:</strong> Files open via Lazy Bird gateway links.</li>
                            </ul>
                        </RetroWindow>
                    </motion.div>

                    {/* Trust & Safety Window */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <RetroWindow title="IMPORTANT_WARNINGS.LOG" icon={<Warning size={16} weight="bold" />} color="red">
                            <ul className="space-y-3 text-sm text-red-700 font-bold font-mono">
                                <li className="flex gap-2 items-start">
                                    <Warning size={20} className="shrink-0 mt-1" />
                                    <span>Portal is NOT official Jackal Labs software.</span>
                                </li>
                                <li className="flex gap-2 items-start">
                                    <Globe size={20} className="shrink-0 mt-1" />
                                    <span>Files uploaded through Portal are PUBLIC by default.</span>
                                </li>
                                <li className="flex gap-2 items-start">
                                    <ShieldCheck size={20} className="shrink-0 mt-1" />
                                    <span>Always verify transactions. Keep keys secure.</span>
                                </li>
                            </ul>
                        </RetroWindow>
                    </motion.div>
                </div>

                {/* FAQ - Styled as a terminal/help file */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 hover:border-teal-500/30 transition-colors"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <span className="text-teal-400 font-mono text-xl">{'>'} View Knowledge_Base</span>
                        <span className="h-px bg-white/10 flex-grow"></span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        <FAQItem q="Is Portal official Jackal Labs software?" a="No. Portal is not official Jackal Labs software and is not endorsed by Jackal Labs." />
                        <FAQItem q="Do I need a wallet? Which ones work?" a="Yes—Portal uses Keplr or Leap. Ledger devices aren’t supported." />
                        <FAQItem q="Can I use Portal on mobile?" a="No. Portal is desktop-only and blocks small screens." />
                        <FAQItem q="Are my uploaded files private?" a="No—files uploaded through Portal are public by default. Don't upload sensitive data." />
                    </div>
                </motion.div>

                {/* Final CTA */}
                <div className="text-center py-20">
                    <h3 className="text-2xl text-white font-bold mb-8">Ready to access Jackal storage?</h3>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://portal.lazybird.io"
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-teal-500 text-black font-bold uppercase tracking-wider rounded transition-all shadow-lg shadow-teal-500/20 hover:bg-teal-400"
                    >
                        Launch Portal
                    </motion.a>
                </div>

            </div>
        </div>
    );
};

const FeatureCard = ({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-teal-500/30 transition-all group"
    >
        <div className="mb-6 w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-400 group-hover:text-teal-300">
            {icon}
        </div>
        <h3 className="font-bold text-lg text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
    </motion.div>
);

const RetroWindow = ({ title, icon, color, children }: { title: string, icon: React.ReactNode, color: 'blue' | 'red', children: React.ReactNode }) => {
    // Keeping the retro visual as a "contained artifact"
    const headerColor = color === 'blue' ? 'from-[#000080] to-[#1084d0]' : 'from-[#800000] to-[#d01010]';
    return (
        <div className="bg-[#c0c0c0] border-2 border-white border-r-black border-b-black p-1 shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className={`bg-gradient-to-r ${headerColor} px-2 py-1 flex items-center justify-between mb-1`}>
                <div className="flex items-center gap-2 text-white">
                    {icon}
                    <span className="font-bold text-sm tracking-wide font-mono">{title}</span>
                </div>
                <div className="flex gap-0.5">
                    <div className="w-4 h-4 bg-[#c0c0c0] border border-b-black border-r-black border-t-white border-l-white flex items-center justify-center text-[8px] font-bold">_</div>
                    <div className="w-4 h-4 bg-[#c0c0c0] border border-b-black border-r-black border-t-white border-l-white flex items-center justify-center text-[8px] font-bold">×</div>
                </div>
            </div>
            <div className="p-4 bg-white border-2 border-[inset] border-gray-400">
                {children}
            </div>
        </div>
    );
}

const FAQItem = ({ q, a }: { q: string, a: string }) => (
    <div>
        <h4 className="font-bold text-white mb-2 flex items-start gap-2">
            <span className="text-teal-500">Q.</span>
            {q}
        </h4>
        <p className="text-sm pl-6 text-gray-400">{a}</p>
    </div>
);

export default PortalDetailedSection;
