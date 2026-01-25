import { X } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import type { ReactNode } from 'react';

interface LegalModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: ReactNode;
}

const LegalModal = ({ isOpen, onClose, title, content }: LegalModalProps) => {
    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    // Prevent body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-[#0A0A0A] border border-white/10 w-full max-w-2xl max-h-[80vh] rounded-2xl shadow-2xl flex flex-col pointer-events-auto overflow-hidden"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5">
                                <h2 className="text-xl font-bold text-white">{title}</h2>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Content - Scrollable */}
                            <div className="p-6 overflow-y-auto custom-scrollbar">
                                {content}
                            </div>

                            {/* Footer */}
                            <div className="p-6 border-t border-white/10 bg-white/5 flex justify-end">
                                <button
                                    onClick={onClose}
                                    className="px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default LegalModal;
