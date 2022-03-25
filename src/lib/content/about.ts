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
      description: 'Built with SvelteKit and Tailwind CSS, based on a template by Ryan Fitzgerald',
      link: 'https://github.com/nawhi/nickwhite.cc'
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
      technologies: ['Node.js', 'Terraform', 'React.js', 'TypeScript'],
      bio: [
        'Built a feed of hotel prices and scaled it from scratch to serving a million prices a day from over 1,000 hotels. The prices were sourced from user tracking, screen-scraping and algorithmic inference.',
        'Currently working on a customisable on-site messages tool.',
        'Triptease engineers work full-stack, including all development, ops and SRE, in small autonomous squads.'
      ]
    },
    {
      name: 'Codurance',
      description: ['Software Craftsman, 2019', 'Apprentice, 2018 - 2019'],
      link: 'https://codurance.com',
      technologies: ['C++', 'Java', 'PostgreSQL'],
      bio: [
        'Worked in a team of consultants at a fintech, setting up CI pipelines, modernising existing C++ server-side infrastructure, and helping to build new Java microservices.',
        'As Apprentice, completed a three-month program (now Codurance Academy) learning essential skills in software design, Extreme Programming practices, Clean Code, and Domain-Driven Design.'
      ]
    },
    {
      name: 'FilmLight',
      description: ['Software Developer, 2017 - 2018', 'Intern, 2016 - 2017'],
      link: 'https://filmlight.ltd.uk',
      technologies: ['C', 'C++', '*nix'],
      bio: [
        'Worked on hardware interfaces on a film post-processing system, full-stack from usability testing and UI implementation, down to optimising the display drivers.',
        'Wrote an xUnit-style unit test framework for the in-house scripting language ICI (similar to Perl or early JavaScript - see http://atrn.org/ici/).',
        'As an intern, built automated testing harnesses, helped maintain the FilmLight intranet, and built PCs for developer use.'
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
