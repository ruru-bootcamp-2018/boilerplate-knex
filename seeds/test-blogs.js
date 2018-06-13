
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blogs').del()
    .then(function () {
      // Inserts seed entries
      return knex('blogs').insert([
        {post_id:1 ,title: "Aardvark's Blog", content: "I am an Aardvark and I like roses.", user_id:99901 },
        {post_id:2 ,title: "Baboon's Blog", content:"I am a Baboon and I like Lilies.", user_id:99902 },
        {post_id:3 ,title: "Capybara's Blog", content: "I am a Capybara and I like chocolate.", user_id:99903 }
      ]);
    });
};
