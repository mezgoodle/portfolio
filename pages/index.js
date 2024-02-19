import ProjectCard from "@/components/ProjectCard";
import { createClient } from "contentful";

export default function Home({ projects }) {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectCard key={project.sys.id} project={project} />
      ))}

      <style jsx>{`
        .project-list {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 20px 60px;
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({
    content_type: "project",
  });

  return {
    props: {
      projects: res.items,
    },
  };
}
