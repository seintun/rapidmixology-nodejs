const knex = require('./db')

const fetchUsers = () => {
  return knex('users')
}
const findUser = (id) => {
  return knex('users')
    .where('id',id);
}
const createUser = (userObj) => {
  return knex('users')
    .insert({
      firstName: userObj.firstName,
      lastName: userObj.lastName,
      userName: userObj.userName,
      password: userObj.password,
      email:  userObj.email
    })
    .returning('id')
    .then(newUserId => {
      return newUserId;
    })
    .catch(err => {
      return err.message;
    })
}
const loginUser = (credentials) => {
  return knex('users')
    .where('users.userName',credentials.userName)
    .where('users.password',credentials.password)
    .then(result => {
      return result[0];
    })
    .catch(err => {
      return err.message;
    })
}
const addToken = (user, newToken) => {
  return knex('users')
    .where('users.id', user.id)
    .update({
      token: newToken
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err.message;
    })
}
const editUser = (userInfo) => {
  return knex('users')
    .where('id', userInfo.id)
    .update({
      id: userInfo.id,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      userName: userInfo.userName,
      password: userInfo.password,
      email:  userInfo.email
    })
    .then(result => {
      return `Your userName '${userInfo.userName}' has been updated!`
    })
    .catch(err => {
      return err.message;
    })
}
const deleteUser = (id) => {
  return knex('users')
    .where('id',id)
    .del();
}
module.exports = {
  fetchUsers,
  findUser,
  createUser,
  loginUser,
  addToken,
  editUser,
  deleteUser
}