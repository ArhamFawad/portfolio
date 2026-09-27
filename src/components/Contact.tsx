import { Mail } from 'lucide-react';

import { profile } from '@/data/profile';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import { CopyEmail } from './CopyEmail';

export function Contact() {
  return (
    <section aria-labelledby="contact-title" id="contact" className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 sm:pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-fg px-6 py-14 text-center text-bg sm:px-12 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-accent opacity-25 blur-3xl"
        />
        <p className="relative font-mono text-sm opacity-70">04 · Contact</p>
        <h2 id="contact-title" className="relative mx-auto mt-3 max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Have an internship or a project in mind?
        </h2>
        <p className="relative mx-auto mt-4 max-w-lg opacity-75">
          Email is the fastest way to reach me. I&apos;d love to hear about what you&apos;re building.
        </p>
        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3 text-fg">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-fg transition-colors hover:bg-accent-strong"
          >
            <Mail className="size-4" aria-hidden="true" /> Email me
          </a>
          <CopyEmail email={profile.email} />
        </div>
        <div className="relative mt-8 flex items-center justify-center gap-5 text-sm opacity-80">
          <a href={profile.github} className="inline-flex items-center gap-2 hover:underline">
            <GitHubIcon className="size-4" /> GitHub
          </a>
          {profile.linkedin ? (
            <a href={profile.linkedin} className="inline-flex items-center gap-2 hover:underline">
              <LinkedInIcon className="size-4" /> LinkedIn
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
