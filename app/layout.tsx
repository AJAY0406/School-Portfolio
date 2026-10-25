import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Adrian Joseph DT. Gatchalian | Aspiring Software Engineer',
  description: 'Portfolio of Adrian Joseph DT. Gatchalian, a Computer Science student specializing in Software Engineering at FEU Institute of Technology. Explore projects, skills, and education.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
