const express = require('express')

const db = require('../db')

const router = express.Router()


//Gets user data only
router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index', {users: users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

//Gets users attached to profiles
router.get('/profiles', (req, res) => {
  db.getProfiles()
    .then(profiles => {
      res.render('profiles', {profiles: profiles})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/blogs', (req, res) => {
  db.getBlogs()
    .then((blogs) => {
      console.log(blogs)
      res.render('blog-list', {blogs})
    })
})

router.get('/:id',(req,res) =>{
  db.getProfile(req.params.id)
  .then(profile => {
    res.render('profile', profile)
  })
})
module.exports = router
