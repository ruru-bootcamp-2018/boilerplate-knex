exports.up = (knex, Promise) => {
  return knex.schema.createTable('paths', (table) => {
    table.increments('id').primary()
    table.string('story')
    table.text('img')
    table.string('ch1')
    table.string('ch2')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('paths')
}
