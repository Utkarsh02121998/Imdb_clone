const express = require("express");
const app = express();

// Require router files
const usersRoutes = require("./api/users");
const likeRoutes = require("./api/like");
const reviewRoutes = require("./api/review");
const watchLinkRoutes = require("./api/watchlink");


// Include the routes to express
app.use("/users", usersRoutes);
app.use("/liked", likeRoutes);
app.use("/review", reviewRoutes);
app.use("/watch", watchLinkRoutes);


module.exports = app;
