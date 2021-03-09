// Update with your config settings.
const env = require("./src/config/env");

module.exports = {
	development: {
		client: "pg",
		useNullAsDefault: true,
		connection: env.dbUrl,
		migrations: {
			directory: "./src/data/migrations",
		},
		seeds: {
			directory: "./src/data/seeds",
		},
		pool: {
			min: 2,
			max: 10,
		},
		useNullAsDefault: true,
	},
};
