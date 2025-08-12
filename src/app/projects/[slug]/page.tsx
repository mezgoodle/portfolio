import { supabase } from "@/lib/supabaseClient";
import { notFound } from "next/navigation";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import type { Project } from "@/types";
import { DEFAULT_IMAGE_URL } from "@/lib/constants";

async function getProject(slug: string): Promise<Project> {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    notFound();
  }

  return data;
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);

  const hasImages = project.images && project.images.length > 0;
  const mainImage = hasImages ? project.images[0] : DEFAULT_IMAGE_URL;

  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Хедер сторінки */}
        <div className="relative w-full h-60 md:h-96 rounded-lg overflow-hidden mb-8">
          <Image
            src={mainImage}
            alt={project.title}
            fill
            priority
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-center text-white drop-shadow-lg">
              {project.title}
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-teal-400 mb-4">
              Про проект
            </h2>
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
              {project.description}
            </p>

            {hasImages && (
              <>
                <h2 className="text-2xl font-bold text-teal-400 mt-8 mb-4">
                  Галерея
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.images.map((img, index) => (
                    <div
                      key={index}
                      className="relative aspect-video rounded-lg overflow-hidden"
                    >
                      <Image
                        src={img}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Сайдбар */}
          <div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Технології</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-teal-500 text-white text-sm font-semibold px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4">Посилання</h3>
              <div className="flex flex-col gap-3">
                {project.github_url && (
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    <FaGithub size={20} />
                    <span>Код на GitHub</span>
                  </a>
                )}
                {/* Можна додати ще посилання, наприклад на живий сайт */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
