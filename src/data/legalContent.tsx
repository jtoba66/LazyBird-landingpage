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

                <h3 className="text-white font-bold text-lg mt-6">2. Encryption Keys Responsibility</h3>
                <div className="bg-red-900/20 border border-red-500/20 p-4 rounded-xl my-4">
                    <strong className="text-red-400 block mb-1">CRITICAL NOTICE:</strong>
                    <p className="text-gray-400 text-sm m-0">
                        <strong>LazyBird Inc. does not store or recover user encryption keys.</strong>
                        If a user loses their key (password and recovery phrase), their files cannot be restored by anyone, including us.
                    </p>
                </div>

                <h3 className="text-white font-bold text-lg mt-6">3. Cloud Processing (Studio) & Storage</h3>
                <p>
                    LazyBird Studio utilizes powerful cloud servers to transcode and optimize your media.
                    Files are temporarily processed on our infrastructure before being distributed via the Jackal Protocol for storage only.
                    Nest files are privately encrypted (XChaCha20-Poly1305) and can only be decrypted by you.
                </p>

                <h3 className="text-white font-bold text-lg mt-6">4. Data Loss Acknowledgment</h3>
                <p>
                    By using Nest, users acknowledge that data may become corrupted, inaccessible, or lost,
                    including due to network issues, software bugs, third-party infrastructure failures, or user error.
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
                    By accessing or using LazyBird, you agree to be bound by these unified Terms.
                    If you disagree with any part of the terms, you may not access the service.
                </p>

                <h3 className="text-white font-bold text-lg mt-6">1. Usage License & Acceptable Use</h3>
                <p>
                    LazyBird grants you a revocable, non-exclusive, non-transferable, limited license
                    to use the app strictly in accordance with these terms.
                    You agree not to use the Service specifically to host illegal content, malware,
                    or content that infringes on intellectual property rights.
                </p>

                <h3 className="text-white font-bold text-lg mt-6">2. Decentralized Nature</h3>
                <p>
                    You acknowledge that our services interact with decentralized networks (Jackal Protocol).
                    LazyBird cannot reverse transactions, recover lost private keys, or restore access
                    to encrypted data if you lose your credentials. You are solely responsible for your wallet security.
                </p>

                <h3 className="text-white font-bold text-lg mt-6">3. Payments & Refunds</h3>
                <p>
                    Payments for premium services (LazyBird Studio and Nest) are securely processed via Stripe.
                    We are committed to satisfaction and offer refunds for these services if requested within 14 days of purchase.
                    Please contact admin@lazybird.io to initiate a refund request.
                </p>

                <h3 className="text-white font-bold text-lg mt-6">4. Limitation of Liability</h3>
                <p>
                    To the maximum extent permitted by law, LazyBird Inc.’s total liability for any claim arising from the use of the service shall not exceed the total amount paid by the user in the past 12 months.
                </p>

                <h3 className="text-white font-bold text-lg mt-6">5. Arbitration & Class Action Waiver</h3>
                <p>
                    <strong>Any dispute arising from the use of Nest will be resolved exclusively through binding arbitration, not in court.</strong>
                    You and LazyBird Inc. agree to waive any right to a jury trial or to participate in a class action lawsuit.
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

                <h3 className="text-white font-bold text-lg mt-6">1. No Data Guarantee</h3>
                <p>
                    <strong>LazyBird Inc. does not guarantee the storage, integrity, or availability of any files uploaded by users.</strong>
                    Users are responsible for maintaining their own backup copies of all data.
                </p>

                <h3 className="text-white font-bold text-lg mt-6">2. No Consequential Damages</h3>
                <p>
                    In no event shall LazyBird, nor its directors, employees, or partners, be liable for
                    any indirect, incidental, special, exemplary, or consequential damages, including without limitation,
                    loss of profits, data, use, goodwill, or other intangible losses.
                </p>

                <h3 className="text-white font-bold text-lg mt-6">3. Service Availability</h3>
                <p>
                    Our services may be subject to interruptions, delays, or errors. LazyBird Inc. does not guarantee continuous or error-free operation of the platform.
                </p>

                <h3 className="text-white font-bold text-lg mt-6">4. Force Majeure</h3>
                <p>
                    LazyBird Inc. is not responsible for failures outside its reasonable control, including network outages, provider failures, cyberattacks, or natural disasters.
                </p>
            </div>
        )
    }
};
