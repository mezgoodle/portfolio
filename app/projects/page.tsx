import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

export default async function projects() {
  const { data: projects } = await supabase.from("projects").select();
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects?.map((project) => (
          <li key={project.id}>
            <Link href={`/projects/${project.title}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
