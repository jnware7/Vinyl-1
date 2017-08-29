const _query = require('./index')

const createUser = (name, email, password) => _query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *', [name, email, password])

const checkUserByEmail = email => _query('SELECT * FROM users WHERE email=$1', [email])

const getUserById = id => _query('SELECT * FROM users WHERE id=$1', [id])

module.exports = {
  createUser,
  checkUserByEmail,
  getUserById,
}
