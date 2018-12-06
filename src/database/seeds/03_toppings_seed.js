exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('toppings').del()
    .then(function () {
      // Inserts seed entries
      return knex('toppings').insert([
        {
          name: 'Tapioca (Boba)',
          description: 'Tapioca, also known as “bubbles” or “boba,” is a fan favorite. It is made from tapioca starch and brown sugar. We make it fresh every 2 hours to ensure the best possible quality! Tapioca has a chewy and squishy texture, and thanks to the brown sugar, it adds sweetness to any drink.',
          calorie: 145,
          price: 0.75
        },        
        {
          name: 'Pudding',
          description: 'Our pudding topping is made with whole milk, non-dairy creamer, lactose free milk and sugar. Pudding is smooth and creamy with a jelly like texture. Its flavor is sweet and milky.',
          calorie: 40,
          price: 1.00
        },        
        {
          name: 'Nata Jelly',
          description: 'Made with coconut pulp and pineapple flavoring, Nata Jelly is a great way to add some tropical flavor to your tea! It has a solid and chewy texture, with a burst of sweetness.',
          calorie: 55,
          price: 1.25
        },
        {
          name: 'Mung Bean',
          description: 'Red bean, also known as adzuki bean, is a topping made from dried red beans and sugar. The flavor can be described as sweet, creamy and earthy. It has a slight granulated texture and is high in fiber.',
          calorie: 126,
          price: 1.00
        },
        {
          name: 'Herbal Jelly',
          description: 'Our Herbal Jelly topping is made from Mesona Juice, Brown Sugar and Tapioca Starch. It gives off refreshing taste to any beverage, like eating sweet jello that\'s healthy for you! The herbal jelly has a hint of sweetness with an earthy herbal fragrance and flavor. It has a soft texture and easily breaks apart.',
          calorie: 6,
          price: 1.00
        },
        {
          name: 'Grape Popping Bubbles',
          description: 'Unlike our tapioca based chewy bubbles, our popping bubbles burst juice in your mouth for a sweet splash of flavor.  Popping bubble has a thin, gel-like skin with fresh juice inside that bursts when squeezed. Bring bold grape flavor to your favorite drinks with our grape flavored popping bubbles. Filled with sweet and sour, tantalizing juice, these bubbles pop on your tongue to deliver a refreshing taste. Treat yourself to the essence of delicious grapes by adding them to your drinks.',
          calorie: 108,
          price: 1.50
        },
        {
          name: 'Coffee Popping Bubbles',
          description: 'Unlike our tapioca based chewy bubbles, our popping bubbles burst juice in your mouth for a sweet splash of flavor. Popping bubble has a thin, gel-like skin with fresh juice inside that bursts when squeezed. Coffee lovers look no further! The earthly and slightly bitter taste of coffee with it\'s wonderful aroma will definitely refresh your drinks and wake you up. If a cup of coffee is too much for you, our coffee popping bubbles is the perfect choice.',
          calorie: 101,
          price: 1.50
        },
        {
          name: 'Mango Popping Bubbles',
          description: 'Unlike our tapioca based chewy bubbles, our popping bubbles burst juice in your mouth for a sweet splash of flavor.  Popping bubble has a thin, gel-like skin with fresh juice inside that bursts when squeezed. Sinfully sweet and tantalizingly tropical, our Mango popping bubble brings a fresh, exotic taste to your drinks. Let it take you to a beach-worthy flavor getaway.',
          calorie: 112,
          price: 1.50
        },
        {
          name: 'Aloe Jelly',
          description: 'An assorted aloe flavored jelly cubes that can be added to any drink to boost the flavor of your tea to next level. Aloe Jelly contains rich natural nutrients and fiber which is beneficial for you internal body.',
          calorie: 42,
          price: 1.00
        },
        {
          name: 'Fig Jelly',
          description: 'A traditional Taiwanese dessert that\'s super popular during the summertime. Figs are high in fiber and a good source of several essential minerals. This refreshing jelly is made from the seeds of a dried fig fruit and water.',
          calorie: 90,
          price: 1.00
        }
      ]);
    });
};
