// .eleventy.js
const { format } = require('date-fns');
const md = require("markdown-it")();
const mathjax3 = require("markdown-it-mathjax3");

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
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByTag("posts");
  });
  
  // Add a filter to format dates using date-fns
  eleventyConfig.addNunjucksFilter('date', function(date, dateFormat) {
    return format(date, dateFormat);
  });

  // Configure Markdown-It with MathJax, for LaTeX support
  md.use(mathjax3, { html: true, linkify: true, typographer: true });

  // Add Markdown-It as a filter
  eleventyConfig.addFilter("latex", (content) => {
    return md.render(content);
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
