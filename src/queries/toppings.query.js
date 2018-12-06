const knex = require('./db')

const fetchToppings = () => {
  return knex('toppings')
}
// const findTopping = (id) => {
//   return knex('toppings')
//     .where('id',id);
// }
// const createTopping = (toppingInfo) => {
//   return knex('toppings')
//     .insert({

//     })
//     .then(result => {
//       return result;
//     })
//     .catch(err => {
//       return err.message;
//     })
// }
// const editTopping = (toppingInfo) => {
//   return knex('toppings')
//     .where('id', toppingInfo.id)
//     .update({

//     })
//     .then(result => {
//       return result
//     })
//     .catch(err => {
//       return err.message;
//     })
// }
// const deleteTopping = (id) => {
//   return knex('toppings')
//     .where('id',id)
//     .del();
// }
module.exports = {
  fetchToppings,
  // findTopping,
  // createTopping,
  // editTopping,
  // deleteTopping
}