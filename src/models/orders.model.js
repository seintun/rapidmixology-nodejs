const ordersQuery = require('../queries/orders.query')

const fetchOrders = () => {
  let orders = ordersQuery.fetchOrders()

  return orders.then(result => {
    return result.length < 1
      ? { error: 'error retrieving orders', status: 404 }
      : result
  })
}
const createOrder = (userId, drinkInfo) => {
  let order = ordersQuery.createOrder(userId, drinkInfo)

  return order.then(result => {
    return !result
      ? { error: 'error creating new order', status: 404 }
      : result
  })
}
module.exports = {
  fetchOrders,
  createOrder
}