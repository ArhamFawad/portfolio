import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { profile } from '@/data/profile';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>
            Built with Next.js and Tailwind CSS ·{' '}
            <a href={`${profile.github}/portfolio`} className="underline-offset-4 hover:text-fg hover:underline">
              View source
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
