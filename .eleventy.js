module.exports = function(eleventyConfig) {

  // copy everything as-is (images, css, js, etc)
  eleventyConfig.addPassthroughCopy("src");

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
