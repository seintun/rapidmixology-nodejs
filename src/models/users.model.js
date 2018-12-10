const usersQuery = require('../queries/users.query')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const config = require('../../config');

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
  const { firstName, lastName, userName, password, email } = userInfo
  let hashPassword = bcrypt.hashSync(password, 8)
  let userObj = {
    "firstName": firstName,
    "lastName": lastName,
    "userName": userName,
    "password": hashPassword,
    "email": email
  }
  let user = usersQuery.createUser(userObj)
  return user.then(result => {
    let token = jwt.sign({id: result}, config.secret, { expiresIn: 86400 })
    return !result
      ? { error: 'ERROR: Unable to create new user', status: 403 }
      : { auth: true, token };
  })
}
const loginUser = (userName, password) => {
  let user = usersQuery.loginUser(userName, password)
  return user.then(user => {
      if (!user) return { error: 'ERROR: Unable to authenticate user', status: 401 }
      
      let isPasswordValid = bcrypt.compareSync(password, user.password);
      if (!isPasswordValid) return res.send({ auth: false, token: null});

      let token = jwt.sign({id: user.id}, config.secret, { expiresIn: 86400 })
      return { auth: true, token, user: { id: user.id, firstName: user.firstName, lastName: user.lastName } };
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