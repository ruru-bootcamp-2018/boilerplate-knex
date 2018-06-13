
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {user_id: 99901, URL: 'www.google.com', profile_pic:'https://comps.canstockphoto.com/aardvark-flower-eps-vectors_csp4141823.jpg'},
        {user_id: 99902, URL: 'www.google.com', profile_pic:'https://comps.canstockphoto.com/cartoon-baboon-tie-vector-clip-art_csp23453117.jpg'},
        {user_id: 99903, URL: 'www.google.com', profile_pic:'https://media.istockphoto.com/vectors/capybara-vector-id156798892'}
      ]);
    });
};
