import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Build to plain HTML/CSS/JS in `out/`, so the site can be hosted anywhere
  // (Vercel, Netlify, GitHub Pages) with no server.
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
