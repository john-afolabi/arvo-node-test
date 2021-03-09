const db = require("../data/dbConfig");

const addClub = async (club) => {
	const newClub = await db("clubs")
		.insert(club)
		.returning("*")
		.then((data) => data[0]);
	return newClub;
};

const addUserClub = async (uid, cid) => {
	await db("users_clubs").insert({
		user_id: uid,
		club_id: cid,
	});
	return "Success";
};

const getUserClubs = async (uid) => {
	const clubs = await db("users_clubs")
		.join("clubs", "clubs.id", "users_clubs.club_id")
		.select("clubs.name", "clubs.invite_code")
		.where({ "users_clubs.user_id": uid });

	return clubs;
};

module.exports = {
	addClub,
	getUserClubs,
	addUserClub,
};
