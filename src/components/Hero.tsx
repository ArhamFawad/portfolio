import { ArrowDown, Download, Mail, MapPin } from 'lucide-react';

import { profile } from '@/data/profile';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';

export function Hero() {
  const { headline, headlineHighlight: highlight } = profile;
  const index = highlight ? headline.indexOf(highlight) : -1;
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      {/* Dotted background that fades out towards the bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:radial-gradient(var(--line)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />
      <div className="relative mx-auto max-w-5xl px-4 pb-8 pt-16 sm:px-6 sm:pb-12 sm:pt-24">
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-xs font-medium text-muted sm:text-sm">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          {profile.status}
        </p>

        <p className="mt-8 font-mono text-sm text-accent">Hi, I&apos;m {profile.name}.</p>
        <h1 id="hero-title" className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-6xl">
          {index === -1 ? (
            headline
          ) : (
            <>
              {headline.slice(0, index)}
              <span className="text-accent">{highlight}</span>
              {headline.slice(index + highlight.length)}
            </>
          )}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted text-pretty">{profile.intro}</p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-fg transition-colors hover:bg-accent-strong"
          >
            See my work <ArrowDown className="size-4" aria-hidden="true" />
          </a>
          <a
            href={profile.cv}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-5 py-3 text-sm font-semibold transition-colors hover:bg-subtle"
          >
            <Download className="size-4" aria-hidden="true" /> Download CV
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
          <li>
            <a href={profile.github} className="inline-flex items-center gap-2 transition-colors hover:text-fg">
              <GitHubIcon className="size-4" /> GitHub
            </a>
          </li>
          {profile.linkedin ? (
            <li>
              <a href={profile.linkedin} className="inline-flex items-center gap-2 transition-colors hover:text-fg">
                <LinkedInIcon className="size-4" /> LinkedIn
              </a>
            </li>
          ) : null}
          <li>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-fg">
              <Mail className="size-4" aria-hidden="true" /> {profile.email}
            </a>
          </li>
          <li className="inline-flex items-center gap-2">
            <MapPin className="size-4" aria-hidden="true" /> {profile.location}
          </li>
        </ul>
      </div>
    </section>
  );
}
