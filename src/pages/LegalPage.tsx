import { useEffect } from 'react';
import { ArrowLeft } from '@phosphor-icons/react';
import { legalContent } from '../data/legalContent';

const LegalPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 font-sans relative">
            {/* Background noise texture similar to landing */}
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none z-0"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-20">
                {/* Back Button */}
                <a
                    href="/"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group"
                >
                    <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </a>

                <h1 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">Legal & Privacy</h1>

                <div className="space-y-20">

                    {/* Privacy Policy */}
                    <section id="privacy" className="scroll-mt-24">
                        <div className="h-px bg-white/10 mb-8"></div>
                        <h2 className="text-3xl font-bold mb-8 text-white">{legalContent.privacy.title}</h2>
                        <div className="prose prose-invert prose-lg text-gray-400">
                            {legalContent.privacy.content}
                        </div>
                    </section>

                    {/* Terms of Service */}
                    <section id="terms" className="scroll-mt-24">
                        <div className="h-px bg-white/10 mb-8"></div>
                        <h2 className="text-3xl font-bold mb-8 text-white">{legalContent.terms.title}</h2>
                        <div className="prose prose-invert prose-lg text-gray-400">
                            {legalContent.terms.content}
                        </div>
                    </section>

                    {/* Disclaimer */}
                    <section id="disclaimer" className="scroll-mt-24">
                        <div className="h-px bg-white/10 mb-8"></div>
                        <h2 className="text-3xl font-bold mb-8 text-white">{legalContent.disclaimer.title}</h2>
                        <div className="prose prose-invert prose-lg text-gray-400">
                            {legalContent.disclaimer.content}
                        </div>
                    </section>

                </div>

                {/* Footer simple */}
                <div className="mt-20 pt-10 border-t border-white/10 text-center text-gray-600 text-sm">
                    &copy; {new Date().getFullYear()} LazyBird. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default LegalPage;
