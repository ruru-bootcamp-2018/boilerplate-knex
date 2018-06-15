exports.up = (knex, Promise) => {
  return knex.schema.table('paths', function (table) {
    table.integer('ch1id'),
    table.string('ch1text'),
    table.integer('ch2id'),
    table.string('ch2text')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropColumn('paths')
}
