const dotenv = require("dotenv");
dotenv.config();

const env = {
	port: process.env.PORT,
	dbUrl: process.env.DATABASE_URL,
};

module.exports = env;
