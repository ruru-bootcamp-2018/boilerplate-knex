
exports.up = function(knex, Promise) {
return knex.schema.createTable('blogs', (table) => {
    table.increments('post_id').primary()
    table.string('title')
    table.string('content')
    table.integer('user_id')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('blogs')
};
