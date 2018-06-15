const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getPath: getPath,
  getPaths: getPaths,
  choice: choice
}

function getPaths (testConn) {
  const conn = testConn || connection
  return conn('paths').select()
}

function getPath (id, testConn) {
  const conn = testConn || connection
  return conn('paths').where('id', id).first()
}

function choice (id, ch1id, ch2id, testConn) {
  const conn = testConn || connection
  console.log('id')
  return conn('paths')//.where('id', ch1id || ch2id).first()
  
} 