'use client';

import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, BookOpen, Code2, ExternalLink, Github, GraduationCap, Sparkles, UserRound, Facebook, BriefcaseBusiness, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const profile = {
  name: 'Adrian Joseph DT. Gatchalian',
  title: 'Aspiring Software Engineer',
  subtitle: 'Computer Science Student · Software Engineering',
  headline: 'Aspiring Software Engineer | Computer Science Student Specializing in Software Engineering | Learning Programming and Software Development | Passionate About Technology, Problem-Solving, and Building Practical Applications',
  email: 'adgatchalian@fit.edu.ph',
  github: 'https://github.com/AJAY0406',
  academicProfile: 'https://paraverse.feutech.edu.ph/briefcase/profile/010023202T',
  facebook: 'https://www.facebook.com/AJ040605',
};
const paragraphs = [
  "I'm a Computer Science student focusing on Software Engineering, with a growing passion for technology, programming, and software development. I'm currently developing my coding skills, exploring different programming languages, and learning how software applications are designed and built.",
  "Although I'm still at the beginning of my journey, I'm eager to gain hands-on experience, improve my problem-solving abilities, and work on projects that challenge me to grow. I enjoy learning new technologies and understanding how software can solve real-world problems.",
  "My goal is to become a skilled Software Engineer who can create efficient, reliable, and user-friendly applications. I'm always open to learning opportunities, collaboration, and experiences that will help me grow as a future software engineer.",
];
const projects = [
  { number: '01', name: 'SmartScreen', type: 'Thesis Project', liveHref: 'https://smartscreen.dpdns.org/', description: 'A thesis project developed under GTSolutions, focused on building a software-based SmartScreen system.', stack: ['Python', 'Django', 'SQL'], href: 'https://github.com/markcbrs-dev/SmartScreen', image: '/images/smartscreen-dashboard.png', imageLabel: 'SmartScreen HR dashboard screenshot', gallery: [{ src: '/images/smartscreen-home.png', alt: 'SmartScreen role selection screen' }, { src: '/images/smartscreen-applicant.png', alt: 'SmartScreen applicant resume upload screen' }, { src: '/images/smartscreen-login.png', alt: 'SmartScreen HR login screen' }, { src: '/images/smartscreen-jobs.png', alt: 'SmartScreen job description management screen' }, { src: '/images/smartscreen-status.png', alt: 'SmartScreen applicant status screen' }] },
  { number: '02', name: 'OfficeHub', type: 'E-commerce Website', liveHref: 'http://officehub.atwebpages.com/', description: 'A web-based e-commerce platform for browsing and purchasing office furniture, equipment, and accessories, with product listings, categories, and separate buyer and seller sections.', stack: ['PHP', 'HTML', 'CSS', 'SQL / MySQL'], href: 'https://github.com/AJAY0406/OfficeHub', image: '/images/officehub-home.png', imageLabel: 'OfficeHub homepage screenshot', gallery: [{ src: '/images/officehub-categories.png', alt: 'OfficeHub product categories and featured products' }, { src: '/images/officehub-featured-products.png', alt: 'OfficeHub featured product cards' }, { src: '/images/officehub-benefits.png', alt: 'OfficeHub delivery and shopping benefits section' }, { src: '/images/officehub-shop.png', alt: 'OfficeHub all products shop page' }, { src: '/images/officehub-about.png', alt: 'OfficeHub about page' }, { src: '/images/officehub-login.png', alt: 'OfficeHub login page' }, { src: '/images/officehub-register.png', alt: 'OfficeHub registration page' }] },
];
const certifications = [
  { title: 'PMI Project Management Ready®', issuer: 'Project Management Institute', date: 'March 18, 2026', image: '/images/certificate-pmi.png', alt: 'PMI Project Management Ready certificate awarded to Adrian Joseph De Torres Gatchalian' },
  { title: 'Information Technology Specialist — Python', issuer: 'Certiport / Pearson VUE', date: 'July 16, 2025', image: '/images/certificate-python.png', alt: 'Information Technology Specialist Python certificate awarded to Adrian Joseph De Torres Gatchalian' },
  { title: 'Data Visualization with Python', issuer: 'Cognitive Class · IBM Developer Skills Network', date: 'October 30, 2026', image: '/images/certificate-data-visualization-python.png', alt: 'Data Visualization with Python course completion certificate issued by Cognitive Class' },
  { title: 'Node.js: Testing and Code Quality', issuer: 'LinkedIn Learning', date: 'November 25, 2025', image: '/images/certificate-nodejs-testing.jpg', alt: 'Node.js Testing and Code Quality course completion certificate from LinkedIn Learning' },
];

const skills = [
  { label: 'Programming & web', items: ['HTML', 'Assembly Language', 'Java', 'Python', 'C++', 'Programming'] },
  { label: 'Technical & productivity', items: ['Computer Networking', 'Project Management', 'Microsoft Excel', 'Microsoft Word'] },
  { label: 'Professional skills', items: ['Communication', 'Time Management', 'Adaptability', 'Problem Solving', 'Critical Thinking', 'Teamwork', 'Collaboration', 'Organizational Skills', 'Willingness to Learn'] },
];
function SectionLabel({ children }: { children: React.ReactNode }) { return <div className="eyebrow"><span className="eyebrow-dot" />{children}</div>; }
type GalleryImage = { src: string; alt: string };
type ActiveImage = { projectName: string; images: GalleryImage[]; index: number };

export default function Home() {
  const [activeImage, setActiveImage] = useState<ActiveImage | null>(null);
  const isLightboxOpen = activeImage !== null;

  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!activeImage) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveImage(null);
      if (event.key === 'ArrowRight') setActiveImage((current) => current ? { ...current, index: (current.index + 1) % current.images.length } : current);
      if (event.key === 'ArrowLeft') setActiveImage((current) => current ? { ...current, index: (current.index - 1 + current.images.length) % current.images.length } : current);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeImage]);

  useEffect(() => {
    if (!isLightboxOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isLightboxOpen]);

  const openProjectImage = (project: (typeof projects)[number], index: number) => {
    const images: GalleryImage[] = [{ src: project.image, alt: project.imageLabel }, ...project.gallery];
    setActiveImage({ projectName: project.name, images, index });
  };

  return <main className="site-shell" id="top">
    <header className="site-header"><a href="#top" className="brand" aria-label="Go to top">AJ<span className="brand-star">✳</span>G</a><nav aria-label="Main navigation"><a href="#about">About</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#education">Education</a><a href="#certifications">Certifications</a></nav><a className="header-contact" href="#contact">Let&apos;s connect <ArrowUpRight size={15}/></a></header>
    <div className="intro"><span className="intro-line"/><span>PORTFOLIO / SOFTWARE ENGINEERING</span><span className="intro-year">2026</span></div>
    <div className="bento">
      <section className="tile hero tile-wide reveal" aria-labelledby="hero-title"><div className="hero-top"><span className="pill"><span className="status-dot"/> OPEN TO LEARNING & COLLABORATION</span><Sparkles size={19} strokeWidth={1.2}/></div><div><p className="hero-kicker">HELLO, I&apos;M</p><h1 id="hero-title">Adrian Joseph<br/><span>DT. Gatchalian</span></h1><p className="hero-subtitle">{profile.title} <span className="sep">/</span> {profile.subtitle}</p></div><div className="hero-bottom"><a className="primary-action" href="#projects">Explore my work <ArrowDownRight size={18}/></a><span>Curious mind. Building skills.<br/>One project at a time.</span></div></section>
      <section className="tile portrait-tile reveal"><div className="photo-slot profile"><img className="profile-image" src="/images/profile.jpg" alt="Portrait of Adrian Joseph DT. Gatchalian" /></div><div className="portrait-footer"><span>THE PERSON BEHIND THE CODE</span><span>01 / 05</span></div></section>
      <section className="tile about-tile reveal" id="about"><SectionLabel>01 / ABOUT ME</SectionLabel><h2>Learning today.<br/><em>Building tomorrow.</em></h2><div className="about-copy">{paragraphs.map(p=><p key={p}>{p}</p>)}</div><div className="card-corner"><UserRound size={20}/></div></section>
      <section className="tile summary-tile reveal"><SectionLabel>AT A GLANCE</SectionLabel><div className="summary-content"><span className="big-number">03<span>rd</span></span><p>Year Computer Science<br/>student</p></div><div className="summary-bottom"><GraduationCap size={20}/><span>FEU Institute of Technology</span></div></section>
      <section className="tile section-heading-tile reveal" id="projects"><div><SectionLabel>02 / SELECTED WORK</SectionLabel><h2>Things I&apos;m<br/><em>working on.</em></h2></div><p>A collection of academic and practical projects where I turn ideas into working software.</p></section>
      {projects.map((project)=><article className="tile project-tile reveal" key={project.name}><div className="project-heading"><span className="project-index">PROJECT / {project.number}</span><a className="icon-link" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name} on GitHub`}><ArrowUpRight size={19}/></a></div><div className={`project-visual ${project.name === 'SmartScreen' ? 'smart-visual' : ''}`}><button type="button" className="project-image-button" onClick={() => openProjectImage(project, 0)} aria-label={`Enlarge ${project.name} main screenshot`}><img className="project-image" src={project.image} alt={project.imageLabel} /><span className="image-zoom-hint"><ZoomIn size={15}/> Enlarge preview</span></button><div className="project-gallery" aria-label={`${project.name} additional screenshots`}>{project.gallery.map((shot, index) => <button type="button" onClick={() => openProjectImage(project, index + 1)} key={shot.src} aria-label={`Enlarge ${shot.alt}`} title={`View ${shot.alt}`}><img src={shot.src} alt={shot.alt} loading="lazy" /></button>)}</div></div><div className="project-info"><p className="project-type">{project.type}</p><h3>{project.name}</h3><p>{project.description}</p><div className="tags">{project.stack.map(t=><span key={t}>{t}</span>)}</div><div className="project-actions"><a className="project-live" href={project.liveHref} target="_blank" rel="noopener noreferrer"><ExternalLink size={15}/> View Website</a><a className="project-repo" href={project.href} target="_blank" rel="noopener noreferrer"><Github size={16}/> View source <ExternalLink size={13}/></a></div></div></article>)}
      <section className="tile skills-tile tile-wide reveal" id="skills"><div className="skills-heading"><div><SectionLabel>03 / MY TOOLKIT</SectionLabel><h2>Skills & <em>strengths.</em></h2></div><p>Technologies I&apos;m learning and strengths I bring to every team.</p></div><div className="skill-groups">{skills.map(group=><div className="skill-group" key={group.label}><h3>{group.label}</h3><div className="tags">{group.items.map(item=><span key={item}>{item}</span>)}</div></div>)}</div></section>
      <section className="tile education-tile reveal" id="education"><SectionLabel>04 / EDUCATION</SectionLabel><div className="education-icon"><GraduationCap size={29} strokeWidth={1.3}/></div><p className="project-type">2027 · EXPECTED GRADUATION</p><h2>FEU Institute<br/>of Technology</h2><p>Bachelor of Science in Computer Science major in Software Engineering</p><div className="education-bottom"><span>3rd Year College</span><BookOpen size={18}/></div></section>
      <section className="tile certifications-tile tile-wide reveal" id="certifications"><div className="certifications-heading"><div><SectionLabel>05 / CERTIFICATIONS</SectionLabel><h2>Learning & <em>achievements.</em></h2></div><p>Credentials earned along my software engineering journey.</p></div><div className="certifications-grid">{certifications.map((cert, index) => <article className="certificate-card" key={cert.image}><button type="button" className="certificate-preview" onClick={() => setActiveImage({ projectName: 'Certifications', images: certifications.map(c => ({ src: c.image, alt: c.alt })), index })} aria-label={`Enlarge ${cert.title} certificate`}><img src={cert.image} alt={cert.alt} loading="lazy" /><span className="certificate-zoom"><ZoomIn size={15}/> View certificate</span></button><div className="certificate-info"><h3>{cert.title}</h3><p>{cert.issuer}</p><span>AWARDED · {cert.date}</span></div></article>)}</div></section>
      <section className="tile quote-tile reveal"><div className="quote-icon">✳</div><p>“Always learning.<br/>Always improving.<br/><em>Always building.</em>”</p><div className="quote-bottom">A WORK IN PROGRESS, BY DESIGN <ArrowUpRight size={17}/></div></section>
      <section className="tile contact-tile tile-wide reveal" id="contact"><div className="contact-top"><SectionLabel>06 / GET IN TOUCH</SectionLabel><span>HAVE SOMETHING IN MIND?</span></div><h2>Let&apos;s make<br/><em>something happen.</em></h2><p>I&apos;m open to learning opportunities, collaboration, and experiences that help me grow as a future software engineer.</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={22}/></a><div className="socials"><a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={14}/></a><a href={profile.academicProfile} target="_blank" rel="noopener noreferrer"><BriefcaseBusiness size={17}/> Academic profile <ArrowUpRight size={14}/></a><a href={profile.facebook} target="_blank" rel="noopener noreferrer"><Facebook size={17}/> Facebook <ArrowUpRight size={14}/></a></div></section>
    </div>
    <footer><span>© {new Date().getFullYear()} {profile.name}</span><span>DESIGNED WITH INTENTION · BUILT WITH CURIOSITY</span><a href="#top">BACK TO TOP ↑</a></footer>
    {activeImage ? <div className="lightbox-backdrop" onClick={() => setActiveImage(null)} role="presentation"><div className="lightbox-dialog" role="dialog" aria-modal="true" aria-label={`${activeImage.projectName} image preview`} onClick={(event) => event.stopPropagation()}><div className="lightbox-toolbar"><div><span className="lightbox-project">{activeImage.projectName.toUpperCase()}</span><span className="lightbox-counter">{activeImage.index + 1} / {activeImage.images.length}</span></div><button type="button" className="lightbox-close" onClick={() => setActiveImage(null)} aria-label="Close image preview"><X size={21}/></button></div><div className="lightbox-image-wrap"><button type="button" className="lightbox-nav lightbox-prev" onClick={() => setActiveImage({ ...activeImage, index: (activeImage.index - 1 + activeImage.images.length) % activeImage.images.length })} aria-label="Previous image"><ChevronLeft size={24}/></button><img className="lightbox-image" src={activeImage.images[activeImage.index].src} alt={activeImage.images[activeImage.index].alt}/><button type="button" className="lightbox-nav lightbox-next" onClick={() => setActiveImage({ ...activeImage, index: (activeImage.index + 1) % activeImage.images.length })} aria-label="Next image"><ChevronRight size={24}/></button></div><div className="lightbox-caption">{activeImage.images[activeImage.index].alt}<span>Click outside or press Esc to close</span></div></div></div> : null}
  </main>;
}
