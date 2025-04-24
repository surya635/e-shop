module.exports = {
  images: {
    // Allow images from any domain
    // This is not recommended for production, but useful for development
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};