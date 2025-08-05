"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import Card from "@/components/Card";
import ImageGallery from "@/components/ImageGallery";
import SocialLinks, { SocialLink } from "@/components/SocialLinks";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  github_url: string;
}

interface Game {
  id: number;
  title: string;
  platform: string;
  review: string;
  images: string[];
}

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [games, setGames] = useState<Game[]>([]);
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);

  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: projectsData, error: projectsError } = await supabase
        .from("projects")
        .select("*");
      if (projectsData) setProjects(projectsData);
      if (projectsError)
        console.error("Error fetching projects:", projectsError);

      const { data: gamesData, error: gamesError } = await supabase
        .from("games")
        .select("*");
      if (gamesData) setGames(gamesData);
      if (gamesError) console.error("Error fetching games:", gamesError);

      const { data: linksData, error: linksError } = await supabase
        .from("links")
        .select("*");
      if (linksData) setSocialLinks(linksData);
      if (linksError) console.error("Error fetching links:", linksError);
    };

    fetchData();
  }, []);

  const openGallery = (images: string[]) => {
    setGalleryImages(images);
    setGalleryOpen(true);
  };

  return (
    <main className="bg-gray-900 text-white min-h-screen p-8 md:p-16">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">
          Hello, my name is Maksym Zavalniuk. You can also know me as Mezgoodle
          or Sylvenis.
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Тут ви можете написати коротку інформацію про себе: чим ви займаєтесь,
          які технології вас цікавлять, і що ви любите робити.
        </p>
      </section>

      <SocialLinks links={socialLinks} />

      {/* Секція Проектів */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-teal-500 pl-4">
          Мої проекти
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.images[0] || "/placeholder-image.jpg"} // Використовуємо перше фото як обкладинку
              tags={project.technologies}
              onClick={() => openGallery(project.images)}
            />
          ))}
        </div>
      </section>

      {/* Секція Ігор */}
      <section>
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-teal-500 pl-4">
          Пройдені ігри
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <Card
              key={game.id}
              title={game.title}
              description={game.review || `Платформа: ${game.platform}`}
              imageUrl={game.images[0]} // Перше фото як обкладинка
              onClick={() => openGallery(game.images)}
            />
          ))}
        </div>
      </section>

      {/* Компонент Галереї */}
      <ImageGallery
        isOpen={galleryOpen}
        close={() => setGalleryOpen(false)}
        images={galleryImages}
      />
    </main>
  );
}
