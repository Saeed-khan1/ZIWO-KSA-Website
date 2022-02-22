const nextTranslate = require("next-translate");

module.exports = {
  experimental: {
    outputStandalone: true,
  },
  reactStrictMode: true,
  ...nextTranslate(),
};

//   distDir: 'build',
