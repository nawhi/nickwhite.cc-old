export const about = {
  siteUrl: 'https://nickwhite.cc',
  name: 'Nick White',
  pageTitle: 'Nick White',
  description: 'Software Engineer from London, UK.',
  github: 'https://github.com/nawhi',
  linkedin: 'https://www.linkedin.com/in/nick9white/',
  about: [
    'I am a polyglot developer who likes simple solutions to difficult problems, living documentation, just-in-time design and every single "craftsmanship" cliché.',
    'I believe I owe my success to a habit of ensuring I always have a deep understanding of the technologies I work with.',
    'Before joining the tech industry my background was in music, and I have always felt that software engineering is an art too - fundamentally a creative and collaborative activity.'
  ],
  projects: [
    {
      name: 'This website!',
      description: 'Built with Gatsby and Tailwind CSS, based on a template by Ryan Fitzgerald',
      link: '/'
    },
    {
      name: 'jq-tutorial',
      description: 'Interactive exercises for learning jq, a command-line JSON processor',
      link: 'https://github.com/nawhi/jq-tutorial'
    },
    {
      name: 'WebStorm Golf',
      description: 'A golf-themed way of learning to use the JetBrains WebStorm IDE',
      link: 'https://github.com/nawhi/webstorm-golf'
    },
    {
      name: 'Cloud Run Auth plugin for Insomnia',
      description: 'A plugin to add authentication headers for Google Cloud Run endpoints',
      link: 'https://insomnia.rest/plugins/insomnia-plugin-cloud-run-auth'
    }
  ],
  experience: [
    {
      name: 'Triptease',
      description: ['Senior Software Engineer, 2021 - pres.', 'Software Engineer, 2020 - 2021'],
      link: 'https://triptease.com',
      bio: [
        'Triptease makes SaaS products to help hoteliers increase their direct bookings. We work in autonomous cross-functional "squads" with full responsibility for full-stack development, testing, deployment, and monitoring.',
        'From summer 2020 to summer 2021, we built a feed of hotel prices to Google Hotel Ads and scaled it from scratch to over 1,000 hotels, serving a million prices a day. The prices come from on-site user tracking, screen-scraping and algorithmic inference.',
        'We are currently working on customisable on-site messages (e.g. showing a discount code to searchers who may have seen a cheaper price elsewhere). The work involves the UI of the messages themselves, the database where they are stored and data engineering to analyse and report on their performance.'
      ]
    },
    {
      name: 'Codurance',
      description: ['Software Craftsman, 2019', 'Apprentice, 2018 - 2019'],
      link: 'https://codurance.com',
      bio: [
        'I worked in a team of consultants at a fintech specialising in white-label corporate payments solutions. We set up and improved CI pipelines, scripted common SRE/maintenance tasks, and helped build new microservices. We also advised on best practices such as hexagonal architecture, TDD and pair programming.',
        'Before Bankable, I completed a three-month Apprenticeship Program (now Codurance Academy), learning essential skills in software design, XP practices, Clean Code, and Domain-Driven Design.'
      ]
    },
    {
      name: 'FilmLight',
      description: ['Software Developer, 2017 - 2018', 'Intern, 2016 - 2017'],
      link: 'https://filmlight.ltd.uk',
      bio: [
        "FilmLight produces colour grading systems for film & TV post-production. I designed and ran usability tests for the systems' control surfaces, capturing user behaviour with key-logging software and using the data to identify and resolve usability bottlenecks. I also worked on the controls' C++ display driver to improve its refresh rate and responsiveness.",
        'I wrote an xUnit-style unit test framework for the Perl-like in-house scripting language (ICI) used for most frontend code.',
        'Before starting as software engineer, I interned for 6 months as an assistant in automated testing and helped maintain the FilmLight intranet, whilst teaching myself to code using MIT OpenCourseWare courses.'
      ]
    }
  ],
  skills: [
    {
      name: 'Languages & Frameworks',
      description: 'JavaScript, TypeScript, Node.js, React, Java, Kotlin, C++, Python, Clojure'
    },
    {
      name: 'Databases',
      description:
        'Postgres (with pleasure), MongoDB (with less pleasure), Google BigQuery, Elasticsearch'
    },
    {
      name: 'Infrastructure',
      description: 'Amazon Web Services, Google Cloud Platform, Terraform, Airflow'
    },
    {
      name: 'Methodologies',
      description: 'Extreme Programming, Software Craftsmanship, Continuous Discovery'
    }
  ]
};

export type About = typeof about;
