const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  addUser: addUser
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

function getProfile (id, testConn) {
  const conn = testConn || connection
  return conn('profiles')
    .where()
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

function err(error) {
  if (error) throw new Error;
}

