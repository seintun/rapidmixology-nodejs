const ordersQuery = require('../queries/orders.query')

const createOrder = (userId, drinkInfo) => {
  let order = ordersQuery.createOrder(userId, drinkInfo)

  return order.then(result => {
    return !result
      ? { error: 'error creating new order', status: 404 }
      : result
  })
}
module.exports = {
  createOrder
}