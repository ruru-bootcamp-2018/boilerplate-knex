
exports.up = function(knex, Promise) {
    return knex.schema.createTable('profiles', (table) => {
        table.increments('id').primary()
        table.string('url')
        table.string('profile_pic')
        table.integer('user_id')
        table.string('favorite_cheese')
        table.string('relationship_status')
    })
  
};

exports.down = function(knex, Promise) {
    return knex.scheme.dropTable('profiles')
};
