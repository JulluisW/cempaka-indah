const withWorkbox = require("next-with-workbox");

const nextConfig = {
  reactStrictMode: true,
  // ... other Next.js configurations

  // Workbox configuration
  workboxOpts: {
    mode: "production", // Change to 'development' for development builds
    runtimeCaching: [
      {
        urlPattern: new RegExp("^/_next/static/"), // Cache Next.js static assets
        handler: "CacheFirst",
        options: {
          cacheName: "next-static",
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 7 * 24 * 60 * 60, // 1 week
          },
        },
      },
      // Add other caching rules for your specific needs
    ],
  },
};

module.exports = withWorkbox(nextConfig);
