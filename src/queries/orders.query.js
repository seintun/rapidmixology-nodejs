const knex = require('./db')

const createOrder = (userId, drinkInfo) => {
  //Insert new row of order details with FKs user_id and restaurant_id
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
  createOrder
}