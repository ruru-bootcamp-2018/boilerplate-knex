const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index', {users: users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/profiles/:id', (req, res) => {
  let id = req.params.id;
  db.getUser(id)
    .then(user => {
      console.log(user)
      res.render('profiles', user)
    })
})

router.get('/add', (req, res) => {
  res.render('new')
})
module.exports = router

router.post('/add', (req, res) => {
  var data = req.body
  db.addUser(data)
    .then(id => {
      res.redirect('/')
    })
  
})
