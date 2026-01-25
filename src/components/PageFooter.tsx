
import { TwitterLogo, DiscordLogo, GithubLogo } from '@phosphor-icons/react';

const PageFooter = () => {
    return (
        <footer className="bg-[#000000] text-gray-500 py-20 border-t border-white/10 relative overflow-hidden">
            {/* Ambient Light Leak */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                {/* Brand */}
                <div className="col-span-1 md:col-span-2 space-y-6">
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="LazyBird Logo" className="w-8 h-8 object-contain" />
                        <h2 className="text-2xl font-bold text-white tracking-tight">LazyBird</h2>
                    </div>
                    <div className="h-1 w-8 bg-white/20 rounded-full mt-2" />

                    <p className="max-w-sm text-sm leading-relaxed text-gray-400 font-light">
                        Simply powerful. The essential toolkit for transcoding, sharing, and securing your digital life.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <SocialIcon icon={<TwitterLogo size={20} weight="fill" />} href="https://x.com/LazyBird_io" />
                        <SocialIcon icon={<DiscordLogo size={20} weight="fill" />} disabled />
                        <SocialIcon icon={<GithubLogo size={20} weight="fill" />} disabled />
                    </div>
                </div>

                {/* Products */}
                <div>
                    <h3 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">Products</h3>
                    <ul className="space-y-4 text-sm">
                        <li>
                            <a href="#" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group opacity-50 cursor-not-allowed">
                                <span className="w-1.5 h-1.5 rounded-full bg-transparent border border-white/20" />
                                Studio <span className="text-[10px] border border-white/10 px-1.5 rounded text-gray-500">SOON</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://portal.lazybird.io" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white transition-colors" />
                                Portal
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group opacity-50 cursor-not-allowed">
                                <span className="w-1.5 h-1.5 rounded-full bg-transparent border border-white/20" />
                                Nest <span className="text-[10px] border border-white/10 px-1.5 rounded text-gray-500">SOON</span>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h3 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">Legal & Support</h3>
                    <ul className="space-y-4 text-sm">
                        <li>
                            <a href="mailto:admin@lazybird.io" className="hover:text-white transition-colors duration-300">Contact Support</a>
                        </li>
                        <li>
                            <a href="/legal#privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/legal#terms" className="hover:text-white transition-colors duration-300">Terms of Service</a>
                        </li>
                        <li>
                            <a href="/legal#disclaimer" className="hover:text-white transition-colors duration-300">Disclaimer</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20 pt-8 border-t border-white/5 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center text-gray-600">
                <p>&copy; {new Date().getFullYear()} LazyBird. All rights reserved.</p>
                <p className="mt-4 md:mt-0">Designed for the new web</p>
            </div>
        </footer >
    );
};

const SocialIcon = ({ icon, href, disabled }: any) => {
    return (
        <a
            href={disabled ? undefined : href}
            className={`p-2.5 bg-white/5 border border-white/10 rounded-full transition-all duration-300 relative group ${disabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-white hover:text-black'}`}
        >
            {icon}
            {disabled && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-black text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Coming Soon
                </span>
            )}
        </a>
    );
}

export default PageFooter;
