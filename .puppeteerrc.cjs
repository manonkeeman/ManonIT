// Chrome voor het prerenderen komt in node_modules, zodat Netlify hem samen met
// node_modules cachet en hij niet bij elke build opnieuw gedownload hoeft te worden.
const { join } = require("path");

module.exports = {
    cacheDirectory: join(__dirname, "node_modules", ".cache", "puppeteer"),
};
