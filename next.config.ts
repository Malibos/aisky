import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/crna-gora/podgorica",
        destination: "/crna-gora/bar",
        permanent: true,
      },
      {
        source: "/crna-gora/podgorica/",
        destination: "/crna-gora/bar",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      { source: "/sitemap", destination: "/sitemap.xml" },
    ];
  },
};

export default nextConfig;
