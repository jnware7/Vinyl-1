const db = require('./db')

const _query = (sql, variables) => {
  console.log('QUERY ->', sql.replace(/[\n\s]+/g, ' '), variables)

  return db.query(sql, variables)
    .then((databaseQueryResults) => {
      console.log('QUERY ->', databaseQueryResults)
      return databaseQueryResults
    })
    .catch((error) => {
      console.log('QUERY -> !!ERROR!!')
      console.log(error)
      return error
    })
}

module.exports = _query
