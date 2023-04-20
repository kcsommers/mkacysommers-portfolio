export interface ProjectSection {
  text?: {
    content: string;
  };
  images?: string[];
}

export interface Project {
  title: string;
  param: string;
  blurb: string;
  tools: string[];
  coverImage: string;
  links?: {
    github?: string;
    site?: string;
  };
  sections: ProjectSection[];
  roles?: string[];
}

export const projects: { [projectType: string]: Project[] } = {
  'Full Time': [
    {
      title: 'Peerspace',
      param: 'peerspace',
      blurb:
        'Full time front end engineering role for Peerspace, a peer-to-peer marketplace for hourly rentals of event, meeting and production venues.',
      tools: [
        'React',
        'Next.js',
        'Git',
        'Docker',
        'Google Optimize',
        'Circle CI',
        'Contentful',
      ],
      links: {
        site: 'https://www.peerspace.com/',
      },
      coverImage:
        'https://res.cloudinary.com/kcsommers/image/upload/v1672717870/M%20Kacy%20Sommers/peerspace/peerspace-1.png',
      roles: ['Front End Engineer'],
      sections: [
        {
          images: [
            'https://res.cloudinary.com/kcsommers/image/upload/v1672717778/M%20Kacy%20Sommers/peerspace/peerspace-2.png',
          ],
        },
        {
          text: {
            content:
              'I joined Peerspace in March of 2022, excited to drop into the fast paced environment of this growing startup. Initially I was placed on the SEO team, and worked closely with product, marketing and design to execute long term strategies for improving traffic, CTR and convesion. I learned a great deal about SEO best practices and was able to watch our numbers climb as we implemented our strategies.',
          },
        },
        {
          text: {
            content:
              'During my time on this team the company underwent a rebrand, and I was tasked with leading the development of the new homepage. The designs for this rebranded page were ambitious, with complex scroll animations and lots and lots of high res images. As this was our main landing page, performace was of top concern. I built the page with a constant eye on lighthouse scores, employing strategies like code splitting, css inlining and image optimization.',
          },
          images: [
            'https://res.cloudinary.com/kcsommers/image/upload/v1672717813/M%20Kacy%20Sommers/peerspace/peerspace-4.png',
          ],
        },
        {
          text: {
            content:
              'After the rebrand I moved deeper into the funnel, and began working in our bookings and checkout flows. In order to collect data on the features our users would utilize, we deployed painted door and A/B tests to gather information and decide on worthwhile features, e.g. split payments, buy now pay later, and differing fee structures.',
          },
          images: [
            'https://res.cloudinary.com/kcsommers/image/upload/v1672717981/M%20Kacy%20Sommers/peerspace/peerspace-3.png',
          ],
        },
      ],
    },
    {
      title: 'Adaptiva',
      param: 'adaptiva',
      blurb:
        'Full time front end engineering role for Adaptiva, an industry leading endpoint management software company based in Bellevue, WA.',
      tools: ['Angular', 'SCSS', 'D3', 'Git', 'Java', 'SQL'],
      coverImage:
        'https://res.cloudinary.com/kcsommers/image/upload/v1643244724/M%20Kacy%20Sommers/adaptiva/adaptiva-7.png',
      roles: ['Front End Engineer'],
      sections: [
        {
          images: [
            'https://res.cloudinary.com/kcsommers/image/upload/v1643243526/M%20Kacy%20Sommers/adaptiva/adaptiva-1.png',
          ],
        },
        {
          text: {
            content:
              "I was brought on to Adaptiva's engineering team in November of 2018 as an entry level developer. As one of the company's first front end hires, our initial goal was to create a more modern UI for the browser which would replace the company's outdated native UI. The new cloud based framework was written in Angular, a framework which pairs well with Java, Adaptiva's primary back end language.",
          },
        },
        {
          text: {
            content:
              'With massive customers such as Walmart and the US Department of Defense, a primary challenge the front end team dealt with regularly was building UI which intuitively represented their data without overwhelming and potentially crashing the browser. To address this challenge we often employed web workers to offload intensive processes from the main javascript thread.',
          },
          images: [
            'https://res.cloudinary.com/kcsommers/image/upload/v1643243515/M%20Kacy%20Sommers/adaptiva/adaptiva-2.png',
          ],
        },
        {
          text: {
            content:
              'As our Angular codebase grew and we continued to ship new products, we hired new developers to focus on existing products as the senior team made improvements and added new features to the platform. Scalability was a main concern, as poorly designed code quickly became apparent during intense sprints. The lessons learned from these designs and the experience gained from fixing them gave me very valuable insight into proper app architecture.',
          },
        },
        {
          text: {
            content:
              'As a senior engineer on the platform team, I was able to take on some very interesting and challening projects. One such project was a vast improvement to our existing UI building tool. The result was a SquareSpace like experience which our customers and support team could use to build custom dashboards in minutes. This greatly improved product demoability, as any data could be quickly visualized without writing any code.',
          },
          images: [
            'https://res.cloudinary.com/kcsommers/image/upload/v1643243514/M%20Kacy%20Sommers/adaptiva/adaptiva-3.png',
          ],
        },
        {
          text: {
            content:
              "During my years at Adaptiva I gained invaluable knowledge and professional experience as a developer. As this was my first full time role, I'm forever grateful to the company for taking a chance on hiring me, for trusting me with significant and challenging deliverables, and providing me with plenty of room to grow on a team of incredibly talented engineers I could continuously learn from.",
          },
        },
      ],
    },
  ],
  Freelance: [
    {
      title: 'Statrookie - Financials Junior GM',
      param: 'statrookie',
      roles: ['Front End Engineer', 'Designer'],
      blurb:
        'Lead front end engineer developing a web based game for Statrookie, a startup focusing on equitable math education and data literacy through sports analytics.',
      tools: ['React', 'Typescript', 'SCSS', 'Lerna', 'Framer Motion', 'Git'],
      coverImage:
        'https://res.cloudinary.com/kcsommers/image/upload/v1643697784/M%20Kacy%20Sommers/statrookie/statrookie-9.png',
      links: {
        github: 'https://github.com/kcsommers/project2-bookkeeper',
        site: 'https://bookkeeper212.herokuapp.com/',
      },
      sections: [
        {
          images: [
            'https://res.cloudinary.com/kcsommers/image/upload/v1643243496/M%20Kacy%20Sommers/statrookie/statrookie-1.png',
          ],
        },
        {
          text: {
            content:
              "In January of 2021 I began building a game designed to help 2nd and 3rd graders build their skills in math and statistics by acting as the general manager of a hockey team. Statrookie's client was the San Jose Sharks, who launched the game a part of their free education programs for communities across northern California.",
          },
          images: [
            'https://res.cloudinary.com/kcsommers/image/upload/v1643243497/M%20Kacy%20Sommers/statrookie/statrookie-2.png',
            'https://res.cloudinary.com/kcsommers/image/upload/v1643243499/M%20Kacy%20Sommers/statrookie/statrookie-6.png',
          ],
        },
        {
          text: {
            content:
              "This project was a great opportunity for me to build something from scratch that would be widely used by a large organization. With a tight deadline and ever changing demands, the initial version was tightly coupled with the original customer. Understanding the limitations this presents for scalability, it's been a continuous undertaking to abstract the core components and logic into a separate libraries to be reused for new customers as the company continues to grow.",
          },
          images: [
            'https://res.cloudinary.com/kcsommers/image/upload/v1643243498/M%20Kacy%20Sommers/statrookie/statrookie-4.png',
          ],
        },
        {
          text: {
            content:
              'One unique challenge in this project was the creative use of SVG elements and animations as interactive props in the game. The complex animations were achieved using a React library called Framer Motion. I also used this library to animate an interactive tutorial that students could walk through the first time they played the game.',
          },
          images: [
            'https://res.cloudinary.com/kcsommers/image/upload/v1643243498/M%20Kacy%20Sommers/statrookie/statrookie-3.png',
          ],
        },
      ],
    },
    {
      title: 'Sonrisa Donuts',
      param: 'sonrisa',
      roles: ['Full Stack Developer', 'Designer'],
      blurb:
        'Full stack ecommerce site developed end to end for Seattle based bakery Sonrisa Donuts.',
      tools: [
        'React',
        'Typescript',
        'SCSS',
        'Node',
        'Express',
        'Square',
        'Google APIs',
      ],
      coverImage:
        'https://res.cloudinary.com/kcsommers/image/upload/v1643243498/M%20Kacy%20Sommers/sonrisa/sonrisa-1.png',
      links: {
        github: 'https://github.com/kcsommers/project2-bookkeeper',
        site: 'https://bookkeeper212.herokuapp.com/',
      },
      sections: [
        {
          images: [
            'https://res.cloudinary.com/kcsommers/image/upload/v1643243497/M%20Kacy%20Sommers/sonrisa/sonrisa-2.png',
          ],
        },
        {
          text: {
            content:
              "Sonrisa was a fun project I worked on for a baker new to the Seattle area trying to improve their presence on the web. It is integrated with the client's square account and utilizes Square's SDK and API for online ordering. It also uses the Gmail API to send notifications and confirmations when orders are placed.",
          },
        },
        {
          text: {
            content:
              "While I certainly consider myself more of a coder than a designer, I was really able to exercise my design chops for this project. I took professional photos of the client's donuts for the site, and photoshoped the images to fit into my design.",
          },
          images: [
            'https://res.cloudinary.com/kcsommers/image/upload/v1643243497/M%20Kacy%20Sommers/sonrisa/sonrisa-3.png',
            'https://res.cloudinary.com/kcsommers/image/upload/v1643243495/M%20Kacy%20Sommers/sonrisa/sonrisa-4.png',
          ],
        },
      ],
    },
    {
      title: 'Lichter Photography',
      param: 'lichter-photo',
      roles: ['Front End Developer'],
      blurb:
        'Front End Developer adding custom features to a Photoshelter website for photographer Michael Lichter.',
      tools: [
        'Javascript',
        'CSS',
        'Webpack',
        'Babel',
        'jsDelivr',
        'Photoshelter',
        'Webflow',
      ],
      coverImage:
        'https://res.cloudinary.com/kcsommers/image/upload/v1643243815/M%20Kacy%20Sommers/lichter%20photo/lichterphoto1.jpg',
      links: {
        github: 'https://github.com/kcsommers/project2-bookkeeper',
        site: 'https://bookkeeper212.herokuapp.com/',
      },
      sections: [
        {
          images: [
            'https://res.cloudinary.com/kcsommers/image/upload/v1643243814/M%20Kacy%20Sommers/lichter%20photo/lichterphoto2.jpg',
          ],
        },
        {
          text: {
            content:
              'For this project I was brought on to add some very specific feature requests to an existing Photoshelter site. Photoshelter is pretty rigid in the customizations it allows, and some of the features required some clever workarounds.',
          },
          images: [
            'https://res.cloudinary.com/kcsommers/image/upload/v1643243814/M%20Kacy%20Sommers/lichter%20photo/lichterphoto4.jpg',
          ],
        },
        {
          text: {
            content:
              'To integrate these features I injected external scripts in the head of the Photoshelter html using jsDeliver. I also used babel polyfills and webpack dev server for a better development experience and utilized webpack for a production build.',
          },
        },
        {
          text: {
            content:
              "Occasionally the client made feature requests that simply weren't possible on the Photoshelter platform. For these request I redirected certain URLs to webflow to display fully customized pages which interacted with Photoshelter's API to retrieve data.",
          },
          images: [
            'https://res.cloudinary.com/kcsommers/image/upload/v1643243816/M%20Kacy%20Sommers/lichter%20photo/lichterphoto3.jpg',
            'https://res.cloudinary.com/kcsommers/image/upload/v1643243815/M%20Kacy%20Sommers/lichter%20photo/lichterphoto5.jpg',
          ],
        },
      ],
    },
    {
      title: 'K9 Precheck',
      param: 'k9precheck',
      roles: ['Full Stack Developer', 'Designer'],
      blurb: "Details a'comin",
      tools: ['Angular', 'Node', 'Express', 'Smartsheet API'],
      coverImage:
        'https://res.cloudinary.com/kcsommers/image/upload/v1643244169/M%20Kacy%20Sommers/k9precheck/k9precheck-1.png',
      links: {
        github: 'https://github.com/kcsommers/project2-bookkeeper',
        site: 'https://bookkeeper212.herokuapp.com/',
      },
      sections: [
        {
          images: [
            'https://res.cloudinary.com/kcsommers/image/upload/v1643244169/M%20Kacy%20Sommers/k9precheck/k9precheck-1.png',
          ],
        },
      ],
    },
    {
      title: 'Lo Wolf Music',
      param: 'lowolf-music',
      roles: ['Full Stack Developer', 'Designer'],
      blurb:
        'Website for singer-songwriter Lo Wolf, with a store for purchasing digital tracks and hard copies, and an admin page for logging transactions, adding shows and keeping track of new subscribers.',
      tools: ['Vue', 'Node', 'Express', 'Postgresql', 'Sequelize'],
      coverImage:
        'https://res.cloudinary.com/kcsommers/image/upload/v1643243798/M%20Kacy%20Sommers/lo%20wolf%20music/lowolf.jpg',
      links: {
        github: 'https://github.com/kcsommers/lowolf_music',
        site: 'https://stoic-brattain-759a73.netlify.com',
      },
      sections: [
        {
          images: [
            'https://res.cloudinary.com/kcsommers/image/upload/v1643243798/M%20Kacy%20Sommers/lo%20wolf%20music/lowolf1.jpg',
          ],
        },
        {
          text: {
            content:
              'This website for Asheville based singer/songwrite Lo Wolf provides visitors with information about her latest shows, music and blogposts, as well as the ability to purchase digital and hard copies of her album. Visitors can also easily subsribe to the mailing list with a few clicks.\n\nBuilt with Vue.js, the site is a single page application with a protected admin route which the client can use to access the sites dashboard. There she is able to keep track of all of her transactions, including buyer information for shipping orders and marking them complete. She also has the ability to add new shows, and is notified when a new subscriber has been added to the email list.\nAs I continue to expand on this project I plan on integrating an Instagram feed with a link to follow. And as the artist creates new content and begins selling merchandise I hope to develop a full store.',
          },
        },
        {
          images: [
            'https://res.cloudinary.com/kcsommers/image/upload/v1643243797/M%20Kacy%20Sommers/lo%20wolf%20music/lowolf3.jpg',
            'https://res.cloudinary.com/kcsommers/image/upload/v1643243797/M%20Kacy%20Sommers/lo%20wolf%20music/lowolf4.jpg',
            'https://res.cloudinary.com/kcsommers/image/upload/v1643243798/M%20Kacy%20Sommers/lo%20wolf%20music/lowolf2.jpg',
            'https://res.cloudinary.com/kcsommers/image/upload/v1643243798/M%20Kacy%20Sommers/lo%20wolf%20music/lowolf6.jpg',
            'https://res.cloudinary.com/kcsommers/image/upload/v1643243798/M%20Kacy%20Sommers/lo%20wolf%20music/lowolf5.jpg',
          ],
        },
      ],
    },
  ],
  'Early Days': [
    {
      title: 'Bookkeeper',
      param: 'bookkeeper',
      roles: ['Full Stack Developer', 'Designer'],
      blurb:
        'Node application for finding or creating book clubs, organizing books into customized lists, and storing notes and quotes.',
      tools: [
        'HTML5',
        'CSS',
        'Materialize',
        'JavaScript',
        'jQuery',
        'Node',
        'Express',
        'Postgresql',
        'Sequelize',
      ],
      coverImage:
        'https://res.cloudinary.com/kcsommers/image/upload/v1643243829/M%20Kacy%20Sommers/bookkeeper/bookkeeper.jpg',
      links: {
        github: 'https://github.com/kcsommers/project2-bookkeeper',
        site: 'https://bookkeeper212.herokuapp.com/',
      },
      sections: [
        {
          images: [
            'https://res.cloudinary.com/kcsommers/image/upload/v1643243830/M%20Kacy%20Sommers/bookkeeper/bookkeeper1.jpg',
          ],
        },
        {
          text: {
            content:
              "Bookkeeper is a full stack node application which allows users to find or create book clubs with other users, organize books into customized lists, and store their notes and favorite quotes.\nAs an avid reader I am often doggearing pages with the intention of going back and recording the quote that stood out, or a thought that occurred while reading that page.Bookkeeper makes this easy, and keeps every note and quote organized per book.Users can also divide their books into lists, allowing them to show off their favorites, keep track of ones they'd like to read, or organize them any way they'd prefer.\n\nThis application also allows users to find other people who have read the books on their lists, and create online discussion groups.",
          },
          images: [
            'https://res.cloudinary.com/kcsommers/image/upload/v1643243830/M%20Kacy%20Sommers/bookkeeper/bookkeeper3.jpg',
          ],
        },
        {
          images: [
            'https://res.cloudinary.com/kcsommers/image/upload/v1643243829/M%20Kacy%20Sommers/bookkeeper/bookkeeper2.jpg',
            'https://res.cloudinary.com/kcsommers/image/upload/v1643243830/M%20Kacy%20Sommers/bookkeeper/bookkeeper5.jpg',
          ],
        },
      ],
    },
    {
      title: 'Good Market',
      param: 'good-market',
      roles: ['Full Stack Developer', 'Designer'],
      blurb:
        "Full stack ecommerce site for buying and selling items, and donating portions of each sale to an organization of the user's choosing.",
      tools: [
        'HTML5',
        'CSS',
        'jQuery',
        'Python',
        'Django',
        'Postgresql',
        'Sequelize',
      ],
      coverImage:
        'https://res.cloudinary.com/kcsommers/image/upload/v1643243739/M%20Kacy%20Sommers/good%20market/goodmarket.jpg',
      links: {
        github: 'https://github.com/kcsommers/project2-bookkeeper',
        site: 'https://bookkeeper212.herokuapp.com/',
      },
      sections: [
        {
          images: [
            'https://res.cloudinary.com/kcsommers/image/upload/v1643243739/M%20Kacy%20Sommers/good%20market/goodmarket2.jpg',
          ],
        },
        {
          text: {
            content:
              "Good Market is a full stack ecommerce site, developed with Python and Django, which allows users to post items for sale, select a charity or organization and decide how much of their profit to donate.\nMuch like Craigslist or OfferUp, Good Market can be used to buy or sell used items of all kinds.The difference being that Good Market also provides an easy way to donate a portion of the sale to a good cause.Sellers decide where the money goes and how much to give, and buyers know exactly where their money is going.\nThis is a functioning ecommerce site, utilizing Stripe's API as a registered platform which acts as a liason between buyers and sellers. Users can purchase items from their cart from multiple vendors at once, and funds will be transfered appropriately. The chosen donation percentage is deducted and stored on the Good Market platform, and tracked in the Charity model of our Postgres database.",
          },
        },
        {
          images: [
            'https://res.cloudinary.com/kcsommers/image/upload/v1643243739/M%20Kacy%20Sommers/good%20market/goodmarket1.jpg',
            'https://res.cloudinary.com/kcsommers/image/upload/v1643243738/M%20Kacy%20Sommers/good%20market/goodmarket3.jpg',
            'https://res.cloudinary.com/kcsommers/image/upload/v1643243740/M%20Kacy%20Sommers/good%20market/goodmarket4.jpg',
          ],
        },
      ],
    },
    {
      title: 'Star Stacker',
      param: 'star-stacker',
      roles: ['Full Stack Developer', 'Designer'],
      blurb:
        'Two player front-end game, based on SEGA’s Columns, in which players match colored pieces vertically, horizontally and diagonally as they drop down the screen at increasing speeds.',
      tools: ['HTML5', 'CSS', 'CSS Canvas', 'JavaScript', 'jQuery'],
      coverImage:
        'https://res.cloudinary.com/kcsommers/image/upload/v1643243757/M%20Kacy%20Sommers/star%20stacker/starstacker.jpg',
      links: {
        github: 'https://github.com/kcsommers/Star_Stacker/tree/master',
        site: 'https://kcsommers.github.io/Star_Stacker/',
      },
      sections: [
        {
          images: [
            'https://res.cloudinary.com/kcsommers/image/upload/v1643243758/M%20Kacy%20Sommers/star%20stacker/starstacker2.jpg',
          ],
        },
        {
          text: {
            content:
              "Based on SEGA’s Columns, this two player front end game requires players to match colored pieces vertically, horizontally and diagonally as they drop down the screen at increasing speeds.\nColumns was(and still is) one of my favorite video games, and I was very excited to be able to create my own spin on it using JavaScript and CSS Canvas.The goal is to move and match the stacks around the grid, surviving as long as you can before the pieces reach the top(much like Tetris).More points are scored if the disappearing pieces allow the ones above to drop again and create new matches.\nThere is a lot of logic to this game, and a lot of potential bugs.In order to track them down, I often had to use Chrome's developer tools to watch the JavaScript execute one step at a time. As one of the first projects I'd ever developed, I certainly grew a lot as a developer from the challenges this game presented.",
          },
        },
        {
          images: [
            'https://res.cloudinary.com/kcsommers/image/upload/v1643243758/M%20Kacy%20Sommers/star%20stacker/starstacker4.jpg',
            'https://res.cloudinary.com/kcsommers/image/upload/v1643243758/M%20Kacy%20Sommers/star%20stacker/starstacker3.jpg',
            'https://res.cloudinary.com/kcsommers/image/upload/v1643243758/M%20Kacy%20Sommers/star%20stacker/starstacker1.jpg',
          ],
        },
      ],
    },
  ],
};
