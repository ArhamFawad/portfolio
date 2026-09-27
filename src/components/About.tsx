import { GraduationCap } from 'lucide-react';

import { education, profile } from '@/data/profile';
import { SectionHeading } from './SectionHeading';

export function About() {
  return (
    <section aria-labelledby="about-title" id="about" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionHeading id="about-title" eyebrow="03 · About" title="A bit about me" />
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          {profile.about.map((paragraph) => (
            <p key={paragraph} className="text-pretty">
              {paragraph}
            </p>
          ))}
        </div>

        <div>
          <h3 className="flex items-center gap-2 text-sm font-semibold">
            <GraduationCap className="size-4 text-accent" aria-hidden="true" /> Education
          </h3>
          <ol className="mt-5 space-y-6 border-l border-line pl-6">
            {education.map((item) => (
              <li key={item.degree} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[29px] top-1.5 size-2.5 rounded-full border-2 border-accent bg-bg"
                />
                <p className="font-mono text-xs text-muted">{item.years}</p>
                <p className="mt-1 font-semibold">{item.degree}</p>
                <p className="text-sm text-muted">{item.school}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
