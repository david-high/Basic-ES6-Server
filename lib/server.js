"use strict";

require("babel-polyfill");

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _http = require("http");

var _http2 = _interopRequireDefault(_http);

var _serveFavicon = require("serve-favicon");

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = require("cookie-parser");

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mainRoutes = require("./routes/main.routes.js");

var _mainRoutes2 = _interopRequireDefault(_mainRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// constants
var app = (0, _express2.default)();

// import source files
// import node modules


app.use((0, _morgan2.default)("short"));

// routes
app.use('/', _mainRoutes2.default);

// 404 error handler
app.use(function (req, res) {
    res.status(404);
    res.send("404 Error: File not found!");
});

// create server
var server = app.listen(3000, function () {
    var _server$address = server.address();

    var address = _server$address.address;
    var port = _server$address.port;


    console.log("Server is running at http://" + address + ":" + port);
});