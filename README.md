# Hi-Volt Engineering Solutions — Modern B2B Manufacturer Website

A modern, fast, professional B2B manufacturer web application for **Hi-Volt Engineering Solutions**, Bangalore, India — established in 2017, manufacturing high-voltage electrical testing and measuring equipment conforming to **IEC 60060** and **IS 2071**.

---

## 1. Tech Stack & Architecture

- **Framework**: [Next.js](https://nextjs.org/) 15 (App Router) + React 19 + TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom industrial-tech theme (deep navy `#0B172A`, electric blue `#0284C7`, high-voltage amber `#F59E0B`, dark mode support)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Validation**: [Zod](https://zod.dev/) client & server validation
- **Email Delivery**: [Nodemailer](https://nodemailer.com/) SMTP integration with simulated fallback
- **Spam Defense**: Honeypot field trap + sliding-window in-memory IP rate limiting
- **Static Generation (SSG)**: All product detail and marketing pages are pre-rendered statically (`generateStaticParams`) with zero layout shift
- **Testing**: [Vitest](https://vitest.dev/) unit test suite for form schema and spam detection
- **SEO & Compliance**: Open Graph tags, JSON-LD Schema (`Organization`, `LocalBusiness`, `Product`), dynamic XML sitemap (`/sitemap.xml`), and robots directive (`/robots.txt`)

---

## 2. Directory Structure

```text
├── .env.example                    # Environment variables template
├── .env.local                      # Local development environment overrides
├── eslint.config.mjs               # ESLint configuration
├── next.config.ts                  # Next.js build and image optimization settings
├── package.json                    # Project dependencies and CI scripts
├── postcss.config.mjs              # PostCSS plugins
├── tailwind.config.ts              # Custom industrial palette & typography configuration
├── tsconfig.json                   # TypeScript strict compiler options
├── vitest.config.ts                # Vitest unit test configuration
│
├── public/
│   ├── images/
│   │   ├── logo.svg                # Hi-Volt vector logo (Light mode)
│   │   ├── logo-dark.svg           # Hi-Volt vector logo (Dark mode)
│   │   ├── customers/              # Customer partner logos & SVGs
│   │   │   ├── hitachi.svg         # Hitachi Energy vector representation
│   │   │   └── placeholder-client.svg # Client partner placeholder
│   │   └── products/               # Technical schematic SVGs (19 products)
│   │       ├── modular-hv-system.svg
│   │       ├── impulse-generator-1200kv.svg
│   │       ├── partial-discharge-meter.svg
│   │       └── ...
│   └── logo.svg                    # Brand vector fallback
│
└── src/
    ├── app/
    │   ├── layout.tsx              # Root HTML, navigation, theme provider, cookie banner, JSON-LD
    │   ├── page.tsx                # Homepage (Hero slider, Categories, Modular Highlight, Why Hi-Volt, Strip, Form)
    │   ├── globals.css             # Tailwind layers, technical grid motif, glow utilities
    │   ├── not-found.tsx           # Custom 404 page
    │   ├── sitemap.ts              # Dynamic sitemap.xml generator (all 19 products + static routes)
    │   ├── robots.ts               # Robots.txt generator
    │   ├── about/page.tsx          # About Hi-Volt, WS Test Systems heritage timeline, legacy support
    │   ├── contact/page.tsx        # Contact details, tap-to-call, WhatsApp click-to-chat, Google Map
    │   ├── customers/page.tsx      # Customer logo grid with grayscale-to-color hover
    │   ├── privacy/page.tsx        # Privacy policy & cookie preferences page
    │   ├── quality/page.tsx        # Quality Policy, Principles, 4-Card Objectives, Standards
    │   ├── products/
    │   │   ├── page.tsx            # Filterable, searchable product catalog
    │   │   └── [slug]/page.tsx     # Product detail (rating, specs table, TODO datasheets, related products)
    │   └── api/
    │       └── contact/route.ts    # Secure API route with Zod validation, rate limiting, and email dispatch
    │
    ├── components/
    │   ├── contact/
    │   │   └── ContactForm.tsx     # Accessible quotation & enquiry form with client Zod validation
    │   ├── home/
    │   │   ├── HeroSlider.tsx      # Carousel of featured equipment with IEC 60060 & IS 2071 claims
    │   │   ├── CategoryGrid.tsx    # Filterable categories overview cards
    │   │   ├── ModularHighlight.tsx# Modular High Voltage Systems prominent showcase
    │   │   ├── FeaturedSystems.tsx # High-capacity big-ticket equipment cards (1200kV, 300kVA, etc.)
    │   │   ├── WhyHiVolt.tsx       # Verified claims & legacy WS Test Systems / MWB support box
    │   │   └── CustomerStrip.tsx   # Client logos strip
    │   ├── layout/
    │   │   ├── Header.tsx          # Sticky header, desktop navigation, mobile drawer, theme toggle
    │   │   ├── Footer.tsx          # Comprehensive footer with address, contact numbers, compliance badges
    │   │   ├── ThemeProvider.tsx   # Light / Dark mode toggle with localStorage persistence
    │   │   └── CookieBanner.tsx    # Privacy consent banner (Accept / Reject / Customize)
    │   └── products/
    │       ├── ProductCard.tsx     # Reusable equipment card with ratings and quote action
    │       └── ProductCatalog.tsx  # Interactive search & category-filtered catalog
    │
    ├── content/                    # Typed data files (Owner editable without touching UI components)
    │   ├── company.ts              # Company profile, addresses, phones, timeline, heritage
    │   ├── products.ts             # All 19 equipment items with full specs & TODO placeholders
    │   ├── customers.ts            # Client list (Hitachi Energy + 9 placeholder entries)
    │   └── quality.ts              # Quality policy, 4 objectives, standards framework
    │
    └── lib/
        ├── schema.ts               # Zod contact & RFQ form schema
        ├── rate-limit.ts           # Sliding-window IP rate limiter
        ├── types.ts                # TypeScript interfaces for products, categories, customers, company
        ├── utils.ts                # Tailwind class merge helper
        └── __tests__/
            └── schema.test.ts      # Automated unit tests for form validation and bot detection
```

---

## 3. Environment Variables Configuration

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

### Available Variables:

| Variable | Description | Example |
|---|---|---|
| `SMTP_HOST` | Outgoing SMTP server | `smtp.gmail.com` or `mail.hivoltengineeringsolutions.com` |
| `SMTP_PORT` | SMTP port | `587` or `465` |
| `SMTP_SECURE` | Enable SSL/TLS (`true` for 465, `false` for 587) | `false` |
| `SMTP_USER` | SMTP username | `marketing@hivoltengineeringsolutions.com` |
| `SMTP_PASS` | SMTP application password | `your-password-here` |
| `CONTACT_RECIPIENT_EMAIL` | Inbox receiving enquiry notifications | `marketing@hivoltengineeringsolutions.com` |
| `NEXT_PUBLIC_SITE_URL` | Production website URL for canonical links | `https://www.hivoltengineeringsolutions.com` |
| `NEXT_PUBLIC_GA_ID` | Google Analytics Measurement ID (optional) | `G-XXXXXXXXXX` |

*Note: If SMTP credentials are left unconfigured in local development, the API route safely logs the formatted enquiry payload to the console without crashing.*

---

## 4. Local Development & Scripts

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Run Automated Tests
```bash
npm test
```
Executes the Vitest test suite checking Zod validation and honeypot spam protection.

### 4. Type Check
```bash
npm run typecheck
```
Executes TypeScript compiler check (`tsc --noEmit`).

### 5. Lint
```bash
npm run lint
```
Executes ESLint validation.

### 6. Production Static Build
```bash
npm run build
```
Generates optimized static pages for all routes and product slugs in `.next/`.

---

## 5. Deployment Guide (Vercel)

The project is pre-configured for seamless zero-configuration deployment to [Vercel](https://vercel.com/):

1. **Push to Git**: Push this repository to GitHub, GitLab, or Bitbucket.
2. **Import Project into Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new) and select the repository.
   - Framework Preset: **Next.js** (automatically detected).
   - Root Directory: `./` (leave default).
3. **Configure Environment Variables in Vercel Project Settings**:
   - Add `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, and `CONTACT_RECIPIENT_EMAIL`.
   - Set `NEXT_PUBLIC_SITE_URL` to `https://www.hivoltengineeringsolutions.com`.
4. **Deploy**: Click **Deploy**. Vercel will build and deploy the application globally to edge regions.
5. **Add Custom Domain**:
   - In Vercel Project Settings -> **Domains**, add `www.hivoltengineeringsolutions.com` and `hivoltengineeringsolutions.com`.
   - Configure DNS records (CNAME `cname.vercel-dns.com` or A record `76.76.21.21`) at your DNS registrar.

---

## 6. Checklist: What the Client Needs to Supply

Where information was missing from the initial data, clean placeholders have been established in the code and content files. Here is the checklist of assets and details to supply:

1. **High-Resolution Product Photos**: Replace the clean technical SVGs in `public/images/products/` with actual equipment photos of the test bays, impulse generators, and control desks.
2. **Missing Product Technical Specifications**: Update the marked `"TODO: add datasheet"` fields inside `src/content/products.ts` with exact capacitance, volume, electrode gap, and current ratings.
3. **Datasheet PDF Files**: Place the official PDF datasheets in `public/datasheets/` and update `datasheetUrl` in `src/content/products.ts`.
4. **Customer Logos (9 Pending Partners)**: Supply the official vector or transparent PNG logos for the 9 placeholder client slots in `src/content/customers.ts` (currently holding placeholder cards alongside Hitachi Energy).
5. **Final Vector Logo**: Supply the clean high-resolution SVG/vector of the company logo to update `public/images/logo.svg` and `public/images/logo-dark.svg`.
6. **Live Google Maps API Key / Exact Coordinates**: Verify or update the Google Maps embed query coordinate in `src/content/company.ts` for the Peenya 2nd Stage facility.
7. **Production SMTP Credentials**: Provide production SMTP credentials for `marketing@hivoltengineeringsolutions.com` to enable live customer inquiry emails.
8. **Google Analytics ID**: Provide `NEXT_PUBLIC_GA_ID` (e.g. `G-XXXXXXXXXX`) if traffic measurement is desired (activated strictly upon user cookie consent).
