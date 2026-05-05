// Netlify build script — maakt _redirects alleen aan voor de manonkeeman-site.
// Op de manonit-site wordt geen redirect aangemaakt (voorkomt oneindige loop).
const { writeFileSync } = require("fs");
const siteUrl = process.env.URL || "";

if (siteUrl.includes("manonkeeman")) {
  writeFileSync("public/_redirects", "/* https://manonit.com/:splat 301!\n");
  console.log("Redirect aangemaakt: manonkeeman.com → manonit.com");
} else {
  console.log("manonit-site: geen redirect nodig.");
}