export interface Project {
  title: string;
  snippet: string;
  description: string;
  tools: string[];
  images: string[];
  links: {
    github: string;
    site: string;
  }
}

export const projects: Project[] = [
  {
    title: 'Lo Wolf Music',
    snippet: 'Website for singer-songwriter Lo Wolf, with a store for purchasing digital tracks and hard copies, and an admin page for logging transactions, adding shows and keeping track of new subscribers.',
    description: 'This website for Asheville based singer/songwrite Lo Wolf provides visitors with information about her latest shows, music and blogposts, as well as the ability to purchase digital and hard copies of her album. Visitors can also easily subsribe to the mailing list with a few clicks.\n\nBuilt with Vue.js, the site is a single page application with a protected admin route which the client can use to access the sites dashboard. There she is able to keep track of all of her transactions, including buyer information for shipping orders and marking them complete. She also has the ability to add new shows, and is notified when a new subscriber has been added to the email list.\nAs I continue to expand on this project I plan on integrating an Instagram feed with a link to follow. And as the artist creates new content and begins selling merchandise I hope to develop a full store.',
    tools: ['Vue', 'Node', 'Express', 'Postgresql', 'Sequelize'],
    images: ['lowolf.jpg', 'lowolf1.jpg', 'lowolf2.jpg', 'lowolf3.jpg', 'lowolf4.jpg', 'lowolf5.jpg', 'lowolf6.jpg'],
    links: {
      github: 'https://github.com/kcsommers/lowolf_music',
      site: 'https://stoic-brattain-759a73.netlify.com'
    }
  },
  {
    title: 'Bookkeeper',
    snippet: 'Node application for finding or creating book clubs, organizing books into customized lists, and storing notes and quotes.',
    description: 'Bookkeeper is a full stack node application which allows users to find or create book clubs with other users, organize books into customized lists, and store their notes and favorite quotes.\nAs an avid reader I am often doggearing pages with the intention of going back and recording the quote that stood out, or a thought that occurred while reading that page.Bookkeeper makes this easy, and keeps every note and quote organized per book.Users can also divide their books into lists, allowing them to show off their favorites, keep track of ones they\'d like to read, or organize them any way they\'d prefer.\n\nThis application also allows users to find other people who have read the books on their lists, and create online discussion groups.',
    tools: ['HTML5', 'CSS', 'Materialize', 'JavaScript', 'jQuery', 'Node', 'Express', 'Postgresql', 'Sequelize'],
    images: ['bookkeeper.jpg', 'bookkeeper1.jpg', 'bookkeeper2.jpg', 'bookkeeper3.jpg', 'bookkeeper4.jpg', 'bookkeeper5.jpg', 'bookkeeper6.jpg', 'bookkeeper7.jpg'],
    links: {
      github: 'https://github.com/kcsommers/project2-bookkeeper',
      site: 'https://bookkeeper212.herokuapp.com/'
    }
  },
  {
    title: 'Good Market',
    snippet: 'Full stack ecommerce site for buying and selling items, and donating portions of each sale to an organization of the user\'s choosing.',
    description: 'Good Market is a full stack ecommerce site, developed with Python and Django, which allows users to post items for sale, select a charity or organization and decide how much of their profit to donate.\nMuch like Craigslist or OfferUp, Good Market can be used to buy or sell used items of all kinds.The difference being that Good Market also provides an easy way to donate a portion of the sale to a good cause.Sellers decide where the money goes and how much to give, and buyers know exactly where their money is going.\nThis is a functioning ecommerce site, utilizing Stripe\'s API as a registered platform which acts as a liason between buyers and sellers. Users can purchase items from their cart from multiple vendors at once, and funds will be transfered appropriately. The chosen donation percentage is deducted and stored on the Good Market platform, and tracked in the Charity model of our Postgres database.',
    tools: ['HTML5', 'CSS', 'jQuery', 'Python', 'Django', 'Postgresql', 'Sequelize'],
    images: ['goodmarket.jpg', 'goodmarket1.jpg', 'goodmarket2.jpg', 'goodmarket3.jpg', 'goodmarket4.jpg', 'goodmarket5.jpg'],
    links: {
      github: 'https://github.com/kcsommers/project2-bookkeeper',
      site: 'https://bookkeeper212.herokuapp.com/'
    }
  },
  {
    title: 'Star Stacker',
    snippet: 'Two player front-end game, based on SEGA’s Columns, in which players match colored pieces vertically, horizontally and diagonally as they drop down the screen at increasing speeds.',
    description: 'Based on SEGA’s Columns, this two player front end game requires players to match colored pieces vertically, horizontally and diagonally as they drop down the screen at increasing speeds.\nColumns was(and still is) one of my favorite video games, and I was very excited to be able to create my own spin on it using JavaScript and CSS Canvas.The goal is to move and match the stacks around the grid, surviving as long as you can before the pieces reach the top(much like Tetris).More points are scored if the disappearing pieces allow the ones above to drop again and create new matches.\nThere is a lot of logic to this game, and a lot of potential bugs.In order to track them down, I often had to use Chrome\'s developer tools to watch the JavaScript execute one step at a time. As one of the first projects I\'d ever developed, I certainly grew a lot as a developer from the challenges this game presented.',
    tools: ['HTML5', 'CSS', 'CSS Canvas', 'JavaScript', 'jQuery'],
    images: ['starstacker.jpg', 'starstacker1.jpg', 'starstacker2.jpg', 'starstacker3.jpg', 'starstacker4.jpg'],
    links: {
      github: 'https://github.com/kcsommers/Star_Stacker/tree/master',
      site: 'https://kcsommers.github.io/Star_Stacker/'
    }
  },
  {
    title: 'Bookkeeper',
    snippet: 'Node application for finding or creating book clubs, organizing books into customized lists, and storing notes and quotes.',
    description: 'Bookkeeper is a full stack node application which allows users to find or create book clubs with other users, organize books into customized lists, and store their notes and favorite quotes.\nAs an avid reader I am often doggearing pages with the intention of going back and recording the quote that stood out, or a thought that occurred while reading that page.Bookkeeper makes this easy, and keeps every note and quote organized per book.Users can also divide their books into lists, allowing them to show off their favorites, keep track of ones they\'d like to read, or organize them any way they\'d prefer.\n\nThis application also allows users to find other people who have read the books on their lists, and create online discussion groups.',
    tools: ['HTML5', 'CSS', 'Materialize', 'JavaScript', 'jQuery', 'Node', 'Express', 'Postgresql', 'Sequelize'],
    images: ['bookkeeper.jpg', 'bookkeeper1.jpg', 'bookkeeper2.jpg', 'bookkeeper3.jpg', 'bookkeeper4.jpg', 'bookkeeper5.jpg', 'bookkeeper6.jpg', 'bookkeeper7.jpg'],
    links: {
      github: 'https://github.com/kcsommers/project2-bookkeeper',
      site: 'https://bookkeeper212.herokuapp.com/'
    }
  },
  {
    title: 'Star Stacker',
    snippet: 'Two player front-end game, based on SEGA’s Columns, in which players match colored pieces vertically, horizontally and diagonally as they drop down the screen at increasing speeds.',
    description: 'Based on SEGA’s Columns, this two player front end game requires players to match colored pieces vertically, horizontally and diagonally as they drop down the screen at increasing speeds.\nColumns was(and still is) one of my favorite video games, and I was very excited to be able to create my own spin on it using JavaScript and CSS Canvas.The goal is to move and match the stacks around the grid, surviving as long as you can before the pieces reach the top(much like Tetris).More points are scored if the disappearing pieces allow the ones above to drop again and create new matches.\nThere is a lot of logic to this game, and a lot of potential bugs.In order to track them down, I often had to use Chrome\'s developer tools to watch the JavaScript execute one step at a time. As one of the first projects I\'d ever developed, I certainly grew a lot as a developer from the challenges this game presented.',
    tools: ['HTML5', 'CSS', 'CSS Canvas', 'JavaScript', 'jQuery'],
    images: ['starstacker.jpg', 'starstacker1.jpg', 'starstacker2.jpg', 'starstacker3.jpg', 'starstacker4.jpg'],
    links: {
      github: 'https://github.com/kcsommers/Star_Stacker/tree/master',
      site: 'https://kcsommers.github.io/Star_Stacker/'
    }
  },
  {
    title: 'Good Market',
    snippet: 'Full stack ecommerce site for buying and selling items, and donating portions of each sale to an organization of the user\'s choosing.',
    description: 'Good Market is a full stack ecommerce site, developed with Python and Django, which allows users to post items for sale, select a charity or organization and decide how much of their profit to donate.\nMuch like Craigslist or OfferUp, Good Market can be used to buy or sell used items of all kinds.The difference being that Good Market also provides an easy way to donate a portion of the sale to a good cause.Sellers decide where the money goes and how much to give, and buyers know exactly where their money is going.\nThis is a functioning ecommerce site, utilizing Stripe\'s API as a registered platform which acts as a liason between buyers and sellers. Users can purchase items from their cart from multiple vendors at once, and funds will be transfered appropriately. The chosen donation percentage is deducted and stored on the Good Market platform, and tracked in the Charity model of our Postgres database.',
    tools: ['HTML5', 'CSS', 'jQuery', 'Python', 'Django', 'Postgresql', 'Sequelize'],
    images: ['goodmarket.jpg', 'goodmarket1.jpg', 'goodmarket2.jpg', 'goodmarket3.jpg', 'goodmarket4.jpg', 'goodmarket5.jpg'],
    links: {
      github: 'https://github.com/kcsommers/project2-bookkeeper',
      site: 'https://bookkeeper212.herokuapp.com/'
    }
  },
  {
    title: 'Lo Wolf Music',
    snippet: 'Website for singer-songwriter Lo Wolf, with a store for purchasing digital tracks and hard copies, and an admin page for logging transactions, adding shows and keeping track of new subscribers.',
    description: 'This website for Asheville based singer/songwrite Lo Wolf provides visitors with information about her latest shows, music and blogposts, as well as the ability to purchase digital and hard copies of her album. Visitors can also easily subsribe to the mailing list with a few clicks.\n\nBuilt with Vue.js, the site is a single page application with a protected admin route which the client can use to access the sites dashboard. There she is able to keep track of all of her transactions, including buyer information for shipping orders and marking them complete. She also has the ability to add new shows, and is notified when a new subscriber has been added to the email list.\nAs I continue to expand on this project I plan on integrating an Instagram feed with a link to follow. And as the artist creates new content and begins selling merchandise I hope to develop a full store.',
    tools: ['Vue', 'Node', 'Express', 'Postgresql', 'Sequelize'],
    images: ['lowolf.jpg', 'lowolf1.jpg', 'lowolf2.jpg', 'lowolf3.jpg', 'lowolf4.jpg', 'lowolf5.jpg', 'lowolf6.jpg'],
    links: {
      github: 'https://github.com/kcsommers/lowolf_music',
      site: 'https://stoic-brattain-759a73.netlify.com'
    }
  },
  {
    title: 'Lo Wolf Music',
    snippet: 'Website for singer-songwriter Lo Wolf, with a store for purchasing digital tracks and hard copies, and an admin page for logging transactions, adding shows and keeping track of new subscribers.',
    description: 'This website for Asheville based singer/songwrite Lo Wolf provides visitors with information about her latest shows, music and blogposts, as well as the ability to purchase digital and hard copies of her album. Visitors can also easily subsribe to the mailing list with a few clicks.\n\nBuilt with Vue.js, the site is a single page application with a protected admin route which the client can use to access the sites dashboard. There she is able to keep track of all of her transactions, including buyer information for shipping orders and marking them complete. She also has the ability to add new shows, and is notified when a new subscriber has been added to the email list.\nAs I continue to expand on this project I plan on integrating an Instagram feed with a link to follow. And as the artist creates new content and begins selling merchandise I hope to develop a full store.',
    tools: ['Vue', 'Node', 'Express', 'Postgresql', 'Sequelize'],
    images: ['lowolf.jpg', 'lowolf1.jpg', 'lowolf2.jpg', 'lowolf3.jpg', 'lowolf4.jpg', 'lowolf5.jpg', 'lowolf6.jpg'],
    links: {
      github: 'https://github.com/kcsommers/lowolf_music',
      site: 'https://stoic-brattain-759a73.netlify.com'
    }
  },
  {
    title: 'Bookkeeper',
    snippet: 'Node application for finding or creating book clubs, organizing books into customized lists, and storing notes and quotes.',
    description: 'Bookkeeper is a full stack node application which allows users to find or create book clubs with other users, organize books into customized lists, and store their notes and favorite quotes.\nAs an avid reader I am often doggearing pages with the intention of going back and recording the quote that stood out, or a thought that occurred while reading that page.Bookkeeper makes this easy, and keeps every note and quote organized per book.Users can also divide their books into lists, allowing them to show off their favorites, keep track of ones they\'d like to read, or organize them any way they\'d prefer.\n\nThis application also allows users to find other people who have read the books on their lists, and create online discussion groups.',
    tools: ['HTML5', 'CSS', 'Materialize', 'JavaScript', 'jQuery', 'Node', 'Express', 'Postgresql', 'Sequelize'],
    images: ['bookkeeper.jpg', 'bookkeeper1.jpg', 'bookkeeper2.jpg', 'bookkeeper3.jpg', 'bookkeeper4.jpg', 'bookkeeper5.jpg', 'bookkeeper6.jpg', 'bookkeeper7.jpg'],
    links: {
      github: 'https://github.com/kcsommers/project2-bookkeeper',
      site: 'https://bookkeeper212.herokuapp.com/'
    }
  },
  {
    title: 'Good Market',
    snippet: 'Full stack ecommerce site for buying and selling items, and donating portions of each sale to an organization of the user\'s choosing.',
    description: 'Good Market is a full stack ecommerce site, developed with Python and Django, which allows users to post items for sale, select a charity or organization and decide how much of their profit to donate.\nMuch like Craigslist or OfferUp, Good Market can be used to buy or sell used items of all kinds.The difference being that Good Market also provides an easy way to donate a portion of the sale to a good cause.Sellers decide where the money goes and how much to give, and buyers know exactly where their money is going.\nThis is a functioning ecommerce site, utilizing Stripe\'s API as a registered platform which acts as a liason between buyers and sellers. Users can purchase items from their cart from multiple vendors at once, and funds will be transfered appropriately. The chosen donation percentage is deducted and stored on the Good Market platform, and tracked in the Charity model of our Postgres database.',
    tools: ['HTML5', 'CSS', 'jQuery', 'Python', 'Django', 'Postgresql', 'Sequelize'],
    images: ['goodmarket.jpg', 'goodmarket1.jpg', 'goodmarket2.jpg', 'goodmarket3.jpg', 'goodmarket4.jpg', 'goodmarket5.jpg'],
    links: {
      github: 'https://github.com/kcsommers/project2-bookkeeper',
      site: 'https://bookkeeper212.herokuapp.com/'
    }
  },
  {
    title: 'Star Stacker',
    snippet: 'Two player front-end game, based on SEGA’s Columns, in which players match colored pieces vertically, horizontally and diagonally as they drop down the screen at increasing speeds.',
    description: 'Based on SEGA’s Columns, this two player front end game requires players to match colored pieces vertically, horizontally and diagonally as they drop down the screen at increasing speeds.\nColumns was(and still is) one of my favorite video games, and I was very excited to be able to create my own spin on it using JavaScript and CSS Canvas.The goal is to move and match the stacks around the grid, surviving as long as you can before the pieces reach the top(much like Tetris).More points are scored if the disappearing pieces allow the ones above to drop again and create new matches.\nThere is a lot of logic to this game, and a lot of potential bugs.In order to track them down, I often had to use Chrome\'s developer tools to watch the JavaScript execute one step at a time. As one of the first projects I\'d ever developed, I certainly grew a lot as a developer from the challenges this game presented.',
    tools: ['HTML5', 'CSS', 'CSS Canvas', 'JavaScript', 'jQuery'],
    images: ['starstacker.jpg', 'starstacker1.jpg', 'starstacker2.jpg', 'starstacker3.jpg', 'starstacker4.jpg'],
    links: {
      github: 'https://github.com/kcsommers/Star_Stacker/tree/master',
      site: 'https://kcsommers.github.io/Star_Stacker/'
    }
  },
  {
    title: 'Good Market',
    snippet: 'Full stack ecommerce site for buying and selling items, and donating portions of each sale to an organization of the user\'s choosing.',
    description: 'Good Market is a full stack ecommerce site, developed with Python and Django, which allows users to post items for sale, select a charity or organization and decide how much of their profit to donate.\nMuch like Craigslist or OfferUp, Good Market can be used to buy or sell used items of all kinds.The difference being that Good Market also provides an easy way to donate a portion of the sale to a good cause.Sellers decide where the money goes and how much to give, and buyers know exactly where their money is going.\nThis is a functioning ecommerce site, utilizing Stripe\'s API as a registered platform which acts as a liason between buyers and sellers. Users can purchase items from their cart from multiple vendors at once, and funds will be transfered appropriately. The chosen donation percentage is deducted and stored on the Good Market platform, and tracked in the Charity model of our Postgres database.',
    tools: ['HTML5', 'CSS', 'jQuery', 'Python', 'Django', 'Postgresql', 'Sequelize'],
    images: ['goodmarket.jpg', 'goodmarket1.jpg', 'goodmarket2.jpg', 'goodmarket3.jpg', 'goodmarket4.jpg', 'goodmarket5.jpg'],
    links: {
      github: 'https://github.com/kcsommers/project2-bookkeeper',
      site: 'https://bookkeeper212.herokuapp.com/'
    }
  },
  {
    title: 'Star Stacker',
    snippet: 'Two player front-end game, based on SEGA’s Columns, in which players match colored pieces vertically, horizontally and diagonally as they drop down the screen at increasing speeds.',
    description: 'Based on SEGA’s Columns, this two player front end game requires players to match colored pieces vertically, horizontally and diagonally as they drop down the screen at increasing speeds.\nColumns was(and still is) one of my favorite video games, and I was very excited to be able to create my own spin on it using JavaScript and CSS Canvas.The goal is to move and match the stacks around the grid, surviving as long as you can before the pieces reach the top(much like Tetris).More points are scored if the disappearing pieces allow the ones above to drop again and create new matches.\nThere is a lot of logic to this game, and a lot of potential bugs.In order to track them down, I often had to use Chrome\'s developer tools to watch the JavaScript execute one step at a time. As one of the first projects I\'d ever developed, I certainly grew a lot as a developer from the challenges this game presented.',
    tools: ['HTML5', 'CSS', 'CSS Canvas', 'JavaScript', 'jQuery'],
    images: ['starstacker.jpg', 'starstacker1.jpg', 'starstacker2.jpg', 'starstacker3.jpg', 'starstacker4.jpg'],
    links: {
      github: 'https://github.com/kcsommers/Star_Stacker/tree/master',
      site: 'https://kcsommers.github.io/Star_Stacker/'
    }
  }
];