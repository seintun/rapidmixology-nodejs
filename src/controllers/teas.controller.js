const model = require('../models/teas.model');

const fetchTeas = (req, res, next) => {
  let promise = model.fetchTeas()

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
}
// const findTea = (req, res, next) => {
//   let {id} = req.params;
//   let promise = model.findTea(id)

//   promise.then(result => {
//     return result.error 
//       ? next(result) 
//       : res.status(200).json(result)
//   })
//   promise.catch(error => {
//     next(error)
//   })
// }
// const createTea = (req, res, next) => {
//   let {body} = req;
//   let promise = model.createTea(body)

//   promise.then(result => {
//     return result.error 
//       ? next(result) 
//       : res.status(200).json(result)
//   })
//   promise.catch(error => {
//     next(error)
//   })
// }
// const editTea = (req, res, next) => {
//   let {body} = req;
//   let promise = model.editTea(body)

//   promise.then(result => {
//     return result.error ? next(result) : res.status(200).json(result)
//   })
//   promise.catch(error => {
//     next(error)
//   })
// }
// const deleteTea = (req, res, next) => {
//   let {id} = req.params;
//   let promise = model.deleteTea(id)

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
  fetchTeas,
  // findTea,
  // createTea,
  // editTea,
  // deleteTea
}