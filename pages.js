const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = "http://shafaghrastegari.github.io/my-personal-website";

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
