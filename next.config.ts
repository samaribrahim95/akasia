import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  basePath: 'ttps://github.com/samaribrahim95/akasia'
};

export default withNextIntl(nextConfig);
