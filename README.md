# Pilldoor Website

The official, production-ready web platform for **Pilldoor** — modern medicine delivery, prescription verification, and family healthcare ecosystem.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router, React 19)
- **Styling**: Tailwind CSS v4, PostCSS
- **Animations**: GSAP, Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Strictly typed (TypeScript 5)
- **Linting**: ESLint 9 (Flat Config)

## 📁 Key Routes

- `/` — Homepage: Hero, How It Works, Features, FAQ, and Download
- `/how-it-works` — Prescription upload & pharmacist verification flow
- `/features` — 4-digit OTP delivery, prescription archiving, refills
- `/family-care` — Family healthcare profiles & chronic medication management
- `/pharmacy-partners` — Pharmacy partner operations & demo request desk
- `/delivery-partners` — Doorstep delivery fleet information
- `/contact` — Customer and partner enquiry desk
- `/privacy-policy` — Google Play Data Safety certified privacy policy
- `/terms-and-conditions` — Terms of service & clinical disclaimers
- `/data-deletion` — Account & personal data deletion portal (Google Play compliant)

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
# or with Turbopack:
npm run dev:turbo
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### 3. Quality & Build Pipeline
```bash
# Typecheck
npm run typecheck

# Lint
npm run lint

# Production Build
npm run build
```

## 🔒 Security & Compliance

- **Google Play Store Policy**: Fully compliant Data Safety disclosures and direct user account & data deletion portal at `/data-deletion`.
- **Security Headers**: Configured with standard protection headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`).
- **Error Boundaries**: Custom branded recovery view implemented at `src/app/error.tsx`.
