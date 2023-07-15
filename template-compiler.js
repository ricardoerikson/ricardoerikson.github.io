const replace = require("replace-in-file");

const options_analytics = {
  files: "dist/index.html",
  from: "<!-- __GOOGLE_ANALYTICS__ -->",
  to: process.env.GOOGLE_ANALYTICS,
};

const results_analytics = replace.sync(options_analytics);
console.log("Files compiled for analytics:", results_analytics);

const options_version = {
  files: "dist/assets/version.json",
  from: "__RELEASE_DATE__",
  to: Date.now(),
};

const results_version = replace.sync(options_version);
console.log("Files compiled for version :", results_version);
