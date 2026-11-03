# Sanduni Wathsala — Portfolio

Personal portfolio site built with the Next.js App Router, showcasing projects,
publications, education, and contact info.

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)

## Getting started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # run ESLint
```

## Contact form email

The contact form sends submissions through the [Resend](https://resend.com/)
API from a Next.js server route. Copy `.env.example` to `.env.local` and set:

- `RESEND_API_KEY` to an API key from Resend.
- `CONTACT_FROM_EMAIL` to an address on a domain verified with Resend.
- `CONTACT_TO_EMAIL` to override the recipient inbox (defaults to
  `sandunikekulawala@gmail.com`).

Restart the dev server after changing environment variables. Keep the API key
server-side; do not add it to a `NEXT_PUBLIC_` variable. The sender address
must use a domain verified with Resend. The form reports an error if the service
is not configured or cannot accept a message.

## Project structure

```text
app/          Next.js App Router entry points (layout, page, global styles)
components/   Page sections (Hero, About, Projects, Publications, Education, Footer, ...)
public/       Static assets (images, icons, favicon)
```
