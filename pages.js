const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = "http://shafaghrastegari.github.io/ShafaghRastegari.github.io";

ghpages.publish(
  pathname,
  {
    branch: "master",
    repo: repoURL,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);
