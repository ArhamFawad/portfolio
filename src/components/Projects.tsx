import { Check } from 'lucide-react';
import Image from 'next/image';

import { projects, type Project } from '@/data/profile';
import { ProjectLinks, StackTags } from './ProjectLinks';
import { SectionHeading } from './SectionHeading';

function PhoneFrame({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-[1.6rem] border-[5px] border-[#15181b] bg-[#15181b] shadow-xl shadow-black/15 ${className}`}>
      <Image src={src} alt={alt} width={400} height={866} className="h-auto w-full rounded-[1.2rem]" />
    </div>
  );
}

function BrowserFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-card shadow-sm">
      <div className="flex items-center gap-1.5 border-b border-line bg-subtle px-3 py-2" aria-hidden="true">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
      </div>
      <Image src={src} alt={alt} width={1280} height={800} className="h-auto w-full" sizes="(min-width: 768px) 480px, 100vw" />
    </div>
  );
}

function Highlights({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed">
          <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  const [first, second, third] = project.images;
  return (
    <article
      aria-labelledby={`${project.slug}-title`}
      className="grid gap-10 overflow-hidden rounded-3xl border border-line bg-card p-6 sm:p-10 lg:grid-cols-[1.05fr_1fr] lg:items-center"
    >
      <div className="space-y-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-muted">
            Featured · {project.kicker}
          </p>
          <h3 id={`${project.slug}-title`} className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            {project.title}
          </h3>
        </div>
        <p className="leading-relaxed text-muted">{project.summary}</p>
        <Highlights items={project.highlights} />
        <StackTags stack={project.stack} />
        <ProjectLinks links={project.links} projectTitle={project.title} />
      </div>

      {/* Three phones, cropped by the panel's bottom edge; the middle one sits higher */}
      <div className="relative mx-auto aspect-[16/10] w-full max-w-lg overflow-hidden rounded-2xl bg-accent-soft">
        <div className="absolute inset-x-0 top-[9%] flex items-start justify-center gap-[3%] px-[5%]">
          {second ? <PhoneFrame {...second} className="mt-[9%] w-[30%]" /> : null}
          {first ? <PhoneFrame {...first} className="w-[34%]" /> : null}
          {third ? <PhoneFrame {...third} className="mt-[9%] w-[30%]" /> : null}
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const image = project.images[0];
  return (
    <article aria-labelledby={`${project.slug}-title`} className="flex flex-col gap-5 rounded-3xl border border-line bg-card p-5 sm:p-6">
      {image ? <BrowserFrame {...image} /> : null}
      <div className="flex flex-1 flex-col gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-muted">{project.kicker}</p>
          <h3 id={`${project.slug}-title`} className="mt-1.5 text-xl font-semibold tracking-tight">
            {project.title}
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-muted">{project.summary}</p>
        <Highlights items={project.highlights} />
        <div className="mt-auto space-y-4 pt-2">
          <StackTags stack={project.stack} />
          <ProjectLinks links={project.links} projectTitle={project.title} />
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section aria-labelledby="work-title" id="work" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionHeading id="work-title" eyebrow="01 · Work" title="Selected projects">
        A mobile app I designed and built end to end, and two websites made for real businesses.
      </SectionHeading>

      <div className="space-y-6">
        {featured.map((project) => (
          <FeaturedProject key={project.slug} project={project} />
        ))}
        <div className="grid gap-6 md:grid-cols-2">
          {others.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
