/**
 * All of the site's content lives in this file.
 * Update it here and every section of the page updates with it.
 */

export const profile = {
  name: 'Arham Fawad',
  role: 'Front-end & React Native Developer',
  location: 'Karachi, Pakistan',
  email: 'arhamfawad6@gmail.com',
  github: 'https://github.com/ArhamFawad',
  /** Add your LinkedIn URL here and a LinkedIn link appears in the header and contact section. */
  linkedin: '',
  cv: '/Arham_Fawad_CV.pdf',
  /** Your deployed URL. Used for SEO tags and link previews. */
  siteUrl: 'https://arhamfawad.vercel.app',
  status: 'Final-year CS student · Open to internships',
  headline: 'I build websites and mobile apps for real businesses.',
  /** The part of the headline shown in the accent colour. */
  headlineHighlight: 'real businesses',
  intro:
    "I've built a 45-page finance website with nine calculators, a React site for a solar company, and IOU Book, an English/Urdu app that helps shopkeepers track credit.",
  about: [
    "I'm a final-year Computer Science student at Sir Syed University of Engineering and Technology in Karachi, graduating in 2027.",
    'I like front-end work because it is where code meets the people using it: a calculator that gives the right answer, a form that explains what went wrong, an app that works in the language its users think in.',
    "Right now I'm going deeper into TypeScript, testing and accessibility, and I'm looking for an internship where I can ship real features with a team.",
  ],
};

export type ProjectLink = { label: string; href: string; kind: 'live' | 'code' | 'download' };

export interface Project {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  highlights: string[];
  stack: string[];
  links: ProjectLink[];
  /** Phone screenshots (featured app) or one browser screenshot (websites). */
  images: { src: string; alt: string }[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'iou-book',
    featured: true,
    title: 'IOU Book',
    kicker: 'Mobile app · React Native',
    summary:
      'Small shops in Pakistan still track credit ("udhaar") in paper notebooks. IOU Book replaces the notebook with an app that does the maths, shows who owes what, and sends a polite WhatsApp reminder.',
    highlights: [
      'Records credit and payments with a running balance, like a paper register',
      'Search and sort customers by name, phone number, amount due or recent activity',
      'One-tap WhatsApp reminders; Pakistani numbers are formatted automatically',
      'Switch between English and Urdu, with right-to-left layouts',
      'Works fully offline: data is saved on the phone',
      '38 unit tests on the ledger logic, run on every push with GitHub Actions',
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'Expo Router', 'AsyncStorage', 'Jest'],
    links: [
      { label: 'Source code', href: 'https://github.com/ArhamFawad/loan-app', kind: 'code' },
      // After running an EAS build, add: { label: 'Download APK', href: 'https://expo.dev/...', kind: 'download' },
    ],
    images: [
      { src: '/projects/iou-book-home.webp', alt: 'IOU Book home screen showing Rs 8,370 to collect from 3 customers' },
      { src: '/projects/iou-book-customer.webp', alt: "A customer's ledger with a WhatsApp reminder button and running balances" },
      { src: '/projects/iou-book-urdu.webp', alt: 'The home screen in Urdu with a right-to-left layout' },
    ],
  },
  {
    slug: 'mac-international',
    title: 'Mac International',
    kicker: 'Finance website · Live',
    summary:
      'A multi-page website for an Australian finance and real-estate brokerage, with loan comparison pages, service enquiry forms and a set of financial calculators.',
    highlights: [
      '45 pages covering loans, services and resources',
      '9 calculators, including borrowing power, loan repayments, stamp duty and rent vs buy',
      'Responsive layout, deployed on Firebase Hosting',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'Firebase'],
    links: [
      { label: 'Live site', href: 'https://mac-international.web.app', kind: 'live' },
      { label: 'Source code', href: 'https://github.com/ArhamFawad/Mac-International', kind: 'code' },
    ],
    images: [{ src: '/projects/mac-international.webp', alt: 'Mac International home page hero' }],
  },
  {
    slug: 'solar-vision',
    title: 'Solar Vision',
    kicker: 'Company website · React',
    summary:
      'A marketing site for a Karachi solar-energy company that presents its services and products, and turns visitors into enquiries with a quote form and WhatsApp chat.',
    highlights: [
      'Home, Products, About and Contact pages with client-side routing',
      'Scroll-reveal animations and a dark, energy-themed design',
      'Built from reusable, accessible shadcn/ui components',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
    links: [{ label: 'Source code', href: 'https://github.com/ArhamFawad/solar-vision-shine', kind: 'code' }],
    images: [{ src: '/projects/solar-vision.webp', alt: 'Solar Vision home page with the headline "Powering Tomorrow with Clean Solar Energy"' }],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['JavaScript', 'TypeScript', 'HTML', 'CSS'] },
  { group: 'Frameworks', items: ['React', 'React Native', 'Expo', 'Next.js', 'Tailwind CSS', 'Bootstrap'] },
  { group: 'Tools', items: ['Git & GitHub', 'GitHub Actions', 'Jest', 'Firebase Hosting', 'Vercel', 'WordPress'] },
  { group: 'Focus areas', items: ['Responsive design', 'Accessibility', 'Offline-first apps', 'Unit testing', 'Cross-browser compatibility'] },
];

export const education: { degree: string; school: string; years: string }[] = [
  { degree: 'BS Computer Science', school: 'Sir Syed University of Engineering and Technology, Karachi', years: '2023 – 2027' },
  { degree: 'Intermediate', school: 'Punjab Group of Colleges, Islamabad', years: '2021 – 2023' },
  { degree: 'Matriculation, Computer Science', school: 'Army Public School, COD Karachi', years: '2019 – 2021' },
];
