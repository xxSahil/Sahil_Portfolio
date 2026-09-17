This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Reading this portfolio's code

- `app/layout.tsx` wraps every page and initializes the saved theme.
- `app/page.tsx`, `app/about/page.tsx`, and `app/projects/page.tsx` define the three routes.
- `components/` contains reusable page elements and the browser interactions.
- `data/projects.ts` holds project descriptions, links, and YouTube IDs.
- `app/globals.css` defines both palettes, shared styles, and animations.
- `public/` holds images and the resume. Its filenames become URLs from the site root.

Comments use `//` in TypeScript, `{/* ... */}` inside JSX markup, and `/* ... */` in CSS.
JSX resembles HTML, but braces insert JavaScript expressions. `className` supplies CSS
classes, and `@/` imports start from the project root.

### package.json and npm commands

`package.json` uses strict JSON, which does not support comments. Its main sections are:

- `scripts`: shortcuts run with `npm run <name>`.
- `dependencies`: libraries used by the application, including Next.js, React, and icons.
- `devDependencies`: development tools such as TypeScript, ESLint, and Tailwind.
- `private`: prevents accidental publication of this project as an npm package.

`npm run dev` starts the development server using Webpack. `WATCHPACK_POLLING=1000`
checks for file changes once per second to avoid the file-watcher errors encountered
on this Mac. The server remains running until you press Control+C.

`npm run build` creates an optimized production build. `npm run start` serves that
build, and `npm run lint` checks the code for common mistakes.

`package-lock.json` records exact installed dependency versions. Next.js generates
`next-env.d.ts` and `.next/`; keep those generated files and dependency code out of
manual commenting edits.
