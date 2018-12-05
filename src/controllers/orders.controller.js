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
  let { userId, drink, token } = req.body;
  let promise = model.createOrder(userId, drink, token)

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