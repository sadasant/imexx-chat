// Environment variables
var ENV  = process.env.ENV;  // development, production
var PORT = process.env.PORT;

// Dependencies
var http    = require("http");
var express = require("express");

var exp    = express();
var server = http.createServer(exp);

// Our main master object
// We'll store shared information here.
var Chat           = {};
Chat.settings      = {};
Chat.settings.env  = ENV;
Chat.settings.port = PORT || "localhost:8888";
Chat.exp           = exp;

// Modules
require("./utils")(Chat);
require("./config")(Chat);
require("./models")(Chat);
require("./routes")(Chat);

Chat.connection = server.listen(Chat.settings.port, function(){
    Chat.utils.log("server running at http://127.0.0.1:" + port + "/");
});
