export const config = {
  linkClass: ['font-medium', 'text-blue-600', 'hover:text-blue-700', 'hover:underline'].join(' '),
  link: {
    secondary: 'font-light text-blue-500 hover:text-blue-500 hover:underline'
  },
  iconsColor: 'text-blue-600',
  text: {
    fontSize: 'text-lg',
    primaryColor: 'text-gray-700'
  },
  navbar: {
    links: [
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
