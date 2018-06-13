
exports.up = function (knex, Promise) {
    return knex.schema.createTable('profiles', (table) => {
        table.increments('user_id').primary()
        table.string('URL')
        table.string('profile_pic')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('profiles')
};
