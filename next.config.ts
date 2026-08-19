import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // pdfkit reads font files off disk at runtime (Helvetica.afm etc.) — keep
  // it out of the server bundle so those paths resolve correctly.
  serverExternalPackages: ["pdfkit"],
};

export default nextConfig;
