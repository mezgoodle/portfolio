export interface Project {
  id: number;
  created_at: string;
  title: string;
  description: string;
  github_url: string;
  technologies: string[];
  images: string[];
  slug: string;
}

export interface Game {
  id: number;
  created_at: string;
  title: string;
  platform: string;
  review: string;
  images: string[];
  total_number_of_achievements: number;
  my_number_of_achievements: number;
}

export interface SocialLink {
  id: number;
  created_at: string;
  title: string;
  url: string;
  icon_name: string;
}
