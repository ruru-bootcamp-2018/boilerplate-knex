const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getProfiles:getProfiles,
  getProfile:getProfile,
  getBlogs:getBlogs,
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

function getProfile (user_id,testConn){
  //gets the users table joined to the profiles. 
  const conn = testConn || connection;
  return getProfiles(conn)
  // return conn('users')
  //   .join('profiles', 'users.user_id', 'profiles.user_id')
    .where('users.user_id', user_id).first();
}

function getBlogs(testConn) {
  const conn = testConn || connection;
  return conn('blogs');
}
