/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{ source: "/evah-consultora", destination: "/consultoria", permanent: true }];
  },
};

export default nextConfig;
