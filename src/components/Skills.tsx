import { skills } from '@/data/profile';
import { SectionHeading } from './SectionHeading';

export function Skills() {
  return (
    <section aria-labelledby="skills-title" className="border-y border-line bg-subtle/60">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading id="skills-title" eyebrow="02 · Skills" title="What I work with">
          Tools I&apos;ve used on real projects, including the ones above.
        </SectionHeading>
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.group} className="rounded-2xl border border-line bg-card p-5">
              <h3 className="text-sm font-semibold">{group.group}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-full border border-line px-3 py-1 text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
