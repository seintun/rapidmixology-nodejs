const knex = require('./db')

const fetchUsers = () => {
  return knex('users')
}
const findUser = (id) => {
  return knex('users')
    .where('id',id);
}
const createUser = (userInfo) => {
  return knex('users')
    .insert({
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      userName: userInfo.userName,
      password: userInfo.password,
      email:  userInfo.email
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err.message;
    })
}
const loginUser = (userInfo) => {
  return knex('users')
    .where('users.userName',userInfo.userName)
    .where('users.password',userInfo.password)
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
  editUser,
  deleteUser
}