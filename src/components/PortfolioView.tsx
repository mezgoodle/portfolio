"use client";

import { useState, useMemo } from "react";
import Card from "@/components/Card";
import GameCard from "@/components/GameCard";
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

  const [activeFilter, setActiveFilter] = useState<string>("All");

  const openGallery = (images: string[]) => {
    setGalleryImages(images);
    setGalleryOpen(true);
  };

  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach((project) => {
      project.technologies.forEach((tech) => techSet.add(tech));
    });
    return ["All", ...Array.from(techSet).sort()];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }
    return projects.filter((project) =>
      project.technologies.includes(activeFilter)
    );
  }, [activeFilter, projects]);

  return (
    <main className="bg-gray-900 text-white min-h-screen p-8 md:p-16">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">
          Hello, I am Maksym Zavalniuk. You can also know me as Mezgoodle or
          Sylvenis.
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          This is my portfolio, where I showcase my skills and experience in web
          development and my passion for video games.
        </p>
      </section>

      <SocialLinks links={links} />

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-teal-500 pl-4">
          My projects
        </h2>
        <div className="flex flex-wrap gap-3 mb-8">
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setActiveFilter(tech)}
              type="button"
              aria-pressed={activeFilter === tech}
              className={`
                px-4 py-2 rounded-full font-semibold text-sm transition-colors duration-300
                ${
                  activeFilter === tech
                    ? "bg-teal-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }
              `}
            >
              {tech}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={
                project.images && project.images.length > 0
                  ? project.images[0]
                  : undefined
              }
              tags={project.technologies}
              linkUrl={`/projects/${project.slug}`}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-teal-500 pl-4">
          Played games
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              description={game.review || `Платформа: ${game.platform}`}
              imageUrl={
                game.images && game.images.length > 0
                  ? game.images[0]
                  : undefined
              }
              onClick={
                game.images && game.images.length > 0
                  ? () => openGallery(game.images)
                  : undefined
              }
              totalNumberOfAchievements={game.total_number_of_achievements}
              myNumberOfAchievements={game.my_number_of_achievements}
            />
          ))}
        </div>
      </section>

      <ImageGallery
        isOpen={galleryOpen}
        close={() => setGalleryOpen(false)}
        images={galleryImages}
      />
    </main>
  );
}
