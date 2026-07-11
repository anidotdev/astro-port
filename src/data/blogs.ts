export type Blog = {
  title: string;
  date: string;
  readMins: number;
  tags: string[];
  href: string;
};

export const blogs: Blog[] = [
  {
    title: 'Building a TCP Chat Server, Part 1: The Handshake',
    date: 'Jul 2026',
    readMins: 7,
    tags: ['C++', 'Winsock', 'Networking'],
    href: 'https://medium.com/@anidotdev/part-2-creating-a-tcp-server-in-c-504ed0dc8a92',
  },
  {
    title: 'Making a proxy server using Nginx',
    date: 'May 2026',
    readMins: 9,
    tags: ['Proxy', 'Nginx'],
    href: 'https://medium.com/@anidotdev/making-a-proxy-server-using-nginx-8c194d11bfb4',
  },
];
