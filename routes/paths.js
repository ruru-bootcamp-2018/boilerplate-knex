const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getPaths()
    .then(paths => {
      res.render('index', {paths: paths})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})


router.get('/path/:id', (req,res)=>{
  let id = req.params.id
  db.getPath(id)
  .then(path =>{
    res.render('path', path)
  })
})

// router.get('/path/:id', (req, res) => {
//   let ch1id = req.body.ch1id
//   let ch2id = req.body.ch2id
//   db.choice(req.params.id, ch1id, ch2id)
//   .then(pathChoice =>{
//     console.log(req.params.id, ch1id, ch2id)
//     res.render('path', pathChoice)
//   })
// })


module.exports = router
