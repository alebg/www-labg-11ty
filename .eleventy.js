// .eleventy.js
const { format } = require('date-fns');

module.exports = function(eleventyConfig) {
  // Add passthrough copy for static assets
  eleventyConfig.addPassthroughCopy("assets");

  // Add a filter to access navigation data in templates
  eleventyConfig.addFilter("navigation", function(lang) {
    return require("./_data/navigation.json")[lang];
  });

  // Add a filter to access footer data in templates
  eleventyConfig.addFilter("footer", function(lang) {
    return require("./_data/footer.json")[lang];
  });

  // Set up custom collections if needed
  eleventyConfig.addCollection("post", function(collectionApi) {
    return collectionApi.getFilteredByTag("post");
  });

  eleventyConfig.addNunjucksFilter('date', function(date, dateFormat) {
    return format(date, dateFormat);
  });



  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "layouts",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["html", "njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
