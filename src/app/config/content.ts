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
        url: "https://www.hackerrank.com/ricardoerikson",
        classes: "fab fa-hackerrank",
        tooltip: "HackerRank"
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
            text: "My name is Ricardo, and I'm a software engineer with 10+ years of experience in the software industry. I had the opportunity to collaborate with big players of the software industry like Nokia and Samsung. Currently, I work for <a href='https://www.bairesdev.com' class='${ linkClass }'>BairesDev</a> as a Golang engineer.",
            templates: ['linkClass']
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
              "High performance in professional and personal life",
              "Derivatives/stocks market",
              "Software development",
              "Decision-making",
              "Running"
            ]
          },
          {
            type: "text",
            text: "Are you interested in any of those topics too? Feel free to reach out to me at <a class='${ linkClass }' href='mailto:ricardo@ricardoerikson.me'>ricardo@ricardoerikson.me</a>.",
            templates: ['linkClass']
          }
        ]
      }
    ]
  }
}
