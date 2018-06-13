const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  addUser: addUser,
  addBlogPost: addBlogPost,
  getBlog: getBlog
}

function getUsers (testConn) {
  const conn = testConn || connection
  return conn('users').select()
}

function getUser (id, testConn) {
  const conn = testConn || connection
  return conn('users')
  .join('profiles', 'profiles.user_id', 'users.id')
  .where('users.id', id)
  .first()
}


function addUser (data, testConn) {
  const conn = testConn || connection 
  return conn('users')
    .insert({'name': data.name, 'email': data.email})
    .then((id) => {
      return conn('profiles')
        .insert({'url': data.url, 'profile_pic': data.profile_pic, 'user_id': id[0], 'favorite_cheese': data.favorite_cheese, 'relationship_status': data.relationship_status})
       
    })
    .catch(err)
}

function addBlogPost (data, testConn) {
  const conn = testConn || connection 
  // console.log(data)
  return conn('blogs')
    .insert({'user_id': data.id, 'body': data.body, 'title': data.title})
}

function getBlog (id, testConn) {
  console.log(id)
  const conn = testConn || connection 
  return conn('blogs')
    .where('id', id)
    //something broken in the where
}


function err (error) {
  if (error) throw new Error;
}