// import node modules
import "babel-polyfill";
import express from "express";
import path from "path";
import http from "http";
import favicon from "serve-favicon";
import logger from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";



// import source files
import routes from "./routes/main.routes.js";

// constants
const app = express();

app.use(logger("short"));

// routes
app.use('/', routes);

// 404 error handler
app.use((req, res) => {
    res.status(404);
    res.send("404 Error: File not found!"); 
});


// create server
const server = app.listen(3000, () => {

    const {address, port} = server.address();

    console.log(`Server is running at http://${address}:${port}`);
});





