export const config = {
  linkClass: ['font-medium', 'text-blue-600', 'hover:text-blue-700', 'hover:underline'].join(' '),
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
