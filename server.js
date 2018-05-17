var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
var jsonParser = bodyParser.json();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// ============================================



// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "app/public/home.html"));
// });

//  app.get("/survey", function(req, res) {	
//        res.sendFile(path.join(__dirname, "app/public/survey.html"));	
//   });  


app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});