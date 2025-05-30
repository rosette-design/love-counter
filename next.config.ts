/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Set the base path for GitHub Pages (your-username/your-repo-name)
  // Comment this out for local development
  // basePath: '/love-counter',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
