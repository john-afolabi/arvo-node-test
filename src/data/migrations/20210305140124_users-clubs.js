exports.up = function (knex) {
	return knex.schema.createTable("users_clubs", (table) => {
		table.increments();
		table
			.integer("user_id")
			.unsigned()
			.notNullable()
			.references("id")
			.inTable("users")
			.onUpdate("CASCADE")
			.onDelete("CASCADE");
		table
			.integer("club_id")
			.unsigned()
			.notNullable()
			.references("id")
			.inTable("clubs")
			.onUpdate("CASCADE")
			.onDelete("CASCADE");
		table.timestamp("joined_at").defaultTo(knex.fn.now());
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists("users_clubs");
};
