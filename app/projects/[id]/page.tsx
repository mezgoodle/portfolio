import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data: project, error } = await supabase
    .from("projects")
    .select()
    .filter("id", "eq", id)
    .single();

  if (error) {
    console.error(error);
    return <h1>Oops, something went wrong!</h1>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              width={200}
              height={200}
              className="img-fluid mb-4 rounded" // Use Bootstrap's responsive image class and rounded corners
              style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }} // Optional: Limit maximum height
            />
          )}
          <h1>{project.title}</h1>
          <p className="lead">{project.description}</p>{" "}
          {/* Use "lead" class for larger text */}
          {project.skills && project.skills.length > 0 && (
            <div className="mb-4">
              <h4>Skills</h4>
              {project.skills.map((skill) => (
                <span key={skill} className="badge bg-secondary me-2">
                  {skill}
                </span>
              ))}
            </div>
          )}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg" // Larger button
          >
            View Project
          </a>
        </div>

        {/* Sidebar (Optional) */}
        <div className="col-md-4">
          <div className="sticky-top" style={{ top: "2rem" }}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Project Details</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Created At:</strong>{" "}
                    {new Date(project.created_at).toLocaleDateString()}
                  </li>
                  {/* Add more project details here as needed */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-4">
        <Link href="/projects" className="btn btn-secondary">
          ← Back
        </Link>
      </div>
    </div>
  );
}
