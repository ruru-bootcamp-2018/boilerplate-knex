
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, url : "http://www.aegteskabudengraenser.dk/forum/viewtopic.php?t=21439", profile_pic: 'https://www.ienglishstatus.com/wp-content/uploads/2018/04/Sad-Profile-Pic-for-Whatsapp.png', user_id: 99901, favorite_cheese: "gouda", relationship_status: "single" },
        {id: 2, url : "http://www.aegteskabudengraenser.dk/forum/viewtopic.php?t=21439", profile_pic: 'https://www.ienglishstatus.com/wp-content/uploads/2018/04/Sad-Profile-Pic-for-Whatsapp.png', user_id: 99902, favorite_cheese: "gouda", relationship_status: "single" },
        {id: 3, url : "http://www.aegteskabudengraenser.dk/forum/viewtopic.php?t=21439", profile_pic: 'https://www.ienglishstatus.com/wp-content/uploads/2018/04/Sad-Profile-Pic-for-Whatsapp.png', user_id: 99903, favorite_cheese: "gouda", relationship_status: "single" },
        {id: 4, url : "http://www.aegteskabudengraenser.dk/forum/viewtopic.php?t=21439", profile_pic: 'https://www.ienglishstatus.com/wp-content/uploads/2018/04/Sad-Profile-Pic-for-Whatsapp.png', user_id: 99904, favorite_cheese: "gouda", relationship_status: "single" },
        {id: 5, url : "http://www.aegteskabudengraenser.dk/forum/viewtopic.php?t=21439", profile_pic: 'https://www.ienglishstatus.com/wp-content/uploads/2018/04/Sad-Profile-Pic-for-Whatsapp.png', user_id: 99905, favorite_cheese: "gouda", relationship_status: "single" },
        {id: 6, url : "http://www.aegteskabudengraenser.dk/forum/viewtopic.php?t=21439", profile_pic: 'https://www.ienglishstatus.com/wp-content/uploads/2018/04/Sad-Profile-Pic-for-Whatsapp.png', user_id: 99906, favorite_cheese: "gouda", relationship_status: "single" },
        {id: 7,url : "http://www.aegteskabudengraenser.dk/forum/viewtopic.php?t=21439", profile_pic: 'https://www.ienglishstatus.com/wp-content/uploads/2018/04/Sad-Profile-Pic-for-Whatsapp.png', user_id: 99907, favorite_cheese: "gouda", relationship_status: "single" },
        {id: 8, url : "http://www.aegteskabudengraenser.dk/forum/viewtopic.php?t=21439", profile_pic: 'https://www.ienglishstatus.com/wp-content/uploads/2018/04/Sad-Profile-Pic-for-Whatsapp.png', user_id: 99908, favorite_cheese: "gouda", relationship_status: "single" },
        {id: 9, url : "http://www.aegteskabudengraenser.dk/forum/viewtopic.php?t=21439", profile_pic: 'https://www.ienglishstatus.com/wp-content/uploads/2018/04/Sad-Profile-Pic-for-Whatsapp.png', user_id: 99909, favorite_cheese: "gouda", relationship_status: "single" },
        {id: 11,url : "http://www.aegteskabudengraenser.dk/forum/viewtopic.php?t=21439", profile_pic: 'https://www.ienglishstatus.com/wp-content/uploads/2018/04/Sad-Profile-Pic-for-Whatsapp.png', user_id: 99910, favorite_cheese: "gouda", relationship_status: "single" },
        {id: 12, url : "http://www.aegteskabudengraenser.dk/forum/viewtopic.php?t=21439", profile_pic: 'https://www.ienglishstatus.com/wp-content/uploads/2018/04/Sad-Profile-Pic-for-Whatsapp.png', user_id: 99911, favorite_cheese: "gouda", relationship_status: "single" },
        {id: 13, url : "http://www.aegteskabudengraenser.dk/forum/viewtopic.php?t=21439", profile_pic: 'https://www.ienglishstatus.com/wp-content/uploads/2018/04/Sad-Profile-Pic-for-Whatsapp.png', user_id: 99912, favorite_cheese: "gouda", relationship_status: "single" },
        {id: 14, url : "http://www.aegteskabudengraenser.dk/forum/viewtopic.php?t=21439", profile_pic: 'https://www.ienglishstatus.com/wp-content/uploads/2018/04/Sad-Profile-Pic-for-Whatsapp.png', user_id: 99913, favorite_cheese: "gouda", relationship_status: "single" },
        {id: 15, url : "http://www.aegteskabudengraenser.dk/forum/viewtopic.php?t=21439", profile_pic: 'https://www.ienglishstatus.com/wp-content/uploads/2018/04/Sad-Profile-Pic-for-Whatsapp.png', user_id: 99914, favorite_cheese: "gouda", relationship_status: "single" },
        {id: 16, url : "http://www.aegteskabudengraenser.dk/forum/viewtopic.php?t=21439", profile_pic: 'https://www.ienglishstatus.com/wp-content/uploads/2018/04/Sad-Profile-Pic-for-Whatsapp.png', user_id: 99915, favorite_cheese: "gouda", relationship_status: "single" },
        {id: 17, url : "http://www.aegteskabudengraenser.dk/forum/viewtopic.php?t=21439", profile_pic: 'https://www.ienglishstatus.com/wp-content/uploads/2018/04/Sad-Profile-Pic-for-Whatsapp.png', user_id: 99916, favorite_cheese: "gouda", relationship_status: "single" },
        {id: 18, url : "http://www.aegteskabudengraenser.dk/forum/viewtopic.php?t=21439", profile_pic: 'https://www.ienglishstatus.com/wp-content/uploads/2018/04/Sad-Profile-Pic-for-Whatsapp.png', user_id: 99917, favorite_cheese: "gouda", relationship_status: "single" },
        {id: 19,url : "http://www.aegteskabudengraenser.dk/forum/viewtopic.php?t=21439", profile_pic: 'https://www.ienglishstatus.com/wp-content/uploads/2018/04/Sad-Profile-Pic-for-Whatsapp.png', user_id: 99918, favorite_cheese: "gouda", relationship_status: "single" },
        {id: 20,url : "http://www.aegteskabudengraenser.dk/forum/viewtopic.php?t=21439", profile_pic: 'https://www.ienglishstatus.com/wp-content/uploads/2018/04/Sad-Profile-Pic-for-Whatsapp.png', user_id: 99919, favorite_cheese: "gouda", relationship_status: "single" },
        {id: 21,url : "http://www.aegteskabudengraenser.dk/forum/viewtopic.php?t=21439", profile_pic: 'https://www.ienglishstatus.com/wp-content/uploads/2018/04/Sad-Profile-Pic-for-Whatsapp.png', user_id: 99920, favorite_cheese: "gouda", relationship_status: "single" },
        {id: 22,url : "http://www.aegteskabudengraenser.dk/forum/viewtopic.php?t=21439", profile_pic: 'https://www.ienglishstatus.com/wp-content/uploads/2018/04/Sad-Profile-Pic-for-Whatsapp.png', user_id: 99921, favorite_cheese: "gouda", relationship_status: "single" },
        {id: 23,url : "http://www.aegteskabudengraenser.dk/forum/viewtopic.php?t=21439", profile_pic: 'https://www.ienglishstatus.com/wp-content/uploads/2018/04/Sad-Profile-Pic-for-Whatsapp.png', user_id: 99922, favorite_cheese: "gouda", relationship_status: "single" },
        {id: 24, url : "http://www.aegteskabudengraenser.dk/forum/viewtopic.php?t=21439", profile_pic: 'https://www.ienglishstatus.com/wp-content/uploads/2018/04/Sad-Profile-Pic-for-Whatsapp.png', user_id: 99923, favorite_cheese: "gouda", relationship_status: "single" },
        {id: 25, url : "http://www.aegteskabudengraenser.dk/forum/viewtopic.php?t=21439", profile_pic: 'https://www.ienglishstatus.com/wp-content/uploads/2018/04/Sad-Profile-Pic-for-Whatsapp.png', user_id: 99924, favorite_cheese: "gouda", relationship_status: "single" },
        {id: 26, url : "http://www.aegteskabudengraenser.dk/forum/viewtopic.php?t=21439", profile_pic: 'https://www.ienglishstatus.com/wp-content/uploads/2018/04/Sad-Profile-Pic-for-Whatsapp.png', user_id: 99925, favorite_cheese: "gouda", relationship_status: "single" },
      ]);
    });
};
