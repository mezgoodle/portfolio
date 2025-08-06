"use client";

import { useState } from "react";
import Card from "@/components/Card";
import ImageGallery from "@/components/ImageGallery";
import SocialLinks from "@/components/SocialLinks";
import type { Project, Game, SocialLink } from "@/types";

interface PortfolioViewProps {
  projects: Project[];
  games: Game[];
  links: SocialLink[];
}

export default function PortfolioView({
  projects,
  games,
  links,
}: PortfolioViewProps) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  const openGallery = (images: string[]) => {
    setGalleryImages(images);
    setGalleryOpen(true);
  };

  return (
    <main className="bg-gray-900 text-white min-h-screen p-8 md:p-16">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">
          Hello, I am Maksym Zavalniuk. You can also know me as Mezgoodle or
          Sylvenis.
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Тут ви можете написати коротку інформацію про себе: чим ви займаєтесь,
          які технології вас цікавлять, і що ви любите робити.
        </p>
      </section>

      {/* Використовуємо дані з пропсів */}
      <SocialLinks links={links} />

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
              imageUrl={project.images[0]}
              tags={project.technologies}
              linkUrl={`/projects/${project.slug}`}
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
              imageUrl={game.images[0]}
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
