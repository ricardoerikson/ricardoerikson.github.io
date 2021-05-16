export const config = {
  link: {
    primary: 'font-medium text-blue-600 hover:text-blue-700 hover:underline',
    secondary: 'font-light text-blue-500 hover:text-blue-500 hover:underline'
  },
  iconsColor: 'text-blue-600',
  text: {
    primary: 'text-lg text-gray-700 tracking-normal leading-relaxed',
    secondary: 'text-normal text-gray-700 font-light'
  },
  navbar: {
    links: [
      {
        routerLink: '/',
        name: 'Home'
      },
      {
        routerLink: '/blog',
        name: 'Blog'
      },
      {
        routerLink: '/contact',
        name: 'Contact'
      },
      {
        routerLink: '/about',
        name: 'About'
      },
    ]
  }
};
