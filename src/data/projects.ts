export type Project = {
  label: string;
  title: string;
  status: 'Live' | 'Building' | 'Soon';
  description: string;
  href: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    label: 'server',
    title: 'TCP Chat Server',
    status: 'Live',
    description:
      'A multi-client chat server written from scratch in C++ over the Winsock API — handshakes, ordered delivery, and framing, documented as a blog series along the way.',
    href: 'https://github.com/animeshhq/TCP-Server',
    stack: ['C++', 'Winsock', 'TCP/IP'],
  },
  {
    label: 'ml',
    title: 'AQI Forecast Model',
    status: 'Building',
    description:
      'A CNN-LSTM model predicting surface air quality from satellite data, built for the Bharatiya Antariksh Hackathon with ISRO.',
    href: '#',
    stack: ['SciKit Learn', 'xarray', 'Sentinel-5P'],
  },

];
