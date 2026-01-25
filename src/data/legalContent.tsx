export const legalContent = {
    privacy: {
        title: "Privacy Policy",
        content: (
            <div className="space-y-4 text-gray-300">
                <p>Last updated: January 2026</p>
                <p>
                    At LazyBird, we prioritize your privacy through our decentralized architecture.
                    Unlike traditional platforms, we do not monetize your data or track your personal usage habits.
                </p>

                <h3 className="text-white font-bold text-lg mt-6">1. Zero-Knowledge Architecture (Nest)</h3>
                <p>
                    For LazyBird Nest, we employ a Zero-Knowledge (Host-Proof) architecture.
                    Your password never leaves your device. Encryption keys are derived client-side (using Argon2id),
                    ensuring we cannot access your raw password or decrypt your private files.
                </p>

                <h3 className="text-white font-bold text-lg mt-6">2. Cloud Processing (Studio)</h3>
                <p>
                    LazyBird Studio utilizes powerful cloud servers to transcode and optimize your media.
                    Files are temporarily processed on our infrastructure before being distributed via the Jackal Protocol.
                    We prioritize efficiency and performance over local constraints.
                </p>

                <h3 className="text-white font-bold text-lg mt-6">3. Decentralized Storage</h3>
                <p>
                    LazyBird Portal files are public by default, accessible via the decentralized web.
                    While your account is secured via Web3 wallet authentication, uploaded content on Portal is intended for sharing.
                    Nest files, conversely, are privately encrypted (XChaCha20-Poly1305) and can only be decrypted by you.
                </p>
            </div>
        )
    },
    terms: {
        title: "Terms of Service",
        content: (
            <div className="space-y-4 text-gray-300">
                <p>Last updated: January 2026</p>
                <p>
                    By accessing or using LazyBird, you agree to be bound by these Terms.
                    If you disagree with any part of the terms, you may not access the service.
                </p>

                <h3 className="text-white font-bold text-lg mt-6">1. Usage License</h3>
                <p>
                    LazyBird grants you a revocable, non-exclusive, non-transferable, limited license
                    to use the app strictly in accordance with these terms.
                </p>

                <h3 className="text-white font-bold text-lg mt-6">2. Decentralized Nature</h3>
                <p>
                    You acknowledge that our services interact with decentralized networks.
                    LazyBird cannot reverse transactions, recover lost private keys, or restore access
                    to encrypted data if you lose your credentials. You are solely responsible for your wallet security.
                </p>

                <h3 className="text-white font-bold text-lg mt-6">3. Prohibited Uses</h3>
                <p>
                    You agree not to use the Service specifically to host illegal content, malware,
                    or content that infringes on intellectual property rights.
                </p>

                <h3 className="text-white font-bold text-lg mt-6">4. Payments & Refunds</h3>
                <p>
                    Payments for premium services (LazyBird Studio and Nest) are securely processed via Stripe.
                    We are committed to satisfaction and offer refunds for these services if requested within 14 days of purchase.
                    Please contact admin@lazybird.io to initiate a refund request.
                </p>
            </div>
        )
    },
    disclaimer: {
        title: "Disclaimer",
        content: (
            <div className="space-y-4 text-gray-300">
                <p>
                    The services provided by LazyBird are on an "AS IS" and "AS AVAILABLE" basis.
                </p>

                <h3 className="text-white font-bold text-lg mt-6">1. Beta Software</h3>
                <p>
                    Some components of LazyBird (specifically Portal and Nest) are in active development.
                    While we strive for stability, you acknowledge that bugs or interruptions may occur.
                </p>

                <h3 className="text-white font-bold text-lg mt-6">2. No Financial Advice</h3>
                <p>
                    Nothing on this website constitutes financial advice. Logic involving tokens,
                    storage credits, or crypto-payments should be treated with due diligence.
                </p>

                <h3 className="text-white font-bold text-lg mt-6">3. Limitation of Liability</h3>
                <p>
                    In no event shall LazyBird, nor its directors, employees, or partners, be liable for
                    any indirect, incidental, special, consequential or punitive damages, including without limitation,
                    loss of profits, data, use, goodwill, or other intangible losses.
                </p>
            </div>
        )
    }
};
