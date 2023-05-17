const info = [
    {
      name: 'Subway',
      image: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8zNzg4MDJiMC1jNTI4LTQ4MjktYjBiNS0wY2M2NDBkZjYzY2QuanBlZw==',
      note: '4.5',
      drive_time: '20 - 30mn',
      logo:'https://logos-marques.com/wp-content/uploads/2021/03/Subway-Logo.png',
    description:'Subway est une chaîne de restauration rapide américaine sous franchise, vendant principalement des sandwichs et des salades. « Subway » est un jeu de mots en référence à submarine sandwich (« sandwich sous-marin »), le pain ressemblant à un sous-marin et signifiant aussi métro en anglais.'
    },
    {
      name: 'McDonald\'s' ,
      image: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9iODQ1NDA4Zi1lOGFmLTRkMDUtYWI4YS0yNWMwYzVjMGI4YWUuanBlZw==',
      note: '3.9',
      drive_time: '15 - 25mn',
      logo:'https://media-cdn.tripadvisor.com/media/photo-m/1280/20/92/cd/fb/logo-mcdonald-s.jpg',
      description:'McDonald\'s vend principalement des burgers de bœuf, poulet et poisson ainsi que des frites, des menus pour le petit-déjeuner, des sodas, des laits frappés et des desserts. La société a élargi l\'offre avec des salades, wraps et fruits.'
    },
    {
      name: 'O\'Tacos',
      image: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9mOGQ5MjU5ZS00YjIzLTRkNWYtOWQ1YS0wNjBlNjE2NDI4Y2QuanBlZw==',
      note: '4.4',
      drive_time: '15 - 25mn',
      logo:'https://upload.wikimedia.org/wikipedia/fr/thumb/c/c9/Otacos_logo.svg/1200px-Otacos_logo.svg.png',
      description:'O\'Tacos est une chaîne de restauration rapide qui propose un menu de tacos français. Dans les enseignes O\'Tacos, le client choisit ses ingrédients (viandes, sauces et suppléments), parmi une quarantaine d\'ingrédients dont deux sont des légumes.'

    },
    {
      name: 'Pizza Hut',
      image: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8zYWY1Y2IzMi0yZjYxLTQ5OWQtYjZjOC1iZWIzMDM0MmM4M2IuanBlZw==',
      note: '4.1',
      drive_time: '20 - 30mn',
      logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Pizza_Hut_classic_logo.svg/langfr-800px-Pizza_Hut_classic_logo.svg.png',
      description:'Pizza Hut est une chaîne de restauration rapide en franchise dont le siège social est situé dans la région de Dallas au Texas. Elle est spécialisée dans la préparation et la livraison de pizzas.'

    },
    {
      name: 'Momiji',
      image: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC80YWExZDYxOC0wZTQwLTRiZjItYjRjNS1hZTAyZDQ2Y2Y1Y2UuanBlZw==',
      note: '4.3',
      drive_time: '20 - 30mn',
      logo:'https://upload.wikimedia.org/wikipedia/en/5/58/Momiji_logo.png',
      description:'VOTRE RESTAURANT MOMIJI VOUS PROPOSE UNE CARTE VARIÉE ET NOVATRICE. SUSHI, MAKI, CALIFORNIA, YAKITORI, SASHIMI ET BIEN D\'AUTRE POUR LE PLAISIR DE VOTRE PALAIS. DÉCOUVREZ LA CUISINE JAPONAISE À EMPORTER OU EN LIVRAISON.'

    },
    {
      name: 'Food Time',
      image: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9jNTMxMTVhOC0wZjExLTQ5YmUtYjIyNi0yYTc5YjgzMTA4MmI=',
      note: '4.2',
      drive_time: '25 - 35mn',
      logo:'https://static.wixstatic.com/media/fede01_9e31a39f1e2943b08795d4a91883fdb0~mv2.png/v1/fill/w_450,h_450,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo-FoodTime_edited_edited.png',
      description:'Food time vous propose la livraison de pizzas, burgers, pates, desserts..... Ouvert 7/7 de 21h à 5h'

    },
    {
      name: 'L\'escale',
      image: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC81OTI5MzU4Ni01NDk4LTQ5YTYtOGMzZS1lMzYzNTBkYmMzMTMuanBlZw==',
      note: '4.5',
      drive_time: '20 - 30mn',
      logo:'https://media-cdn.tripadvisor.com/media/photo-s/0e/84/e2/7c/l-escale-vous-accueille.jpg',
      description:'L\'escale est un restaurant sur une magnifique terrasse boisée démontable. L\'ambiance est chaleureuse, familiale. Notre carte se tourne. Spécialités de Moules Frites et produits de la mer.'

    },
    {
      name: 'M&A',
      image: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kdXl0NGg5bmZuajUwLmNsb3VkZnJvbnQubmV0L3Jlc2l6ZWQvMTU0NDA4NzMyMjk3Ni13NTUwLTdiLmpwZw==',
      note: '4.3',
      drive_time: '20 - 30mn',
      logo:'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kdXl0NGg5bmZuajUwLmNsb3VkZnJvbnQubmV0L3Jlc2l6ZWQvMTU0NDA4NzMyMjk3Ni13NTUwLTdiLmpwZw==',
      description:'M&A est un rextaurant spécialisé dans la réalisation des petits déjeuners.'

    },
    {
      name: 'Burger\'s Friends',
      image: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC81Mzk3YWEzOC0yYjRhLTRmOTItYmU4Ny1kZDE5YWEzNGU4MTQuanBlZw==',
      note: '3.8',
      drive_time: '30 - 40mn',
      logo:'data:image/png;base64,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',
      description:'Restaurant de burger avec une offre de qualité et des recettes originales. Une thématique jeune autour du monde des étudiants, nos burgers tels que "Le Harvard" (avec oeuf de caille) ou notre La Sorbonne (et sa raclette) vous régaleront les papilles.'

    },
  ]
  module.exports = info;