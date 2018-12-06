const toppingsQuery = require('../queries/toppings.query')

const fetchToppings = () => {
  let toppings = toppingsQuery.fetchToppings()

  return toppings.then(result => {
    return result.length < 1
      ? { error: 'error retrieving toppings', status: 404 }
      : result
  })
}
// const findTopping = (id) => {
//   let topping = toppingsQuery.findTopping(id)

//   return topping.then(result => {
//     return result.length < 1
//       ? { error: 'ERROR: topping not found', status: 404 }
//       : result
//   })
// }
// const createTopping = (toppingInfo) => {
//   let topping = toppingsQuery.createTopping(toppingInfo)

//   return topping.then(result => {
//     return !result
//       ? { error: 'ERROR: Unable to create new topping', status: 403 }
//       : result
//   })
// }
// const editTopping = (toppingInfo) => {
//   let topping = toppingsQuery.editTopping(toppingInfo)

//   return topping.then(result => {
//     return !result
//       ? { error: 'ERROR: Unable to update topping', status: 404 }
//       : result
//   })
// }
// const deleteTopping = (id) => {
//   let topping = toppingsQuery.deleteTopping(id)

//   return topping.then(result => {
//     return result.length < 1
//       ? { error: 'ERROR: Unable to delete toppings', status: 404 }
//       : result
//   })
// }
module.exports = {
  fetchToppings,
  // findTopping,
  // createTopping,
  // editTopping,
  // deleteTopping
}