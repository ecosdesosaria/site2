export default function(eleventyConfig) {

  // copy static files (images, icons, etc)
  //eleventyConfig.addPassthroughCopy("src");

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/favicon-32x32.png");
  eleventyConfig.addPassthroughCopy("src/favicon-16x16.png");
  eleventyConfig.addPassthroughCopy("src/apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("src/site.webmanifest");
  eleventyConfig.addPassthroughCopy("src/logo_ecosdesosaria.png");
  eleventyConfig.addPassthroughCopy("src/races");
  eleventyConfig.addPassthroughCopy("src/destinos");

  eleventyConfig.addFilter("readableDate", date => {
    return new Date(date).toLocaleDateString("pt-BR", {
      timeZone: "UTC"
    });
  });


  // truncate filter (preview text)
  eleventyConfig.addFilter("truncate", (str, len, end) => {
    if (!str) return "";
    if (str.length <= len) return str;
    return str.substring(0, len) + end;
  });

  // date format
  //eleventyConfig.addFilter("readableDate", date => {
  //  return new Date(date).toLocaleDateString("pt-BR");
  //});

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
}
