const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");
const Image = require('@11ty/eleventy-img');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/assets/css");
    eleventyConfig.addPassthroughCopy("src/assets/js");
    eleventyConfig.addPassthroughCopy("src/assets/img");
    eleventyConfig.addPassthroughCopy("src/assets/fonts");
    eleventyConfig.addPassthroughCopy("src/admin");
    eleventyConfig.addWatchTarget("src/assets/sass");

    eleventyConfig.addPlugin(eleventyPluginFilesMinifier);
    eleventyConfig.addPlugin(syntaxHighlight);

        // Date
        eleventyConfig.addFilter('dateDisplay', require('./src/filters/date-display.js'));
        eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    
        // Collections blog
        eleventyConfig.addCollection('posts', function(collectionApi) {
        return collectionApi.getFilteredByGlob('src/blog/**/*.md').reverse();
        });
    
        // Collections portfolio
        eleventyConfig.addCollection('works', function(collectionApi) {
        return collectionApi.getFilteredByGlob('src/realizacje/**/*.md').reverse();
        });

        // Collections services
        eleventyConfig.addCollection('services', function(collectionApi) {
        return collectionApi.getFilteredByGlob('src/uslugi/**/*.md').reverse();
        });

    eleventyConfig.addNunjucksAsyncShortcode('Image', async (src, alt) => {
        if (!alt) {
          throw new Error(`Missing \`alt\` on myImage from: ${src}`);
        }
    
        let stats = await Image(src, {
          widths: [25, 320, 640, 960, 1200, 1800, 2400],
          formats: ['jpeg', 'webp'],
          urlPath: '/assets/img/',
          outputDir: './public/assets/img/',
        });
    
        let lowestSrc = stats['jpeg'][0];
    
        const srcset = Object.keys(stats).reduce(
          (acc, format) => ({
            ...acc,
            [format]: stats[format].reduce(
              (_acc, curr) => `${_acc} ${curr.srcset} ,`,
              '',
            ),
          }),
          {},
        );
    
        const source = `<source type="image/webp" srcset="${srcset['webp']}" >`;
    
        const img = `<img
          loading="lazy"
          alt="${alt}"
          src="${lowestSrc.url}"
          sizes='(min-width: 1024px) 1024px, 100vw'
          srcset="${srcset['jpeg']}"
          width="${lowestSrc.width}"
          height="${lowestSrc.height}">`;
    
        return `<div class="image-wrapper"><picture> ${source} ${img} </picture></div>`;
      });

    // Return your Object options:
    return {
      dir: {
        input: "src",
        output: "public",
        includes: "includes"
      }
    }
  };