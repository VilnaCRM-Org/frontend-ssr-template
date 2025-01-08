const TerserPlugin = require('terser-webpack-plugin')
const LocalizationGenerator = require('./scripts/localizationGenerator');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  /*swcMinify: true,*/
  images: {
    unoptimized: true,
  },
  experimental: {
    serverComponents: true,  
  },
  webpack: (config) => {
    const localizationGenerator = new LocalizationGenerator();
    localizationGenerator.generateLocalizationFile();

    const isServer = typeof window === 'undefined';
    if (!isServer) {
      config.optimization.minimizer.push(
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true, 
            },
          },
        })
      );
    }
    return config;
  },
};

module.exports = nextConfig;
