const db = require("../data/dbConfig");

const addUser = async (user) => {
	const newUser = await db("users")
		.insert(user)
		.returning("*")
		.then((data) => data[0]);
	return newUser;
};

module.exports = {
	addUser,
};
