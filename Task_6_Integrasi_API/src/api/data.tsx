export type Film = {
  id: string;
  title: string;
  original_title: string;
  description: string;
  director: string;
  producer: string;
  release_date: string; 
  running_time: string; 
  rt_score: string;
  image?: string;       
  movie_banner?: string;
};

export async function getFilms(): Promise<Film[]> {
  const res = await fetch(`https://ghibliapi.vercel.app/films`);
  if (!res.ok) throw new Error('Failed to fetch films');
  return res.json();
}

export async function getFilmById(id: string): Promise<Film> {
  const res = await fetch(`https://ghibliapi.vercel.app/films/${id}`);
  if (!res.ok) throw new Error('Failed to fetch film');
  return res.json();
}


// ----------- SONGS DATA -------------
export type Song = {
  id: string | number;
  name: string; // Judul lagu
  artist?: string; // Nama artis
  img?: string; // URL poster lagu
  score?: number; // Nilai/Rating lagu
  pl?: {
    name?: string; // Playlist name, optional
  };
};

// song list 

export async function getSongs(): Promise<Song[]> {
  // Data dummy (bisa diganti API asli jika mau)
  return [
    {
      id: '1',
      title: "The Twilight Sad - There's A Girl In The Corner (Official Audio)",
      artist: 'Adrien Joly',
      album: 'Unknown Playlist',
      genre: 'Electro, Indie',
      score: 9,
      cover: 'https://i.scdn.co/image/ab67616d0000b273e09b50f749504e4cb1cb1bcb',
      description:
        "A moody, emotional track that blends atmospheric synths with haunting vocals — one of the top electro picks this week.",

    },
    {
      id: '2',
      title: 'avanged Sefenfold',
      artist: 'ROBIT',
      album: 'Indie Pop',
      genre: 'Indie, Pop, Alternative, New Wave',
      score: 6,
      cover: 'https://i.scdn.co/image/ab67616d0000b273ea69a95b6e0ee46acdb234cc',
      description:
        "An indie pop anthem exploring the bittersweet feelings of parting and change, featuring Maddie Ashman’s smooth vocals.",
    },
    {
      id: '3',
      title: 'Brave Rival - Wild Child (Official Music Video)',
      artist: 'Stefanos Mavrogenis',
      album: 'Unknown Playlist',
      genre: 'Rock, Electro',
      score: 5,
      cover: 'https://i.scdn.co/image/ab67616d0000b2734c587347b18a7155c31689d4',
      description:
        'A fierce, energetic song with strong instrumentals and a catchy chorus that defines modern electro-rock fusion.',
    },
    {
      id: '4',
      title: 'Color Palette - Zombie',
      artist: 'ROBIT',
      album: 'Indie Wave',
      genre: 'Indie, Pop, Alternative, New Wave',
      score: 5,
      cover: 'https://i.scdn.co/image/ab67616d0000b2739153a83a9f14ef893b850b1f',
      description:
        "‘Zombie’ is a mellow yet deep electro-pop piece that captures emotional numbness with hypnotic beats.",
    },
  ];
}

export async function getSongById(id: string): Promise<Song | undefined> {
  const songs = await getSongs();
  return songs.find((s) => s.id === id);
}
