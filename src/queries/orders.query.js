const knex = require('./db')

const fetchOrders = () => {
  return knex('orders')
      .join('users', 'users.id', '=', 'orders.user_id')
      .join('drinks', 'drinks.id', '=', 'orders.drink_id')
      .join('teas', 'teas.id', '=', 'drinks.tea_id')
      .join('drinks_toppings', 'drinks.id', '=', 'drinks_toppings.drink_id')
      .join('toppings', 'toppings.id', '=', 'drinks_toppings.topping_id')
      .select(
        'orders.id as orderId',
        'users.id as userId',
        'users.firstName as firstName',
        'users.lastName as lastName',
        'users.email as email',
        'drinks.id as drinkId',
        'drinks.milk as drinkMilk',
        'drinks.sugar as drinkSugar',
        'drinks.ice as drinkIce',
        'teas.id as teaId',
        'teas.name as teaName',
        'teas.type as teaType',
        // knex.raw('ARRAY_AGG(toppings.name) as toppingName'),
        'toppings.name as toppingName',
        'orders.total as orderTotal',
        'orders.created_at as orderPlaced'
      )
      .distinct()
}
const createOrder = (userId, drinkInfo) => {
  return knex('drinks')
    .insert({
      "tea_id": drinkInfo.tea_id,
      "milk": drinkInfo.milk,
      "sugar": drinkInfo.sugar,
      "ice": drinkInfo.ice,
    })
    .returning('id')
    .then(returningId => {
      let arrayOfToppings = [];
      Object.values(drinkInfo.toppings).map(topping => {
        let toppingChoice = {
          drink_id: `${returningId}`,
          topping_id: topping[0],
          quantity: topping[1]
        }
        arrayOfToppings.push(toppingChoice);
      })
      return knex('drinks_toppings')
        .insert(arrayOfToppings)
        .then(()=> 
          knex('orders')
            .insert({
              "user_id": userId,
              "drink_id": `${returningId}`,
              "total": drinkInfo.total
            })
        )
      })
    .catch(err => {
        return err.message;
    })
}
module.exports = {
  fetchOrders,
  createOrder
}