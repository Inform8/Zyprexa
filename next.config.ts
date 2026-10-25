import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      { source: "/schizophrenia", destination: "/disease-background#schizophrenia", permanent: false },
      { source: "/bipolar-disorder", destination: "/disease-background#bipolar", permanent: false },
      { source: "/safety-prescribing", destination: "/safety-monitoring", permanent: false },
    ];
  },
};

export default nextConfig;
