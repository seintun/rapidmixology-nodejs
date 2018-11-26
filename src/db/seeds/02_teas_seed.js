exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('teas').del()
    .then(function () {
      // Inserts seed entries
      return knex('teas').insert([
        {
          name: 'Anita’s Blend',
          type: 'Black Tea',
          description: 'Chinese black tea, Sri Lankan black tea, Chinese oolong tea, Chinese white tea, blood orange pieces, vanilla bean pieces, blood orange essence, vanilla essence. This is an artisan house blend in honor of Anita Evetts.', 
          caffeine: true, 
          caffeine_level: 100
        },
        {
          name: 'Irish Breakfast ',
          type: 'Black Tea',
          description: 'Indian black tea. Look for a brisk flavor with malty tones and a lot of depth in this traditional blend of large and small-leaf teas from the Assam region of India.', 
          caffeine: true, 
          caffeine_level: 150
        },
        {
          name: 'Winter Solstice',
          type: 'Black Tea',
          description: 'Black tea, orange pieces, cranberry pieces, ginger root, cinnamon peel.', 
          caffeine: true, 
          caffeine_level: 120
        },
        {
          name: 'Russian Caravan',
          type: 'Black Tea',
          description: 'Black tea. Look for a full-bodied brew with notes of smoke and cinnamon in this historical tea blend that was once the chosen favorite of the Russian Tsar. ', 
          caffeine: true, 
          caffeine_level: 120
        },
        {
          name: 'Organic Darjeeling',
          type: 'Black Tea',
          description: 'Organic Indian tea. Look for a complex brisk taste with delicate muscatel overtones in this organic and Fair Trade tea from the Ambootia Tea Garden in Darjeeling, India.', 
          caffeine: true, 
          caffeine_level: 120
        },
        {
          name: 'Lovers Leap',
          type: 'Black Tea',
          description: 'Estate Sri Lankan black tea. Look for a vibrant burgundy brew with a smooth richness in this tea from the Lovers Leap Estate in the Ratnapura highlands of Sri Lanka. ', 
          caffeine: true, 
          caffeine_level: 120
        },
        {
          name: 'Mountain Kenya',
          type: 'Black Tea',
          description: 'African black tea. Look for a rich taste with coffee-esque tones and a big caffeine kick in this small-leaf tea from the Tindret Estate in Kenya.', 
          caffeine: true, 
          caffeine_level: 120
        },
        {
          name: 'Bancha Houjicha',
          type: 'Green Tea',
          description: 'Japanese Bancha green tea. Look for a light woodiness with surprisingly sweet undertones in this classic roasted tea from Japan. ', 
          caffeine: true, 
          caffeine_level: 120
        },
        {
          name: 'Cloud & Mist',
          type: 'Green Tea',
          description: 'Chinese green tea. Look for a mellow grassy taste with buttery undertones in this special bud-and-leaf tea grown in the mountain clouds and mist of the Wu Lu Mountains in the Jiangi Province, China.', 
          caffeine: true, 
          caffeine_level: 120
        },
        {
          name: 'Downy Pearl Jasmine',
          type: 'Green Tea',
          description: 'Chinese green tea. Look for a luxurious fragrance and intoxicating sweetness in this premium tea made out of hand-rolled silver tips and green tea leaves scented with jasmine flowers from China.', 
          caffeine: true, 
          caffeine_level: 120
        },
        {
          name: 'Jade Dew Green (Gyokuro)',
          type: 'Green Tea',
          description: 'Japanese green tea. Look for a sparkling emerald liquor with complex salty seaweed and sweet vegetal notes in this rare tea from the Uji Tea Gardens near Kyoto, Japan.', 
          caffeine: true, 
          caffeine_level: 120
        },
        {
          name: 'La Belle Rose',
          type: 'Green Tea',
          description: 'Sri Lankan black tea, Chinese green tea, rose petals, jasmine, French lavender, vanilla beans, vanilla essence, bergamot oil. This is an artisan house blend meant to evoke the sophistication and elegance of Paris.', 
          caffeine: true, 
          caffeine_level: 120
        },
        {
          name: 'Sencha',
          type: 'Green Tea',
          description: 'Japanese Sencha green tea. Look for a bright fresh taste followed by a mellow saltiness in this traditional steamed tea from the Shizouka region near Mount Fuji in Japan.', 
          caffeine: true, 
          caffeine_level: 120
        },
        {
          name: 'Meyer Berry Sencha',
          type: 'Green Tea',
          description: 'Chinese Sencha-style green tea, lemongrass, lemon peel, blueberries, natural flavor. ', 
          caffeine: true, 
          caffeine_level: 120
        },
        {
          name: 'Decaf Sencha',
          type: 'Green Tea',
          description: 'Chinese Sencha-style green tea. Look for a bright fresh taste followed by a mellow saltiness in this traditional steamed tea from the Shizouka region near Mount Fuji in Japan.', 
          caffeine: false, 
          caffeine_level: 120
        },
        {
          name: 'China Sechung Oolong',
          type: 'Oolong Tea',
          description: 'Chinese Min Nan oolong tea. Look for a gentle interplay between cedar and vegetal tones in this tea from the Southern Mountains of Fujian Province, China. ', 
          caffeine: true, 
          caffeine_level: 120
        },
        {
          name: 'Royal Red Robe Oolong (Da Hong Pao)',
          type: 'Oolong Tea',
          description: 'Chinese oolong tea. Look for a smoky brew with undertones of cinnamon and syrup in this rare “rock tea” from the Wu Yi Mountains of the Fujian Province, China.', 
          caffeine: true, 
          caffeine_level: 120
        },
        {
          name: 'Min-Pei Fancy Oolong',
          type: 'Oolong Tea',
          description: 'Chinese oolong tea. Look for light cedar and spice notes in this tea from the northern Wu Yi Mountains of the Fujian Province, China.', 
          caffeine: true, 
          caffeine_level: 120
        },
        {
          name: 'La Lune',
          type: 'Oolong Tea',
          description: 'Chinese Pouchong oolong tea, Chinese white tea, lemongrass. This is an artisan house blend combining the fragrance of jasmine with the sweet taste of lemon in a perfect after-dinner refreshment.', 
          caffeine: true, 
          caffeine_level: 120
        },
        {
          name: 'Fig Formosa Oolong',
          type: 'Oolong Tea',
          description: 'Taiwanese oolong tea, cornflower, poppy flower, Smyrna Fig essence. Formosa Oolong Taiwanese oolong tea. Look for peach-fruit notes balanced by a sweet grassy undercurrent in this unique tea from Taiwan.', 
          caffeine: true, 
          caffeine_level: 120
        },
        {
          name: 'Darjeeling',
          type: 'White Tea',
          description: 'Rare White Indian white tea. Look for a juicy fresh fragrance and taste in this very rare tea from the Poobong Estate in Darjeeling, India.', 
          caffeine: false, 
          caffeine_level: 120
        },
        {
          name: 'Mango White',
          type: 'White Tea',
          description: 'Chinese white tea, natural flavor oils.', 
          caffeine: false, 
          caffeine_level: 120
        },
        {
          name: 'Organic Flowery Silver Needle',
          type: 'White Tea',
          description: 'Organic Chinese white tea. Look for a pale gold liquor with a sweet honeysuckle taste in this premium tea made out of only the spring tips of the tea bushes from the northernmost part of the Fujian Province in China. ', 
          caffeine: false, 
          caffeine_level: 120
        },
        {
          name: 'Organic Pear Spice',
          type: 'White Tea',
          description: 'Organic Chinese white tea, organic star anise, organic helichrysum flowers, organic natural pear essence.', 
          caffeine: false, 
          caffeine_level: 120
        },
        {
          name: 'Strawberry White',
          type: 'White Tea',
          description: 'Chinese white tea, strawberry pieces, natural flavor, artificial flavor. ', 
          caffeine: false, 
          caffeine_level: 120
        },
      ]);
    });
};