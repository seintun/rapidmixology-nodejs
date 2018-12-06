const knex = require('./db')

const fetchTeas = () => {
  return knex('teas')
}
// const findUser = (id) => {
//   return knex('teas')
//     .where('id',id);
// }
// const createTea = (teaInfo) => {
//   return knex('teas')
//     .insert({

//     })
//     .then(result => {
//       return result;
//     })
//     .catch(err => {
//       return err.message;
//     })
// }
// const editTea = (teaInfo) => {
//   return knex('teas')
//     .where('id', teaInfo.id)
//     .update({

//     })
//     .then(result => {
//       return result
//     })
//     .catch(err => {
//       return err.message;
//     })
// }
// const deleteUser = (id) => {
//   return knex('teas')
//     .where('id',id)
//     .del();
// }
module.exports = {
  fetchTeas,
  // findUser,
  // createTea,
  // editTea,
  // deleteUser
}