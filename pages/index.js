import ProjectCard from "@/components/ProjectCard";
import { createClient } from "contentful";

export default function Home({ projects }) {
  return (
    <div className="container">
      <div className="row">
        {projects.map((project) => (
          <ProjectCard key={project.sys.id} project={project} />
        ))}
      </div>
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
