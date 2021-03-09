const { Router } = require("express");
const { addUser } = require("../models/user");
const { getUserClubs } = require("../models/club");

const router = Router();

router.post("/", (req, res) => {
	const { username, password } = req.body;

	addUser({ username, password }).then((user) => {
		res.status(201).json(user);
	});
});

router.get("/clubs/:id", (req, res) => {
	const uid = req.params.id;

	getUserClubs(uid).then((data) => {
		res.status(200).json(data);
	});
});

module.exports = router;
