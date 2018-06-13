
exports.up = function(knex, Promise) {
    return knex.schema.createTable('blogs', (table) => {
        table.increments('id').primary()
        table.integer('user_id')
        table.string('body')
        table.string('title')
    })
};

exports.down = function(knex, Promise) {
    return knex.scheme.dropTable('blogs')
};
