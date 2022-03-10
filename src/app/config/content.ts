export const content = {
  home: {
    hi: "Hey! I'm Ricardo Erikson!",
    presentationText: "I'm a Brazilian software engineer living and working in the Netherlands. I'm passionate about software design and high-quality code.",
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
            text: "My name is Ricardo, and I'm a Brazilian (🇧🇷) software engineer with 15+ years of experience in the software industry. I had the opportunity to collaborate with big players of the software industry like Nokia and Samsung. In the past year, I worked remotely for <a href='https://www.bairesdev.com'  target='blank' class='${ link.primary }'>BairesDev</a>, a software outsourcing company based in San Francisco, CA, USA. In addition, I worked as a Golang engineer and Tech Lead in the cloud solutions team of Abbott, a multinational medical device and health care company.",
            templates: ['link.primary']
          },
          {
            type: "text",
            text: "Currently, I live and work in Amsterdam, the Netherlands (🇳🇱). I work as a backend software engineer for <a href='https://sniptech.com'  target='blank' class='${ link.primary }'>SnipTech</a>, a company focused on creating a software platform for unifying financial services. I mainly use Golang, Docker, Kubernetes, Terraform and Google Cloud Platform (GCP) to build microservices.",
            templates: ['link.primary']
          },
          {
            type: "text",
            text: "During my professional career, I had the opportunity to work with many languages and technologies like Java, JavaScript, TypeScript, Python, Angular, React, Docker, Kubernetes, and AWS. Currently, I use Golang to build microservices and high-traffic distributed systems. None of those are in your tech stack? Bring it on! I learn fast."
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
              "Software development",
              "Recommender systems",
              "Decision-making",
              "Formula 1",
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
