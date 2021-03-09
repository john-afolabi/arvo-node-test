const express = require("express");
const userRoutes = require("../routes/user");
const clubRoutes = require("../routes/club");
const server = express();

server.use(express.json());

server.use("/api/user", userRoutes);
server.use("/api/club", clubRoutes);
server.get("/", (req, res) => {
	res.status(200).json("This API works correctly");
});

module.exports = server;
