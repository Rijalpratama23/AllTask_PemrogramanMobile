import { Destination } from '../types';

// gunakan require kalau asset lokal ada di src/asset/
export const destinations: Destination[] = [
  {
    id: '1',
    title: 'Labuan Bajo',
    country: 'Indonesia',
    imageLocal: require('../asset/labuanBajo.jpg'),
    rating: 5.0,
    price: 4000,
    description:
      "From crystal-clear waters to breathtaking sunsets, Labuan Bajo is calling! Explore hidden islands, swim with manta rays, and create memories.",
    coords: { lat: -8.486, lng: 119.889 },
  },
  {
    id: '2',
    title: 'Venezia',
    country: 'Italia',
    imageLocal: require('../asset/italia.jpg'),
    rating: 4.7,
    price: 5000,
    description: 'Romantic canals and historic architecture.',
    coords: { lat: 45.4408, lng: 12.3155 },
  },
];
