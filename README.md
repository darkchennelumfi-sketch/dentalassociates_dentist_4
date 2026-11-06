# Dental Associates Inc.

A modern website for **Dental Associates Inc.**, a family dental office in Mandan, North Dakota.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router)
- React 19 + TypeScript (strict)
- Tailwind CSS v4
- Radix UI primitives and shadcn-style components
- Motion for animations
- React Hook Form + Zod for the contact form
- Lucide React icons
- Playwright for end-to-end QA

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npx tsc --noEmit` | Run the TypeScript type checker |

## Routes

- `/` — Home
- `/about-us` — About the practice
- `/dental-services` — Dental services
- `/contact-us` — Contact details and message form
- `/payment-options` — Payment methods and CareCredit information

## QA

The Playwright smoke test in `qa.mjs` checks every route, images, the mobile menu, the contact form, and the FAQ accordion. Run a production server first, then:

```bash
npm run build
npx next start -p 3210
npm run qa
```

> The QA script expects the site at `http://localhost:3210`.

## Business information

- **Phone:** 701-663-7545
- **Email:** mandandentalassociates@gmail.com
- **Address:** 204 3rd Ave NW, Mandan, ND 58554
