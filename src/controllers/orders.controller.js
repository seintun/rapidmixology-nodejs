const model = require('../models/orders.model');

const fetchOrders = (req, res, next) => {
  let promise = model.fetchOrders()

  promise.then(result => {
    return result.error 
      ? next(result) 
      : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
}
const createOrder = (req, res, next) => {
  let {body} = req;
  let promise = model.createOrder(body.userId, body.drink)

  promise.then(result => {
    return result.error 
      ? next(result) 
      : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
}
module.exports = {
  fetchOrders,
  createOrder
}