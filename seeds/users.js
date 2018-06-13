exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {user_id: 99901, name: 'Ambitious Aardvark', email: 'aardvark@example.org'},
        {user_id: 99902, name: 'Bamboozled Baboon', email: 'baboon@example.org'},
        {user_id: 99903, name: 'Curious Capybara', email: 'capybara@example.org'},
        {user_id: 99904, name: 'Dilapidated Duck', email: 'duck@example.org'},
        {user_id: 99905, name: 'Exuberant Elephant', email: 'elephant@example.org'},
        {user_id: 99906, name: 'Fascinated Flying Fox', email: 'flying.fox@example.org'},
        {user_id: 99907, name: 'Generous Gila Monster', email: 'gila.monster@example.org'},
        {user_id: 99908, name: 'Hilarious Heron', email: 'heron@example.org'},
        {user_id: 99909, name: 'Intransigent Impala', email: 'impala@example.org'},
        {user_id: 99910, name: 'Jocular Jerboa', email: 'jerboa@example.org'},
        {user_id: 99911, name: 'Kafkaesque Kinkajou', email: 'kinkajou@example.org'},
        {user_id: 99912, name: 'Loquacious Lemur', email: 'lemur@example.org'},
        {user_id: 99913, name: 'Misanthropic Mongoose', email: 'mongoose@example.org'},
        {user_id: 99914, name: 'Nonchalant Nyala', email: 'nyala@example.org'},
        {user_id: 99915, name: 'Ornery Ocelot', email: 'ocelot@example.org'},
        {user_id: 99916, name: 'Peaceful Pangolin', email: 'panda@example.org'},
        {user_id: 99917, name: 'Querulous Quokka', email: 'quokka@example.org'},
        {user_id: 99918, name: 'Resolute Rail', email: 'rail@example.org'},
        {user_id: 99919, name: 'Senescent Sloth', email: 'sloth@example.org'},
        {user_id: 99920, name: 'Tumultuous Terrapin', email: 'terrapin@example.org'},
        {user_id: 99921, name: 'Unassailable Urial', email: 'urial@example.org'},
        {user_id: 99922, name: 'Voracious Viscacha', email: 'viscacha@example.org'},
        {user_id: 99923, name: 'Wondering Wombat', email: 'wombat@example.org'},
        {user_id: 99924, name: 'Xenial Xerus', email: 'xerus@example.org'},
        {user_id: 99925, name: 'Yielding Yak', email: 'yak@example.org'},
        {user_id: 99926, name: 'Zaftig Zebu', email: 'zebu@example.org'}
      ])
    })
}
