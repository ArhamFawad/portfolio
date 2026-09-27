import { ArrowUpRight, Download } from 'lucide-react';

import type { ProjectLink } from '@/data/profile';
import { GitHubIcon } from './BrandIcons';

export function ProjectLinks({ links, projectTitle }: { links: ProjectLink[]; projectTitle: string }) {
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link, i) => {
        const primary = i === 0;
        const Icon = link.kind === 'code' ? GitHubIcon : link.kind === 'download' ? Download : ArrowUpRight;
        return (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${link.label}: ${projectTitle} (opens in a new tab)`}
            className={
              primary
                ? 'inline-flex items-center gap-2 rounded-full bg-fg px-4 py-2 text-sm font-semibold text-bg transition-opacity hover:opacity-85'
                : 'inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-semibold transition-colors hover:bg-subtle'
            }
          >
            <Icon className="size-4" aria-hidden="true" />
            {link.label}
          </a>
        );
      })}
    </div>
  );
}

export function StackTags({ stack }: { stack: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
      {stack.map((tech) => (
        <li key={tech} className="rounded-md border border-line bg-subtle px-2 py-0.5 font-mono text-xs text-muted">
          {tech}
        </li>
      ))}
    </ul>
  );
}
