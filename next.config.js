const nextTranslate = require("next-translate");

module.exports = {
  distDir: 'build',
  reactStrictMode: true,
  ...nextTranslate(),
};
