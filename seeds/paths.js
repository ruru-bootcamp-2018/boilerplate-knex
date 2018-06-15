exports.seed = function (knex, Promise) {
  return knex('paths').del()
    .then(function () {
      return knex('paths').insert([
        ////START PATH
        {id: 01, 
          story: 'walk down street',
          img: 'https://ichef.bbci.co.uk/images/ic/720x405/p069w1tz.jpg',
          ch1id: 02,
          ch1text: "walk left",
          ch2id: 03,
          ch2text: "walk right"},

        {id: 02, /////TRUE
          story: 'cross road',
          img:'https://ichef.bbci.co.uk/images/ic/720x405/p069w1tz.jpg',
          ch1id: 04,
          ch1text: "look left",
          ch2id: 05,
          ch2text: "look right"},

        {id: 03, //////FALSE
          story: 'get in car',
          img:'https://ichef.bbci.co.uk/images/ic/720x405/p069w1tz.jpg',
          ch1id: 06,
          ch1text: "yes",
          ch2id: 07,
          ch2text: "no"},

        {id: 04, ///////TRUE TRUE END
          story: 'Pat dog',
          img: '',
          ch1id: 1,
          ch1text: "",
          ch2id: 2,
          ch2text: ""},

        {id: 05, //// TRUE FALSE END
          story: 'Meet person',
          img: '',
          ch1id: 1,
          ch1text: "",
          ch2id: 2,
          ch2text: ""},

        {id: 06, /////// FALSE TRUE END
          story: 'Crash -DIE',
          img: '',
          ch1id: 1,
          ch1text: "",
          ch2id: 2,
          ch2text: ""},

        {id: 07, /////// FALSE FALSE END
            story: 'Keep walking',
            img: '',
            ch1id: 1,
            ch1text: "",
            ch2id: 2,
            ch2text: ""}
      ])
    })
}
