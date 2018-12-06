const model = require('../models/toppings.model');

const fetchToppings = (req, res, next) => {
  let promise = model.fetchToppings()

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
}
// const findTopping = (req, res, next) => {
//   let {id} = req.params;
//   let promise = model.findTopping(id)

//   promise.then(result => {
//     return result.error 
//       ? next(result) 
//       : res.status(200).json(result)
//   })
//   promise.catch(error => {
//     next(error)
//   })
// }
// const createTopping = (req, res, next) => {
//   let {body} = req;
//   let promise = model.createTopping(body)

//   promise.then(result => {
//     return result.error 
//       ? next(result) 
//       : res.status(200).json(result)
//   })
//   promise.catch(error => {
//     next(error)
//   })
// }
// const editTopping = (req, res, next) => {
//   let {body} = req;
//   let promise = model.editTopping(body)

//   promise.then(result => {
//     return result.error ? next(result) : res.status(200).json(result)
//   })
//   promise.catch(error => {
//     next(error)
//   })
// }
// const deleteTopping = (req, res, next) => {
//   let {id} = req.params;
//   let promise = model.deleteTopping(id)

//   promise.then(result => {
//     return result.error 
//       ? next(result) 
//       : res.status(200).json(result)
//   })
//   promise.catch(error => {
//     next(error)
//   })
// }
module.exports = {
  fetchToppings,
  // findTopping,
  // createTopping,
  // editTopping,
  // deleteTopping
}