import ProjectCard from "@/components/ProjectCard";
import { supabase } from "@/lib/supabaseClient";

export default async function projects() {
  const { data: projects } = await supabase.from("projects").select();
  if (!projects) {
    return <p>No projects found</p>;
  }
  return (
    <div className="container">
      <h1 className="my-4">Projects</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {projects.map((project) => (
          <div key={project.id} className="col">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
