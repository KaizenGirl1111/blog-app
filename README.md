```markdown
# Blog App Documentation

## Project Overview
This project is a simple blog application built with Next.js using the traditional **Pages Router** (not the App Router). It uses TypeScript for type safety, static site generation (SSG) for blog posts, server-side rendering (SSR) for user data, and Next.js API routes to handle form submissions.

## Folder Structure

```
blog-app/
│
├── .next/                   # Next.js build output (auto-generated)
├── node_modules/            # NPM packages
├── pages/                   # Next.js Pages Router directory
│   ├── api/                 # API routes (backend)
│   │   └── contact.ts       # Form submission endpoint
│   ├── data/                # Static/mock blog posts data
│   │   └── posts.ts
│   ├── posts/               # Dynamic blog post pages by slug
│   │   └── [slug].tsx
│   ├── _app.tsx             # Custom App component importing global styles
│   ├── index.tsx            # Home page listing blog posts + form
│   └── users.tsx            # SSR example page fetching user data
├── public/                  # Static files like images
├── styles/                  # Styles folder (optional)
│   └── globals.css          # Global CSS styles
├── types/                   # Typescript type declarations
│   ├── index.ts
│   ├── routes.d.ts
│   └── validator.ts
├── tsconfig.json            # TypeScript config file
├── next.config.js           # Next.js config (use JS file - no TS)
├── package.json             # Project dependencies and scripts
└── README.md                # This documentation file
```

## Getting Started

1. **Set up dependencies:**

```bash
npm install
```

2. **Run the development server:**

```bash
npm run dev
```

3. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000) to see the blog homepage.

## Key Features

- **Static Site Generation (SSG):** Uses `getStaticProps` and `getStaticPaths` in `pages/index.tsx` and `pages/posts/[slug].tsx` to pre-render blog posts at build time.
- **Server-Side Rendering (SSR):** The page at `pages/users.tsx` fetches user data on every request using `getServerSideProps`.
- **API Routes:** Backend endpoint at `pages/api/contact.ts` accepts form submissions.
- **TypeScript:** Types defined under the `types` folder ensure consistent data shapes.

## Notes on Configuration & Common Issues

- **No `app` directory:** Next.js 13.4+ introduces the App Router which requires the `app` directory. This project uses the Pages Router, so no `app` folder is included.
- **Error: ENOENT: no such file or directory, scandir 'D:\blog-app\app'**  
  This error occurs if Next.js expects the App Router folder but does not find it. To resolve this, create an empty `app` folder at the project root:

  ```bash
  mkdir app
  ```

  This satisfies Next.js's folder expectation without changing app behavior.

- **Global CSS import:** All global CSS (like `globals.css`) must be imported only once inside `pages/_app.tsx`.

- **Next.js config file:** Use `next.config.js` (JavaScript) instead of `next.config.ts` to avoid configuration load errors.

## TypeScript Configuration Highlights

Your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
     { "name": "next" }
    ]
  }
}
```

This enables modern JavaScript features and React 18 JSX support.

---

## Further Improvements

- Implement pagination and search functionality.
- Replace global CSS with CSS Modules or Tailwind CSS for more scalable styling.
- Add user authentication for personalized experiences.

---

If you have questions or want help implementing these improvements, feel free to ask!
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
