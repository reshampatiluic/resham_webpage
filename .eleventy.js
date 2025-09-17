const now = String(Date.now());

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./styles/tailwind.config.js');
  eleventyConfig.addWatchTarget('./styles/tailwind.css');

  // Copy the entire photos folder to _site/photos
  eleventyConfig.addPassthroughCopy('photos');

  // (optional) these only if you actually use them
  eleventyConfig.addPassthroughCopy({ 'circle.svg': 'circle.svg' });

  eleventyConfig.addShortcode('version', () => now);

  return { dir: { input: '.', output: '_site' },
  pathPrefix: "/resham_webpage/"
 };
};
