const usersQuery = require('../queries/users.query')
const jwt = require('jsonwebtoken')

const fetchUsers = () => {
  let users = usersQuery.fetchUsers()

  return users.then(result => {
    return result.length < 1
      ? { error: 'error retrieving users', status: 404 }
      : result
  })
}
const findUser = (id) => {
  let user = usersQuery.findUser(id)

  return user.then(result => {
    return result.length < 1
      ? { error: 'ERROR: user not found', status: 404 }
      : result
  })
}
const createUser = (userInfo) => {
  let user = usersQuery.createUser(userInfo)

  return user.then(result => {
    return !result
      ? { error: 'ERROR: Unable to create new user', status: 403 }
      : result
  })
}
const loginUser = (credentials) => {
  let user = usersQuery.loginUser(credentials)

  return user.then(user => {
      if (!user) return { error: 'ERROR: Unable to authenticate user', status: 401 }
      const { password, created_at, updated_at, token, ...userLoggedIn } = user

      const timeIssued = Math.floor(Date.now() / 1000)
      const timeExpired = timeIssued + 86400 * 28
      let newToken = jwt.sign({ 
        iat: timeIssued,
        exp: timeExpired,
        id: user.id
      }, 'secretkey' )
      let addToken = usersQuery.addToken(userLoggedIn, newToken)
      return addToken.then(result => {
        if (!result) return { error: 'ERROR: Unable to add token', status: 403 }
        return {userLoggedIn, newToken}
      })
  })
}
const editUser = (userInfo) => {
  let user = usersQuery.editUser(userInfo)

  return user.then(result => {
    return !result
      ? { error: 'ERROR: Unable to update user', status: 404 }
      : result
  })
}
const deleteUser = (id) => {
  let user = usersQuery.deleteUser(id)

  return user.then(result => {
    return result.length < 1
      ? { error: 'ERROR: Unable to delete users', status: 404 }
      : result
  })
}
module.exports = {
  fetchUsers,
  findUser,
  createUser,
  loginUser,
  editUser,
  deleteUser
}