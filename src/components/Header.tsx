import { profile } from '@/data/profile';
import { ThemeToggle } from './ThemeToggle';

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight" aria-label={`${profile.name}, back to top`}>
          <span className="grid size-8 place-items-center rounded-lg bg-accent text-sm font-bold text-accent-fg">AF</span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <nav aria-label="Main" className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-2 py-1.5 text-sm text-muted transition-colors hover:text-fg sm:px-3"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.cv}
            className="ml-1 hidden rounded-full border border-line px-3.5 py-1.5 text-sm font-medium transition-colors hover:bg-subtle sm:inline-block"
          >
            CV
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
