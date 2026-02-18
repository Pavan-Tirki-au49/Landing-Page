// Hero data
export const HERO_CONTENT = {
  id: 'hero-1',
  title: 'Cyberpunk: Neon City',
  description: 'In a dystopian future where technology reigns supreme, one rebel fights to take back the city from the corporations that control it.',
  image: 'https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
  year: '2025',
  duration: '2h 15m',
  rating: '4.8'
};

const getPoster = (id, topic = 'movie') => `https://picsum.photos/seed/${id}-${topic}/300/450`;

export const TRENDING_MOVIES = [
  { id: 1, title: 'Inception Protocol', image: getPoster(1, 'scifi') },
  { id: 2, title: 'The Dark Horizon', image: getPoster(2, 'dark') },
  { id: 3, title: 'Lost in Space', image: getPoster(3, 'space') },
  { id: 4, title: 'Neon Nights', image: getPoster(4, 'neon') },
  { id: 5, title: 'Desert Storm', image: getPoster(5, 'desert') },
];

export const TOP_RATED = [
  { id: 6, title: 'Mind Games', image: getPoster(6, 'mind') },
  { id: 7, title: 'Urban Legend', image: getPoster(7, 'urban') },
  { id: 8, title: 'The Architect', image: getPoster(8, 'arch') },
  { id: 9, title: 'Silence', image: getPoster(9, 'quiet') },
];

export const ACTION_MOVIES = [
  { id: 10, title: 'Speed Racers', image: getPoster(10, 'car') },
  { id: 11, title: 'Fighter Jet', image: getPoster(11, 'jet') },
  { id: 12, title: 'Explosion', image: getPoster(12, 'fire') },
];

export const NEW_RELEASES = [
  { id: 13, title: 'Space Odyssey', image: getPoster(13, 'galaxy') },
  { id: 14, title: 'Deep Blue', image: getPoster(14, 'sea') },
  { id: 15, title: 'Mountain Peak', image: getPoster(15, 'mountain') },
  { id: 16, title: 'Urban Light', image: getPoster(16, 'light') },
  { id: 17, title: 'Forest Mystery', image: getPoster(17, 'forest') },
];

export const POPULAR_ON_PLATFORM = [
  { id: 18, title: 'Cyber City', image: getPoster(18, 'cyber') },
  { id: 19, title: 'Neon Driver', image: getPoster(19, 'driver') },
  { id: 20, title: 'Night Life', image: getPoster(20, 'club') },
  { id: 21, title: 'Retro Future', image: getPoster(21, 'retro') },
];

export const WATCH_IT_AGAIN = [
  { id: 22, title: 'Space Odyssey', image: getPoster(22, 'sci') },
  { id: 23, title: 'The Architect', image: getPoster(23, 'build') },
  { id: 24, title: 'Inception Protocol', image: getPoster(24, 'dream') },
];

export const DRAMA_SERIES = [
  { id: 25, title: 'Urban Legend', image: getPoster(25, 'myth') },
  { id: 26, title: 'Silence', image: getPoster(26, 'hush') },
  { id: 27, title: 'Lost in Space', image: getPoster(27, 'void') },
];

export const CONTINUE_WATCHING = [
  { id: 28, title: 'Cyberpunk: Neon City', image: getPoster(28, 'punk') },
  { id: 29, title: 'Desert Storm', image: getPoster(29, 'sand') },
];



