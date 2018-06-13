const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getProfiles:getProfiles,
}

function getUsers (testConn) {
  const conn = testConn || connection
  return conn('users').select()
}

function getUser (id, testConn) {
  const conn = testConn || connection
  return conn('users').where('id', id).first()
}

function getProfiles (testConn){
  //gets the users table joined to the profiles. 
  const conn = testConn || connection;
  return conn('users')
    .join('profiles', 'users.user_id', 'profiles.user_id')
}