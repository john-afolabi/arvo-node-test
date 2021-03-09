exports.up = function (knex) {
	return knex.schema.createTable("clubs", (table) => {
		table.increments();
		table.string("name").unique();
		table
			.integer("owner_id")
			.unique()
			.unsigned()
			.notNullable()
			.references("id")
			.inTable("users")
			.onUpdate("CASCADE")
			.onDelete("CASCADE");
		table.integer("invite_code").unique();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists("clubs");
};
