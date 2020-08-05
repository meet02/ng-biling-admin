//Install express server
const express = require("express");
const path = require("path");

const app = express();

conole.log("listing")
// app.use(express.static("dist"));
// Serve only the static files form the dist directory

app.use(express.static(path.join(__dirname,"dist")));

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname + "/dist/index.html"));
// });

// Start the app by listening on the default Heroku port

        
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

app.listen(process.env.PORT || 8080);

conole.log("listing")
