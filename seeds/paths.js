exports.seed = function (knex, Promise) {
  return knex('paths').del()
    .then(function () {
      return knex('paths').insert([
        ////START PATH
        {id: 01, 
          story: 'You are in search of the lost temple of EDA',
          img: 'https://environment-other.ambient-mixer.com/images_template/9/8/7/9875aeca9d176dbdde11816f44dd565f_full.jpg',
          ch1id: 02,
          ch1text: "Brave the concrete jungle",
          ch2id: 03,
          ch2text: "Jump across the roof tops"},

        {id: 02, /////TRUE
          story: 'The jungle is full of roaring petrol beasts',
          img:'https://vignette.wikia.nocookie.net/disney/images/2/2d/Lion-king-disneyscreencaps_com-3849.jpg/revision/latest?cb=20130801005341',
          ch1id: 04,
          ch1text: "Wait for them to pass",
          ch2id: 05,
          ch2text: "Dash among the stampede"},

        {id: 03, //////FALSE
          story: 'High above the concrete jungle, you meet a fellow rooftop ninja leaping from windowsills to balconies',
          img:'https://www.wallpaperup.com/uploads/wallpapers/2014/01/02/212711/a73b456af9e5ae81ece2ef5b28b5a429-700.jpg',
          ch1id: 06,
          ch1text: "Stop and talk with her",
          ch2id: 07,
          ch2text: "Run away"},

        {id: 04, ///////TRUE TRUE END
          story: 'Safely waiting on the edge of the path, notice a wild hipster has left his bicycle leaning nearby',
          img: 'https://cdn.concreteplayground.com/content/uploads/2013/03/bicycle.jpg',
          ch1id: 08,
          ch1text: "Take the bicycle",
          ch2id: 09,
          ch2text: "Continue by foot"},

        {id: 05, //// TRUE FALSE END
          story: 'Fearlessly you leap into the oncoming traffic, unfortunately you lack the prowess of a native Wellingtonian, an collide with an enormous yellow go bus',
          img: 'https://notallowedto.com/wp-content/uploads/2016/03/lion-attack.jpg',
          ch1id: 1,
          ch1text: "",
          ch2id: 2,
          ch2text: ""},

        {id: 06, /////// FALSE TRUE END
          story: 'Before you can step toward her, the wild Wellington wind across the roof top. Both stumbling, you lose your balance and slide toward the edge…And over!',
          img: 'https://www.pcinvasion.com/wp-content/uploads/2014/11/assassins-creed-unity-3-1024x576.jpg',
          ch1id: 1,
          ch1text: "",
          ch2id: 2,
          ch2text: ""},

        {id: 07, /////// FALSE FALSE END
            story: 'Your mission is too important ninja small talk! You carry on your way, but the momentary distraction causes you to jump right into a flock of pigeons. They grab you in their tiny talons and fly off across the city. However, they tire fast, and end up dropping you right at the top of Cuba! You manage to prop yourself up and make the finishing steps to the temple of EDA at long last!',
            img: 'https://environment-other.ambient-mixer.com/images_template/9/8/7/9875aeca9d176dbdde11816f44dd565f_full.jpg',
            ch1id: 1,
            ch1text: "",
            ch2id: 2,
            ch2text: ""},

        {id: 08, /////// FALSE FALSE END
              story: 'Its too good an opportunity to pass up -  you grab the bicycle and ride off towards the heart of the city. You pass the giant umbrella, the bucket fountain, and cross the perilous Vivian St…and finally you arrive!!!',
              img: 'https://environment-other.ambient-mixer.com/images_template/9/8/7/9875aeca9d176dbdde11816f44dd565f_full.jpg',
              ch1id: 1,
              ch1text: "",
              ch2id: 2,
              ch2text: ""},

        {id: 09, /////// FALSE FALSE END
                story: 'Deciding to remain safe and sensible in your decision you eventually reach the ground temple of EDA, only to find that it is now evening, and the temple is locked, leaving you to your fate for a Friday night in the Wellington Wilderness',
                img: 'https://static2.stuff.co.nz/1319444618/596/5843596.jpg',
                ch1id: 1,
                ch1text: "",
                ch2id: 2,
                ch2text: ""}
      ])
    })
}
