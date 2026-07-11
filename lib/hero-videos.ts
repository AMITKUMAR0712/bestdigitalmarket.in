export type HeroVideo = {
  src: string;
  poster: string;
  label: string;
};

export const heroVideos: HeroVideo[] = [
  { src: "/hero/1.mp4", poster: "/hero/posters/1.jpg", label: "Software Development" },
  { src: "/hero/2.mp4", poster: "/hero/posters/2.jpg", label: "AI & Neural Networks" },
  { src: "/hero/3.mp4", poster: "/hero/posters/3.jpg", label: "Circuit Engineering" },
  { src: "/hero/4.mp4", poster: "/hero/posters/4.jpg", label: "Chip Architecture" },
];
