//Install express server
const express = require("express");
const path = require("path");

const app = express();

conole.log("listing")
// app.use(express.static("dist"));
// Serve only the static files form the dist directory

app.use(express.static(__dirname + "/dist));

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname + "/dist/index.html"));
// });

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
        
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

conole.log("listing")
