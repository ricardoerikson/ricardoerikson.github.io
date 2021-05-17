export const content = {
  home: {
    hi: "Hey! I'm Ricardo Erikson!",
    presentationText: "I'm a software engineer from Brazil, and I'm passionate about software design and high-quality code.",
    links: [
      {
        url: "https://linkedin.com/in/ricardoerikson",
        classes: "fab fa-linkedin",
        tooltip: "LinkedIn"
      },
      {
        url: "https://twitter.com/ricardoerikson",
        classes: "fab fa-twitter",
        tooltip: "Twitter"
      },
      {
        url: "https://github.com/ricardoerikson",
        classes: "fab fa-github",
        tooltip: "GitHub"
      },
      {
        url: "https://stackoverflow.com/users/2102916/ricardo-erikson?tab=profile",
        classes: "fab fa-stack-overflow",
        tooltip: "Stack Overflow"
      },
      {
        url: "https://www.hackerrank.com/ricardoerikson",
        classes: "fab fa-hackerrank",
        tooltip: "HackerRank"
      },
      {
        url: "https://ricardoerikson.medium.com",
        classes: "fab fa-medium",
        tooltip: "Medium"
      },
      {
        url: "mailto:ricardo@ricardoerikson.me",
        classes: "fas fa-at",
        tooltip: "Email"
      }
    ]
  },
  about: {
    sections: [
      {
        level: 1,
        title: "About",
        paragraphs: [
          {
            type: "text",
            text: "My name is Ricardo, and I'm a software engineer with 10+ years of experience in the software industry. I had the opportunity to collaborate with big players of the software industry like Nokia and Samsung. Currently, I work for <a href='https://www.bairesdev.com' class='${ link.primary }'>BairesDev</a> as a Golang engineer.",
            templates: ['link.primary']
          },
          {
            type: "text",
            text: "During my professional career, I had the opportunity to work with many technologies like Java, JavaScript, TypeScript, Python, Angular, Docker, and most recently, Golang and React. None of those are in your tech stack? Bring it on! I learn fast."
          },
          {
            type: "text",
            text: "In my academic life, I have a Master's degree in the area of software components. In February 2021, I received a Ph.D. degree in the area of Recommender Systems from the Federal University of Minas Gerais (Brazil)."
          }
        ]
      },
      {
        level: 2,
        title: "Topics of interest",
        paragraphs: [
          {
            type: "list",
            text: 'My main topics of interest are the following (not necessarily in that order):',
            list: [
              "High performance in professionlinkClasal and personal life",
              "Derivatives/stocks market",
              "Software development",
              "Recommender systems",
              "Decision-making",
              "Running"
            ]
          },
          {
            type: "text",
            text: "Are you interested in any of those topics too? Feel free to reach out to me at <a class='${ link.primary }' href='mailto:ricardo@ricardoerikson.me'>ricardo@ricardoerikson.me</a>.",
            templates: ['link.primary']
          }
        ]
      }
    ]
  },
  contact: {
    sections: [
      {
        level: 1,
        title: 'Contact',
        paragraphs: [
          {
            type: 'text',
            text: 'Feel free to reach out to me at <a class="${ link.primary }" href="mailto:ricardo@ricardoerikson.me">ricardo@ricardoerikson.me</a>.',
            templates: ['link.primary']
          }
        ]
      },
      {
        level: 2,
        title: 'Follow me on social media',
        paragraphs: [
          {
            type: 'list',
            text: 'You can connect, follow me and send me messages on the following social media:',
            list: [
              '<a class="${ link.primary }" target="blank" href="https://linkedin.com/in/ricardoerikson">LinkedIn</a>',
              '<a class="${ link.primary }" target="blank" href="https://twitter.com/ricardoerikson">Twitter</a>',
              '<a class="${ link.primary }" target="blank" href="https://github.com/ricardoerikson">GitHub</a>',
              '<a class="${ link.primary }" target="blank" href="https://stackoverflow.com/users/2102916/ricardo-erikson?tab=profile">StackOverflow</a>',
              '<a class="${ link.primary }" target="blank" href="https://www.hackerrank.com/ricardoerikson">HackerRank</a>',
              '<a class="${ link.primary }" target="blank" href="https://ricardoerikson.medium.com">Medium</a>'
            ],
            templates: ['link.primary']
          }
        ]
      }
    ]
  },
  blog: {
    sections: [
      {
        level: 1,
        title: 'Blog',
        paragraphs: [
          {
            type: 'text',
            text: "I'm posting my texts on <a class='${ link.primary }' target='blank' href='https://ricardoerikson.medium.com/'>Medium</a>. Feel free to leave your comments in my publications. Follow me on <a class='${ link.primary }' target='blank' href='https://ricardoerikson.medium.com/'>Medium</a> to receive alerts in future publications.",
            templates: ['link.primary']
          }
        ]
      },
      {
        level: 2,
        title: 'My recent publications',
        paragraphs: [
          {
            type: 'post',
            title: 'Memory Allocation and Performance in Golang Maps',
            link: 'https://levelup.gitconnected.com/memory-allocation-and-performance-in-golang-maps-b267b5ad9217',
            where: 'LevelUp Coding',
            whereLink: 'https://levelup.gitconnected.com/',
            when: 'Jan 25, 2021'
          }
        ]
      }
    ]
  }
}
