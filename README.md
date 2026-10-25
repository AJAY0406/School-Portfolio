# Adrian Joseph DT. Gatchalian — Bento Grid Portfolio

A responsive monochrome student portfolio built with **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS 4**, and **lucide-react**. Includes About Me, Projects, Skills, Education, and Contact.

## Requirements

- Node.js 20.9+ (Node.js 22 LTS recommended)
- npm (bundled with Node.js)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Image preview and animations

Click the main screenshot or any SmartScreen / OfficeHub thumbnail to open an in-page lightbox. The portfolio stays behind a translucent overlay; close with the X button, click the backdrop, or press Escape. Use the left/right arrow buttons or keyboard arrow keys to browse the screenshots. No image thumbnail opens a new tab.

Subtle scroll-reveal animations, gentle card hover movement, and image zoom transitions are included. Animations respect the operating system reduced-motion preference.

## Included images

Your supplied profile photo is saved as `public/images/profile.jpg`. Six SmartScreen screenshots are included in `public/images/`, with the HR dashboard as the main preview and additional screens in a thumbnail gallery. Eight OfficeHub screenshots are also included: the homepage is the main preview, with product categories, featured products, benefits, shop, about, login, and registration screenshots in its gallery.

To replace or update images, keep the filenames the same or update the image paths and gallery entries in `app/page.tsx`.

## Edit information

Open `app/page.tsx` to update profile information, biography, skills, projects, links, and education. The displayed academic profile is the FEU Tech ParaVerse URL you provided; it is **not** labeled LinkedIn.

## Deploy to Vercel

1. Create a GitHub repository and upload the project files (not the enclosing ZIP).
2. Open https://vercel.com/new and import the repository.
3. Keep framework preset **Next.js**, then click **Deploy**.
4. Vercel will provide a `*.vercel.app` URL.

Before publishing, review your contact links and any images for privacy and permission to share.

## Validation

Run `npm run build` to verify a production build. If PowerShell says `npm` is not recognized, install Node.js and restart VS Code. If PowerShell blocks `npm.ps1`, use `npm.cmd install` and `npm.cmd run dev`.

## Certifications

The Certifications section includes the original uploaded PMI Project Management Ready and Information Technology Specialist Python certificate images. Click either certificate to open the same in-page lightbox used for project screenshots. The certificates are in `public/images/certificate-pmi.png` and `public/images/certificate-python.png`.
