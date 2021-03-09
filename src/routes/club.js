const { Router } = require("express");
const { addClub, addUserClub } = require("../models/club");

const router = Router();

router.post("/", (req, res) => {
	const { name, invite_code, owner_id } = req.body;
	addClub({ name, invite_code, owner_id }).then((club) => {
		res.status(201).json(club);
	});
});

router.post("/add-user", (req, res) => {
	const { user_id, club_id } = req.body;
	addUserClub(user_id, club_id).then((data) => {
		res.status(201).json(data);
	});
});

module.exports = router;
