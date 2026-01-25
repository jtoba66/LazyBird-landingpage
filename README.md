# LazyBird

<div align="center">
  <img src="public/logo.png" alt="LazyBird Logo" width="120" />
  <h1>Simply powerful.</h1>
  <p><strong>The complete suite to create, distribute, and protect your digital assets.</strong></p>
</div>

---

LazyBird is a comprehensive toolkit designed for the modern creator economy and the decentralized web. We bridge the gap between complex Web3 technologies and seamless user experience, offering a suite of products that handle everything from video transcoding to private, permanent storage.

## 🚀 The Suite

### 1. LazyBird Studio
**Professional Cloud-Based Transcoding & Optimization**

Studio is a powerful media processing engine that lives in the cloud but feels like a desktop app. It allows creators to transcode, optimize, and edit videos without burdening their local hardware.
*   **Universal Format Support**: Convert between MKV, MOV, MP4, AVI, WEBM, and more.
*   **Intelligent Optimization**: Compress files with zero perceived quality loss using advanced codecs (H.265/HEVC).
*   **Cloud Processing**: All heavy lifting is done on our value-optimized infrastructure, saving your battery and CPU.
*   **Jackal Protocol**: Processed files are distributed via the Jackal Protocol for resilient, decentralized access.

### 2. LazyBird Nest
**Zero-Knowledge Private Storage**

Nest is your digital vault. It is built on a **Host-Proof** architecture, meaning even we (LazyBird) cannot see your files.
*   **Zero-Knowledge Auth**: We never see your password. We use **Argon2id** for client-side key derivation, sending only a cryptographic hash for authentication.
*   **Military-Grade Encryption**: Every file is encrypted locally using **XChaCha20-Poly1305** before it ever leaves your device.
*   **Decentralized**: Encrypted shards are stored across a decentralized network, ensuring no single point of failure and censorship resistance.
*   **Recovery Kit**: Because we don't hold your keys, we provide a recovery kit. If you lose your password and this kit, your data is mathematically irretrievable—by design.

### 3. LazyBird Portal
**Decentralized Public Gateway**

Portal is the public-facing side of the decentralized web. It makes sharing files as easy as dropping a link.
*   **Public by Default**: Designed for assets you *want* to share—videos, portfolios, public datasets.
*   **Web3 Native**: Connect with your wallet to manage uploads.
*   **Permanent Storage**: Leverages decentralized storage to ensure links stay alive without reliable on centralized hosting providers.

---

## 🛠️ Stack

This landing page is built with:
*   **React** + **Vite** (Fast, modern frontend tooling)
*   **TailwindCSS** (Utility-first styling)
*   **Framer Motion** (Complex animations and gestures)
*   **Phosphor Icons** (Consistent iconography)

## 💻 Development

Clone the project and install dependencies:

```bash
git clone https://github.com/jtoba66/LazyBird-landingpage.git
cd lazybird-landing
npm install
```

Start the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## 📄 License & Legal

All rights reserved. See `src/data/legalContent.tsx` for full Terms of Service and Privacy Policy details.

**Contact**: `admin@lazybird.io`
