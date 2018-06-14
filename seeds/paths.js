exports.seed = function (knex, Promise) {
  return knex('paths').del()
    .then(function () {
      return knex('paths').insert([
        {id: 01, story: 'this is a story', img: '', ch1: 'left', ch2: 'right'},
        {id: 02, story: 'this is a game', img: '', ch1: 'left', ch2: 'right'},
        {id: 03, story: 'this is a movie', img: '', ch1: 'left', ch2: 'right'},
        {id: 04, story: 'this is a song', img: '', ch1: 'left', ch2: 'right'},
        {id: 05, story: 'this is a banger', img: '', ch1: 'left', ch2: 'right'},
      ])
    })
}
