// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'teyteymey', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Tatiana Meyer',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'tatiana-meyer-uran',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://www.tatianameyer.dev',
    phone: '',
    email: 'tatianameyeru@gmail.com',
  },
  resume: {
    fileUrl:
      'https://github.com/teyteymey/portfolio/blob/main/src/assets/Tatiana_Meyer_CV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Python',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'AWS',
    'Kubernetes',
    'React.js',
    'Node.js',
  ],
  experiences: [
    {
      company: 'Booking.com',
      position: 'Software Engineer I',
      from: 'January 2023',
      to: 'Present',
      companyLink: 'https://booking.com',
    },
    {
      company: 'Booking.com',
      position: 'Junior Software Engineer',
      from: 'September 2023',
      to: 'December 2024',
      companyLink: 'https://booking.com',
    },
    {
      company: 'Deloitte',
      position: 'Analyst',
      from: 'April 2023',
      to: 'July 2023',
      companyLink: 'https://deloitte.com',
    },
    {
      company: 'Polytechnic University of Catalonia ',
      position: 'Software Architect Internship',
      from: 'September 2022',
      to: 'January 2023',
    },
  ],
  certifications: [
    {
      name: 'Google Cloud Certified - Cloud Digital Leader',
      body: 'A Cloud Digital Leader can articulate the capabilities of Google Cloud core products and services and how they benefit organizations. They can also describe common business use cases and how cloud solutions support an enterprise.',
      year: 'April 2023',
      link: 'https://www.credential.net/4ec13fc6-d0a8-4939-a918-a9d218b7563c#acc.Hkth1RCn',
    },
    {
      name: 'CS50’s Introduction to Artificial Intelligence with Python',
      body: 'This course explores the concepts and algorithms at the foundation of modern artificial intelligence, diving into the ideas that give rise to technologies like game-playing engines, handwriting recognition, and machine translation. Through hands-on projects, students gain exposure to the theory behind graph search algorithms, classification, optimization, machine learning, large language models, and other topics in artificial intelligence as they incorporate them into their own Python programs.',
      year: 'May 2024 - In Progress',
      link: 'https://cs50.harvard.edu/ai/2024/',
    },
    {
      name: 'Other courses',
      body: 'Find more details on my LinkedIn profile. They are not listed here for brevity.',
      link: 'https://www.linkedin.com/in/tatiana-meyer-uran/',
    },
  ],
  educations: [
    {
      institution: 'Polytechnic University of Catalonia (UPC)',
      degree: 'Bachelor in Informatics Engineering (Computer Science)',
      from: '2019',
      to: '2023',
    },
    {
      institution: 'Hogeschool Saxion',
      degree: 'Erasmus + programme, Advanced App Developmenent',
      from: 'February 2022',
      to: 'July 2022',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // }
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'light',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
